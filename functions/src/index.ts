import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {ObjectMetadata} from 'firebase-functions/lib/providers/storage';
// tslint:disable-next-line:no-implicit-dependencies
import {Bucket, Storage} from '@google-cloud/storage';
// @ts-ignore
// tslint:disable-next-line:no-implicit-dependencies
import {GetSignedUrlResponse} from '@google-cloud/storage/build/src/file';


const path = require('path');
const os = require('os');
const fs = require('fs');
// tslint:disable-next-line:no-implicit-dependencies
const spawn = require('child-process-promise').spawn;
// tslint:disable-next-line:no-implicit-dependencies
const mkdirp = require('mkdirp-promise');

const project = admin.initializeApp(functions.config().firebase);
console.log('project -> ', project.name);


const storage = new Storage();
const firestore = admin.firestore();
const defaultStorage = admin.storage();
// const defaultBucket = defaultStorage.bucket();

/**
 * Firebase cloud function to sync uploaded images to firebase storage bucket with firestore
 *
 * @author Anthony Nahas
 * @since 03.2020
 * @version 1.0
 */
export const syncImgsWithFirestore =
  functions
    .storage
    .object()
    .onFinalize(async (object: ObjectMetadata) => {

      console.log('syncImgsWithFirestore is now running', object);

      if (object && object.contentType && !object.contentType.includes('image')) {
        console.log('exiting function');
        return false;
      }

      let downloadURLs: any = null;
      let downloadURL = null;
      try {
        downloadURLs = await getDownloadURL(object);
        downloadURL = downloadURLs[0];
        console.log('Download URL --> ', downloadURL, typeof downloadURL);
        // downloadURL = downloadURL[0];
      } catch (e) {
        console.error('Error while getting download url', e);
      }
      const filePath = object.name;
      console.log('file path -->', filePath);
      // @ts-ignore
      const pathSegments = filePath.split('/');
      console.log('path segments --> ', pathSegments);

      const indexOfID = pathSegments.indexOf('imgs');
      console.log('indexOfID', indexOfID, pathSegments[indexOfID + 1]);
      const imgID = pathSegments[indexOfID + 1];
      const lastSegment = pathSegments[pathSegments.length - 1];
      console.log('lastSegment', lastSegment);
      const nameSegments = lastSegment.split('_');
      console.log('nameSegments', nameSegments);
      const resize = nameSegments[nameSegments.length - 1];
      console.log('resize', resize);
      const size = resize.split('x')[0];
      console.log('size', size, typeof size);

      // const img: NahausImage = {
      //   id: imgID,
      //   downloadURL,
      //   path: filePath
      // };

      const indexOfThumbs = pathSegments.indexOf('thumbs');
      console.log('indexOfThumbs', indexOfThumbs);
      let firestorePath: string;
      if (indexOfThumbs !== -1) {
        // the image is a thumbnail
        firestorePath = pathSegments.splice(0, indexOfThumbs).join('/');
        console.log('firestorePath', firestorePath);
        const thumbsMapKey: string = `thumbs.${size}`;
        return await firestore.doc(firestorePath).update({
          [thumbsMapKey]: {
            id: imgID,
            downloadURL,
            path: filePath
          }
        });
      } else {
        pathSegments.pop();
        firestorePath = pathSegments.join('/');
        console.log('firestorePath', firestorePath);
        return await firestore.doc(firestorePath).set({
          id: imgID,
          downloadURL,
          path: filePath
        }, {merge: true});
      }
    });

function getDownloadURL(object: ObjectMetadata): Promise<GetSignedUrlResponse> | void {
  if (!object.name) {
    return;
  }
  const bucket: Bucket = defaultStorage.bucket();
  const file = bucket.file(object.name);

  // Get a signed URL for the file
  return file.getSignedUrl({
    action: 'read',
    expires: '03-17-2025'
  });
}

export const adjustOrientation = functions
  .storage
  .object()
  .onFinalize(async (object) => {
    const filePath = object.name;
    const bucketName = object.bucket;
    const metadata = object.metadata;

    const tempLocalFile = path.join(os.tmpdir(), filePath);
    const tempLocalDir = path.dirname(tempLocalFile);
    const bucket = storage.bucket(bucketName);

    if (object && object.contentType && !object.contentType.startsWith('image/')) {
      console.log('This is not an image.');
      return null;
    }

    if (metadata && metadata.autoOrient) {
      console.log('This is already rotated');
      return null;
    }

    return mkdirp(tempLocalDir).then(() => {
      // Download file from bucket.
      // @ts-ignore
      return bucket.file(filePath).download({destination: tempLocalFile});
    }).then(() => {
      console.log('The file has been downloaded to', tempLocalFile);
      // Convert the image using ImageMagick.
      return spawn('convert', [tempLocalFile, '-auto-orient', tempLocalFile]);
    }).then(() => {
      console.log('rotated image created at', tempLocalFile);
      // @ts-ignore
      metadata.autoOrient = true;
      return bucket.upload(tempLocalFile, {
        destination: filePath,
        metadata: {metadata: metadata}
      });
    }).then(() => {
      console.log('image uploaded to Storage at', filePath);
      // Once the image has been converted delete the local files to free up disk space.
      fs.unlinkSync(tempLocalFile);
      console.log('Deleted local file', filePath);
      return;
    });
  });

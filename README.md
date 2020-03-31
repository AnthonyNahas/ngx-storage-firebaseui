<p align="center">
  <img height="256px" width="256px" style="text-align: center;"
  src="https://cdn.jsdelivr.net/gh/anthonynahas/ngx-storage-firebaseui@master/assets/angular-material-extensions-logo.svg">
</p>

# ngx-storage-firebaseui - Open Source Library for Angular Web Apps to integrate a material user interface for firebase storage.

[![npm version](https://badge.fury.io/js/ngx-storage-firebaseui.svg)](https://badge.fury.io/js/ngx-storage-firebaseui)
[![demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://ngx-storage-firebaseui.firebaseapp.com)
[![docs: typedoc](https://img.shields.io/badge/docs-typedoc-4D0080.svg)](https://ngx-storage-firebaseui.firebaseapp.com/doc/index.html)
[![codecov](https://codecov.io/gh/anthonynahas/ngx-storage-firebaseui/branch/master/graph/badge.svg)](https://codecov.io/gh/anthonynahas/ngx-storage-firebaseui)
[![CircleCI branch](https://img.shields.io/circleci/project/github/AnthonyNahas/ngx-storage-firebaseui/master.svg?label=circleci)](https://circleci.com/gh/AnthonyNahas/ngx-storage-firebaseui)
[![Build Status](https://travis-ci.org/AnthonyNahas/ngx-storage-firebaseui.svg?branch=master)](https://travis-ci.org/AnthonyNahas/ngx-storage-firebaseui)
[![Join the chat at https://gitter.im/ngx-storage-firebaseui/Lobby](https://badges.gitter.im/ngx-storage-firebaseui/Lobby.svg)](https://gitter.im/ngx-storage-firebaseui/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![dependency Status](https://david-dm.org/anthonynahas/ngx-storage-firebaseui/status.svg)](https://david-dm.org/anthonynahas/ngx-storage-firebaseui)
[![devDependency Status](https://david-dm.org/anthonynahas/ngx-storage-firebaseui/dev-status.svg?branch=master)](https://david-dm.org/anthonynahas/ngx-storage-firebaseui#info=devDependencies)
[![npm](https://img.shields.io/npm/dt/ngx-storage-firebaseui.svg?style=flat-square)](https://www.npmjs.com/package/ngx-storage-firebaseui)
[![Greenkeeper badge](https://badges.greenkeeper.io/AnthonyNahas/ngx-storage-firebaseui.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/anthonynahas/ngx-storage-firebaseui.svg?style=flat-square)](https://github.com/AnthonyNahas/ngx-storage-firebaseui/blob/master/LICENSE)
[![GitHub forks](https://img.shields.io/github/forks/anthonynahas/ngx-storage-firebaseui.svg?style=social&label=Fork)](https://github.com/AnthonyNahas/ngx-storage-firebaseui/fork)
[![GitHub stars](https://img.shields.io/github/stars/anthonynahas/ngx-storage-firebaseui.svg?style=social&label=Star)](https://github.com/AnthonyNahas/ngx-storage-firebaseui)
[![GitHub followers](https://img.shields.io/github/followers/anthonynahas.svg?style=social&label=Follow)](https://github.com/AnthonyNahas/ngx-storage-firebaseui)
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/ngAnthonyy)
[![Twitter Follow](https://img.shields.io/twitter/follow/ngAnthonyy.svg?style=social&label=Follow)](https://twitter.com/ngAnthonyy)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/gdi2290/awesome-angular)



Angular UI component for [firebase](https://firebase.google.com/docs/auth/web/firebaseui) authentication.
This library is an angular module (including angular components and services) that allows to upload/download or event delete files 
from firebase storage within a firebase project. 


## Built by and for developers :heart:
Do you have `any` question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/anthonynahas/ngx-storage-firebaseui/issues)

If you like this project, support [ngx-storage-firebaseui](https://github.com/anthonynahas/ngx-storage-firebaseui)
by starring :star: and sharing it :loudspeaker:

## Table of Contents
- [Why to use ngx-storage-firebaseui ?](#why-to-use-ngx-storage-firebaseui)
- [Library's components](#components)
- [Supported Providers](#supported-procress-and-actions)
- [Supported Processes and Actions](#supported-procress-and-actions)
- [Requirements](#requirements)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [Peer Dependencies](#peerDependencies)
- [Dependencies](#dependencies)
- [Firebase Cloud Functions and Firebase extensions](#firebase_requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API](#api)
- [Run Demo App Locally](docs/INSTRUCTIONS_DEMO.md)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

<a name="components"/>

## Why to use ngx-storage-firebaseui ?
- :gift_heart: it uses a responsive and accessible web design UX/UI from google material concepts and components (supporting desktop, tablet and mobile view) incl. smooth animations for a better UX.
- :lipstick: pick up your own theme! change the primary, accent and warn colors whenever you need (e.g to support light and dark themes)
- :ship: super easy to use with an angular based project (project that is created with the [angular-cli](https://cli.angular.io/))
- :soon: optional configuration
- :recycle: configure your components in runtime
- :recycle: reusable components for every project that needs some uploads workflows with a firebase project/app.
- :customs: built in feedback mechanism in form of a [snackbar](https://material.angular.io/components/snack-bar/overview) when an error or `any` important event occurred.
- :sos: ability to delete files
- :ghost: compatible with `ngx-auth-firebaseui` [learn more](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- :fire: [Sync user's uploads with FIRESTORE](FIRESTORE_SYNC.md) **AUTOMATICALLY**
- :tada: Supports SSR - Server Side Rendering
- :soon: [support of i18n](https://ngx-storage-firebaseui.firebaseapp.com/i18n)


<a name="why-to-use-ngx-storage-firebaseui"/>

## Library's components
- `<ngx-storage-firebaseui-images>` used to upload imaged to firebase storage and sync them with firestore 


## Supported Processes/Workflows and Actions:
- upload images
- image grid
- delete image (soon)
- pre-built firebase functions to auto-rotate images (soon)          


<a name="requirements"/>

- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)
- [angular material icons](https://material.angular.io/guide/getting-started#step-6-optional-add-material-icons)
- [angular cdk - v9.x](https://www.npmjs.com/package/@angular/cdk)
- [angular material - v9.x](https://www.npmjs.com/package/@angular/material)
- [angular animations - v9.x](https://www.npmjs.com/package/@angular/animations)
- [angular router - v9.x](https://www.npmjs.com/package/@angular/router)
- [angular flex-layout v9.0.0-beta.29](https://www.npmjs.com/package/@angular/flex-layout)
- [@angular/fire - v5.4.x](https://www.npmjs.com/package/@angular/fire)
- [firebase - v7.13.x](https://www.npmjs.com/package/firebase)

the full tutorial guide can be found [here](https://ngx-storage-firebaseui.firebaseapp.com/getting-started)


<a name="demo"/>

##  [Demo](https://ngx-storage-firebaseui.firebaseapp.com/) |  [Features](https://ngx-storage-firebaseui.firebaseapp.com/features) | [Examples](https://ngx-storage-firebaseui.firebaseapp.com/examples)


---


<a name="sreenshots"/>



---

<a name="peerDependencies"/>

## Peer Dependencies - please make sure that peerDependencies are installed if you are not using the schematics

```json
"peerDependencies": {
    "@angular/core": "^9.x",
    "@angular/animations": "^9.x",
    "@angular/cdk": "^9.x",
    "@angular/flex-layout": "^9.0.0-beta.29",
    "@angular/material": "^9.x",
    "@angular/fire": "5.4.x",
    "firebase": "7.13.x",
  }
```


---

<a name="dependencies"/>

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, developed with 9.x) - obviously


<a name="firebase_requirements"/>

In the following section, I will show you how to improve the user's experience regarding images 

## Install firebase extension - [Resize Images](https://firebase.google.com/products/extensions/storage-resize-images)

1. install the storage resize images extension in your firebase project
2. set your firebase cloud function's location
3. pick either the default bucket or choose another one
4. set size images: `50x50,100x100,200x200,500x500,1000x1000,2000x2000`
5. choose whether to delete the original image (tip: don't do that so that you can regenerate the thumbnails)
6. choose the cloud storage path for resized images `thumbs` (see below an example of an image directory in firebase storage)

<p align="center">
  <img height="256px" width="256px" style="text-align: center;"
  src="https://cdn.jsdelivr.net/gh/anthonynahas/ngx-storage-firebaseui@master/assets/firebase_extensions/1.png">
</p>

after installation

<p align="center">
  <img height="256px" width="256px" style="text-align: center;"
  src="https://cdn.jsdelivr.net/gh/anthonynahas/ngx-storage-firebaseui@master/assets/firebase_extensions/2.png">
</p>

<p align="center">
  <img height="256px" width="256px" style="text-align: center;"
  src="https://cdn.jsdelivr.net/gh/anthonynahas/ngx-storage-firebaseui@master/assets/firebase_extensions/3.png">
</p>

## Upload firebase cloud functions to sync the uploaded images to firebase storage with firestore (`required`)

1. `firebase init`
2. init firebase cloud function in your firebase project (`typescript`)
3. copy and paste the below functions
4. upload `firbease deploy only functions`

```typescript
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { ObjectMetadata } from 'firebase-functions/lib/providers/storage';
// tslint:disable-next-line:no-implicit-dependencies
import { Bucket, Storage } from '@google-cloud/storage';
// @ts-ignore
// tslint:disable-next-line:no-implicit-dependencies
import { GetSignedUrlResponse } from '@google-cloud/storage/build/src/file';


const path = require('path');
const os = require('os');
const fs = require('fs');
// tslint:disable-next-line:no-implicit-dependencies
const spawn = require('child-process-promise').spawn;
// tslint:disable-next-line:no-implicit-dependencies
const mkdirp = require('mkdirp-promise');
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
        }, { merge: true });
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
      return bucket.file(filePath).download({ destination: tempLocalFile });
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
        metadata: { metadata: metadata }
      });
    }).then(() => {
      console.log('image uploaded to Storage at', filePath);
      // Once the image has been converted delete the local files to free up disk space.
      fs.unlinkSync(tempLocalFile);
      console.log('Deleted local file', filePath);
      return;
    });
  });

```





<a name="installation"/>

## (1) [Installation](https://ngx-storage-firebaseui.firebaseapp.com/getting-started)

## 1. Install via *ng add*. (Recommended)

If Angular Material Design is not setup, just run `ng add @angular/material` [learn more](https://material.angular.io/guide/getting-started)

Now add the library via the `angular schematics`
```shell
ng add ngx-storage-firebaseui
```

- :heavy_check_mark: peer dependencies will be automatically added the package.json and installed
- :heavy_check_mark:  `ngx-storage-firebaseui` 's module will be automatically imported to the root module (just replace `PUT_YOUR_FIREBASE_API_KEY_HERE` with your firebase api key)
- :heavy_check_mark: `ngx-storage-firebaseui` 's assets will be automatically added the `angular.json` file

## 2. Install via *npm*. (Alternative)

Install above dependencies via *npm*.

Now install `ngx-storage-firebaseui` via:
```shell
npm install --save ngx-storage-firebaseui
```

```bash
npm i -s @angular/material @angular/cdk @angular/flex-layout @angular/forms @angular/animations @angular/router
```

Firebase deps
```bash
npm i -s firebase @angular/fire
```

` -> continue by following the instructions ` [here](https://github.com/anthonynahas/ngx-storage-firebaseui/tree/master/docs/INSTRUCTIONS.md)

Once installed you need to import the main module:
```js
import { NgxStorageFirebaseuiModule } from 'ngx-storage-firebaseui';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` NgxStorageFirebaseuiModule .forRoot()`):


and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgxStorageFirebaseuiModule } from 'ngx-storage-firebaseui';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Specify the ngx-storage-firebaseui library as an import
    NgxStorageFirebaseuiModule.forRoot({
                    apiKey: 'your-firebase-apiKey',
                    authDomain: 'your-firebase-authDomain',
                    databaseURL: 'your-firebase-databaseURL',
                    projectId: 'your-firebase-projectId',
                    storageBucket: 'your-firebase-storageBucket',
                    messagingSenderId: 'your-firebase-messagingSenderId'
                }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Other modules in your application can simply import ` NgxStorageFirebaseuiModule `:

```js
import { NgxStorageFirebaseuiModule } from 'ngx-storage-firebaseui';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [NgxStorageFirebaseuiModule, ...],
})
export class OtherModule {
}
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-storage-firebaseui`:
```js
{
  'ngx-storage-firebaseui';: 'node_modules/ngx-storage-firebaseui/bundles/ngx-storage-firebaseui.umd.js',
}
```

<a name="configuration"/>

## (2) [Configuration](https://ngx-storage-firebaseui.firebaseapp.com/examples)

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgxStorageFirebaseuiModule } from 'ngx-storage-firebaseui';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Specify the ngx-storage-firebaseui library as an import
    NgxStorageFirebaseuiModule.forRoot(
                {
                  apiKey: 'your-firebase-apiKey',
                  authDomain: 'your-firebase-authDomain',
                  databaseURL: 'your-firebase-databaseURL',
                  projectId: 'your-firebase-projectId',
                  storageBucket: 'your-firebase-storageBucket',
                  messagingSenderId: 'your-firebase-messagingSenderId'
                },
                 () => 'your_app_name_factory',
                {
                  enableFirestoreSync: true, // enable/disable autosync files with firestore
                  enableEmailVerification: true, // default: true
                }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

----


<a name="usage"/>

---
## (3) [Usage](https://ngx-storage-firebaseui.firebaseapp.com/getting-started)

Once the library is imported, you can use its components, directives and pipes in your Angular application:

### `<ngx-storage-firebaseui-images></ngx-storage-firebaseui-images>` [see the usage](https://github.com/AnthonyNahas/ngx-storage-firebaseui/blob/master/docs/ngx-storage-firebaseui.md#usage)


<a name="api"/>

## API

### `<ngx-storage-firebaseui-images></ngx-storage-firebaseui-images>` [see the api](https://github.com/AnthonyNahas/ngx-storage-firebaseui/blob/master/docs/ngx-storage-firebaseui.md#api)


| option | bind  |  type  |   default    | description  |
|:---------------------|:------:|:------:|:------------:|:-------------------------------------------------------------------------------------------------|
| path                        | `Input()`  | `string` | - | path to store the image into firebase storage as well as in the firestore
| load                        | `Input()`  | `boolean` | `true` | whether to load the uploaded images from firebase  
| addButtonTooltipText        | `Input()`  | `string` | `add picture` | text of the add button tooltip 
| onLoad                      | `Output()`  | `number`  | - | called when the images are loaded from firestore
| onImageUploaded             | `Output()`  | `number`  | - | called when an image is uploaded to firebase storage
| onImageSelectedAtIndex      | `Output()`  | `number`  | - | called when an image is selected / clicked



## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/anthonynahas/ngx-auth-firebaseui)
- [ngx-linkifyjs](https://github.com/anthonynahas/ngx-linkifyjs)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/fab-menu](https://github.com/angular-material-extensions/fab-menu)
- [@angular-material-extensions/select-country](https://github.com/angular-material-extensions/select-country)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)
- [@angular-material-extensions/faq](https://github.com/angular-material-extensions/faq)
- [angular-material-extensions/freelancer-theme](https://github.com/angular-material-extensions/freelancer-theme)
- [@firebaseui/ng-bootstrap](https://github.com/firebaseui/ng-bootstrap)

---

<a name="support"/>

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/anthonynahas/ngx-storage-firebaseui/issues)
+ let us chat on [Gitter](https://gitter.im/ngx-auth-firebaseui/Lobby)

 Built by and for developers :heart: we will help you :punch:

---

![jetbrains logo](assets/jetbrains-variant-4_logos/jetbrains-variant-4.png)

This project is supported by [jetbrains](https://www.jetbrains.com/) with 1 ALL PRODUCTS PACK OS LICENSE incl. [webstorm](https://www.jetbrains.com/webstorm)

---

<a name="license"/>

## License

Copyright (c) 2020 [Anthony Nahas](https://github.com/AnthonyNahas). Licensed under the MIT License (MIT)

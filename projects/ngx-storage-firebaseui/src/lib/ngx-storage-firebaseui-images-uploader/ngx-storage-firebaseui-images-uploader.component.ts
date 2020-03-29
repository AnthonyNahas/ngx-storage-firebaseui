import {Component, Input, OnInit} from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {finalize, tap} from 'rxjs/operators';

@Component({
  selector: 'ngx-storage-firebaseui-images-uploader',
  templateUrl: './ngx-storage-firebaseui-images-uploader.component.html',
  styleUrls: ['./ngx-storage-firebaseui-images-uploader.component.scss']
})
export class NgxStorageFirebaseuiImagesUploaderComponent implements OnInit {

  @Input() path: string;
  @Input() file: File;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) {
  }

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {

    // The storage path
    // const path = `test/${Date.now()}_${this.file.name}`;
    const path = `${this.path}/${this.db.createId()}/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();

        const pathSegments = path.split('/');
        pathSegments.pop();
        this.db.doc(pathSegments.join('/')).set({downloadURL: this.downloadURL, path}, {merge: true});
      })
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}

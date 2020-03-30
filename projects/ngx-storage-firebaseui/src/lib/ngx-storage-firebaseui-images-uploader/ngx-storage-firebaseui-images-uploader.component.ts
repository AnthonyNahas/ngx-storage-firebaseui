import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {finalize, tap} from 'rxjs/operators';
import {NgxStorageImage} from '../interfaces';

@Component({
  selector: 'ngx-storage-firebaseui-images-uploader',
  templateUrl: './ngx-storage-firebaseui-images-uploader.component.html',
  styleUrls: ['./ngx-storage-firebaseui-images-uploader.component.scss']
})
export class NgxStorageFirebaseuiImagesUploaderComponent implements OnInit {

  @Input() path: string;
  @Input() file: File;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onImageUploaded: EventEmitter<NgxStorageImage> = new EventEmitter<NgxStorageImage>();

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL;
  id: string;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) {
  }

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {

    this.id = this.db.createId();

    // The storage path
    // const path = `test/${Date.now()}_${this.file.name}`;
    const path = `${this.path}/${this.id}/${Date.now()}_${this.file.name}`;

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

        const image: NgxStorageImage = {id: this.id, downloadURL: this.downloadURL, path};
        this.onImageUploaded.emit(image);

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

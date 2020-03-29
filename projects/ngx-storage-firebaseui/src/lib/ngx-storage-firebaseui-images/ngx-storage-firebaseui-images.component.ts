import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, QueryFn} from '@angular/fire/firestore';
import {takeUntil} from 'rxjs/operators';
import {NgxStorageImage} from '../interfaces';

@Component({
  selector: 'ngx-storage-firebaseui-images',
  templateUrl: './ngx-storage-firebaseui-images.component.html',
  styleUrls: ['./ngx-storage-firebaseui-images.component.scss']
})
export class NgxStorageFirebaseuiImagesComponent implements OnInit {

  @ViewChild('fileInput', {static: false}) fileInput: ElementRef;

  @Input() path: string;

  @Input() load = true;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onLoad: EventEmitter<any> = new EventEmitter<any>();

  files: File[] = [];
  images: NgxStorageImage[] = [];

  isLoading: boolean;
  editMode: boolean;

  // Private
  private unsubscribeAll: Subject<any>;

  constructor(private db: AngularFirestore) {
    // Set the private defaults
    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    if (this.load) {
      this.loadImages();
    }
  }

  link() {
    this.fileInput.nativeElement.click();
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  loadImages() {
    this.getCollectionRef(this.path)
      .valueChanges()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((imgs) => {
        this.onLoad.emit(imgs);
        this.images = imgs;
        console.log('imgs', imgs);
      });
  }

  public getCollectionRef(path: string, queryFn?: QueryFn): AngularFirestoreCollection<NgxStorageImage> {
    return this.db.collection(`${path}`, queryFn);
  }

  deleteImage(i: number) {
    console.log('delete image at index', i);
  }
}

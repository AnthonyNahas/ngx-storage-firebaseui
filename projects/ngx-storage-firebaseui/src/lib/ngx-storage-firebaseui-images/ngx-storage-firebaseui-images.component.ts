import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'ngx-storage-firebaseui-images',
  templateUrl: './ngx-storage-firebaseui-images.component.html',
  styleUrls: ['./ngx-storage-firebaseui-images.component.scss']
})
export class NgxStorageFirebaseuiImagesComponent implements OnInit {

  @ViewChild('fileInput', {static: false}) fileInput: ElementRef;

  @Input() path: string;

  files: File[] = [];

  isLoading: boolean;
  editMode: boolean;

  // Private
  private unsubscribeAll: Subject<any>;

  constructor() {
    // Set the private defaults
    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
  }

  link() {
    this.fileInput.nativeElement.click();
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }
}

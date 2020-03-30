import {Component, OnInit} from '@angular/core';
import {Lightbox} from '@ngx-gallery/lightbox';
import {Gallery, GalleryItem, ImageItem} from '@ngx-gallery/core';
import {NgxStorageImage} from 'ngx-storage-firebaseui';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss']
})
export class UsageComponent implements OnInit {

  galleryId = 'lightbox';
  items: GalleryItem[];

  constructor(public gallery: Gallery, private lightbox: Lightbox) {
  }

  ngOnInit(): void {
  }

  openInFullScreen(index: number) {
    this.lightbox.open(index, this.galleryId, {
      panelClass: 'fullscreen'
    });
  }

  onImageSelectedAtIndex($event: number) {
    this.openInFullScreen($event);
  }

  onImageUploaded($event: NgxStorageImage) {
    console.log('onImageUploaded', $event);
  }

  onLoad($event: NgxStorageImage[]) {
    this.items = $event.map(img => {
      return new ImageItem({src: img.downloadURL, thumb: img.downloadURL});
    });
    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.items);
  }
}

### Install 3rd Party Angular Library - Gallery component to display image in a gallery view [ngx-gallery](https://github.com/MurhafSousli/ngx-gallery)

```bash
npm i -s @ngx-gallery/core @ngx-gallery/lightbox 
```

#### import the ngx-gallery required modules

```typescript

import {GalleryModule} from '@ngx-gallery/core';
import {LightboxModule} from '@ngx-gallery/lightbox';

[
    ...
    GalleryModule,
    LightboxModule,
  ],
```

### Your template should be similar to the following

```html
<ngx-storage-firebaseui-images path="cars"
                               (onLoad)="onLoad($event)"
                               (onImageUploaded)="onImageUploaded($event)"
                               (onImageSelectedAtIndex)="onImageSelectedAtIndex($event)">
</ngx-storage-firebaseui-images>
```

please consider to use your own `path`


### the workflow

1. listen on loading images from firestore via `ngx-storage-firebaseui`
2. convert the loaded image to `ImageItem`
3. open the `lightbox` gallery when an image is selected


```typescript
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

```

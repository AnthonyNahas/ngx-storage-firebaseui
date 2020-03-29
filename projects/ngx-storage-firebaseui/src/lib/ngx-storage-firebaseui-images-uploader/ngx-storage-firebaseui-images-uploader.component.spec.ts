import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxStorageFirebaseuiImagesUploaderComponent} from './ngx-storage-firebaseui-images-uploader.component';

describe('NgxStorageFirebaseuiImagesUploaderComponent', () => {
  let component: NgxStorageFirebaseuiImagesUploaderComponent;
  let fixture: ComponentFixture<NgxStorageFirebaseuiImagesUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxStorageFirebaseuiImagesUploaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStorageFirebaseuiImagesUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxStorageFirebaseuiImagesComponent} from './ngx-storage-firebaseui-images.component';

describe('NgxStorageFirebaseuiImagesComponent', () => {
  let component: NgxStorageFirebaseuiImagesComponent;
  let fixture: ComponentFixture<NgxStorageFirebaseuiImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxStorageFirebaseuiImagesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStorageFirebaseuiImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

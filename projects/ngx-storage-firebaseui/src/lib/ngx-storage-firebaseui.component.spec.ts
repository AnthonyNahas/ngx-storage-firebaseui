import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxStorageFirebaseuiComponent} from './ngx-storage-firebaseui.component';

describe('NgxStorageFirebaseuiComponent', () => {
  let component: NgxStorageFirebaseuiComponent;
  let fixture: ComponentFixture<NgxStorageFirebaseuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxStorageFirebaseuiComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStorageFirebaseuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

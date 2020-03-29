import {TestBed} from '@angular/core/testing';

import {NgxStorageFirebaseuiService} from './ngx-storage-firebaseui.service';

describe('NgxStorageFirebaseuiService', () => {
  let service: NgxStorageFirebaseuiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxStorageFirebaseuiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

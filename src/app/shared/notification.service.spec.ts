import { TestBed } from '@angular/core/testing';

import { NotidicationService } from './notidication.service';

describe('NotidicationService', () => {
  let service: NotidicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotidicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TechnicalDetailsService } from './technical-details.service';

describe('TechnicalDetailsService', () => {
  let service: TechnicalDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicalDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

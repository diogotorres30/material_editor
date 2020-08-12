import { TestBed } from '@angular/core/testing';

import { AssessmentScopeService } from './assessment-scope.service';

describe('AssessmentScopeService', () => {
  let service: AssessmentScopeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentScopeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

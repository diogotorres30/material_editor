import { TestBed } from '@angular/core/testing';

import { ProjectFormOptionsService } from './projectForm-options.service';

describe('FormOptionsService', () => {
  let service: ProjectFormOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectFormOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

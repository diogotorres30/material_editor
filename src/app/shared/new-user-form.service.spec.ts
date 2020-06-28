import { TestBed } from '@angular/core/testing';

import { NewUserFormService } from './new-user-form.service';

describe('NewUserFormService', () => {
  let service: NewUserFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewUserFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NewRelatorioFormService } from './new-relatorio-form.service';

describe('RelatorioFormService', () => {
  let service: NewRelatorioFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewRelatorioFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

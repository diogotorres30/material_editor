import { TestBed } from '@angular/core/testing';

import { RelatorioFormService } from './relatorio-form.service';

describe('RelatorioFormService', () => {
  let service: RelatorioFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelatorioFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

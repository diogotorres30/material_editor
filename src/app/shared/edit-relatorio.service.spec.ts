import { TestBed } from '@angular/core/testing';

import { EditRelatorioService } from './edit-relatorio.service';

describe('EditRelatorioService', () => {
  let service: EditRelatorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditRelatorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

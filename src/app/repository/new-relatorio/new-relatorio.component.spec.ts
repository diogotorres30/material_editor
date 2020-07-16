import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRelatorioComponent } from './new-relatorio.component';

describe('NewRelatorioComponent', () => {
  let component: NewRelatorioComponent;
  let fixture: ComponentFixture<NewRelatorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRelatorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

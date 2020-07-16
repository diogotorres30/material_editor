import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosTableComponent } from './relatorios-table.component';

describe('RelatoriosTableComponent', () => {
  let component: RelatoriosTableComponent;
  let fixture: ComponentFixture<RelatoriosTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatoriosTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoriosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

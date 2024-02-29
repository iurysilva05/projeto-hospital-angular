import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgAgendamentoComponent } from './pg-agendamento.component';

describe('PgAgendamentoComponent', () => {
  let component: PgAgendamentoComponent;
  let fixture: ComponentFixture<PgAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgAgendamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

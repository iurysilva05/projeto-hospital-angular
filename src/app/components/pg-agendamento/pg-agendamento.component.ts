import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-pg-agendamento',
  standalone: true,
  imports: [PgAgendamentoComponent,HeaderComponent],
  templateUrl: './pg-agendamento.component.html',
  styleUrl: './pg-agendamento.component.css'
})
export class PgAgendamentoComponent {

}

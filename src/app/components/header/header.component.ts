import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomComponent } from '../hom/hom.component';
import { PgAgendamentoComponent } from '../pg-agendamento/pg-agendamento.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage, HomComponent,PgAgendamentoComponent
  ], //facilita o carregamento da imagens
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  navegarParaPaginadelogin() {
    this.router.navigate(['/hom.component']);
  }

  navegarPagindaAgendamento() {
    this.router.navigate(['/pg-agendamento']);

  }

}

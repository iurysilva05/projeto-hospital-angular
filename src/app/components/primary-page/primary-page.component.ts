import { Component } from '@angular/core';
import { HomComponent } from '../hom/hom.component';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-primary-page',
  standalone: true,
  imports: [HomComponent, HeaderComponent],
  templateUrl: './primary-page.component.html',
  styleUrl: './primary-page.component.css'
})
export class PrimaryPageComponent {

  constructor(private router: Router) {}

  navegarParaPaginadelogin() {
    this.router.navigate(['/hom.component']);
  }
}

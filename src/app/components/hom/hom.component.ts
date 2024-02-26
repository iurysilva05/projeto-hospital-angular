import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { Location } from '@angular/common';
import { PrimaryPageComponent } from '../primary-page/primary-page.component';



@Component({
  selector: 'app-hom',
  standalone: true,
  imports: [HeaderComponent,BtnPrimaryComponent,ReactiveFormsModule,NgOptimizedImage,
  PrimaryPageComponent,],
  providers: [],
  templateUrl: './hom.component.html',
  styleUrl: './hom.component.css'
})
export class HomComponent {


  myformslogin!: FormGroup;

  constructor(private location: Location) {
    this.myformslogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required]),
    });


  }

  voltarPaginaAnterior() {
    this.location.back();
  }


  dosubmit(){
    console.log(this.myformslogin.value)
  }



  senha: string = '';
  senhaVisivel: boolean = false;

  mostrarOcultarSenha() {
    this.senhaVisivel = !this.senhaVisivel;
    const senhaInput = document.getElementById('senhaInput') as HTMLInputElement;

    if (this.senhaVisivel) {
      senhaInput.type = 'text';
    } else {
      senhaInput.type = 'password';
    }
  }



}

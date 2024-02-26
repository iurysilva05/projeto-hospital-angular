import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomComponent } from './components/hom/hom.component';
import { PrimaryPageComponent } from './components/primary-page/primary-page.component';

export const routes: Routes = [

  { path: "", component: PrimaryPageComponent },
  { path: "hom.component", component: HomComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

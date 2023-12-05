import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { ActividadComponent } from './actividad/actividad.component';
import { LoginComponent } from './login/login.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
  },
  {
    path: 'explorar',
    component: ExplorarComponent,
  },
  {
    path: 'buceo',
    component: ActividadComponent,
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'nosotros',
    component: NosotrosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

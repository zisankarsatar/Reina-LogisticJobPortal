import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app/app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children:[
      {path:'register', component:RegisterComponent},
      {path:'',component:LoginComponent},
      {path:'login', component:LoginComponent},      
      {path:'home', component:HomeComponent,},
      
      {path:'**',redirectTo:"home",pathMatch:"full" }

    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
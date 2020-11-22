import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http'; //HttpClientModule eklendi
import {FormsModule,ReactiveFormsModule} from '@angular/forms';// form modülleri eklendi
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule ,//eklendi
    HttpClientModule,// eklendi
    FormsModule,ReactiveFormsModule,// eklendi
    BrowserAnimationsModule,MatToolbarModule,
    MatIconModule
  ],
  providers: [MatToolbarModule],
  bootstrap: [AppComponent,MatToolbarModule]
})
export class AppModule { }

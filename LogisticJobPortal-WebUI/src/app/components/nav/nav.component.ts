import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers:[LoginComponent]
})
export class NavComponent implements OnInit {

  constructor(
    private loginComponent:LoginComponent
  ) { }

  ngOnInit(): void {
  }

  logOut(){
    this.loginComponent.logOut(); 
  }
  
  get isAuth(){
   return this.loginComponent.isAuthenticated;
  }

}

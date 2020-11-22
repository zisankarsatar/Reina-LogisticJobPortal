import { Component } from '@angular/core';
//import { AuthService } from './services/auth.service';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoginComponent]
})
export class AppComponent {
  title = 'ogretmen-ders-portal';
  
  constructor(private loginComponent:LoginComponent) { }
    
    
  
  get isAuth(){
    // console.log("appcomponent auth "+this.loginComponent.isAuthenticated);
   //return this.loginComponent.isAuthenticated;
   return true;

   }
}



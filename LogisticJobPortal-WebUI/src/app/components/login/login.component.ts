import { Component, OnInit, AfterViewInit } from '@angular/core';
//import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    //private authService: AuthService,
    private router: Router
  ) { }

  userLogin: any = {}

   ngOnInit(): void {
    //if (this.isAuthenticated) {
      //this.router.navigateByUrl("/home");
    //}
  }

  login() {
    //this.authService.login(this.userLogin);
  }
  goToRegister() {
    this.router.navigateByUrl('/register');
  }

  get isAuthenticated() {
    // console.log("login", this.authService.loggedIn())
    //return this.authService.loggedIn();
    return console.log("isAuthenticated");
  }
  logOut() {
    //this.authService.logOut();
  }

}

import { Component, OnInit } from '@angular/core';
//import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    //private authService: AuthService,
    private router: Router
  ) { }

  userRegister: any = {}
  imgUrl=["https://images.unsplash.com/photo-1587813369290-091c9d432daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]
  ngOnInit(): void {
  }

  //auth servise kayıt formunu gönderme
  register() {
    //this.authService.register(this.userRegister);
  }

  goToLogin(){
    this.router.navigateByUrl('/login');
  }
 
}

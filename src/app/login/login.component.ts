import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user: User = {
    username: 'Vamshi',
    password: 'Test123'
  };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(user: User): void{
    if(user.username == 'Vamshi' && user.password == 'Test123'){
      localStorage.setItem('username',user.username);
      user.username = '';
      user.password = '';
      this.router.navigate(['']);
    }
  }

  onSignup(): void{
    this.router.navigate(['signup']);
  }

}

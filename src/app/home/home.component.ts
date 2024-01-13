import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username!: string | null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.fetchUserDetails();
  }

  fetchUserDetails(){
    this.username = localStorage.getItem('username');
    if(this.username == null || this.username == ''){
      this.router.navigate(['login']);
    }
  }

}

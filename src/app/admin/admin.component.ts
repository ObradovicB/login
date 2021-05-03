import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private router: Router) {
    // provera da li je stvarno admin

    let usertype = localStorage.getItem('usertype');
    if (usertype != 'admin') {
      this.router.navigate(['user']);
    } else {
      this.users = LoginComponent.users;
    }
  }

  ngOnInit(): void {}

  users; //: {
  //   username: string;
  //   password: string;
  //   type: string;
  //   name: string;
  //   surname: string;
  // }[];

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('usertype');
    this.router.navigate(['login']);
  }
}

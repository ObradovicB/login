import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  static users = [
    {
      username: 'petar',
      password: '1234',
      type: 'user',
      name: 'Petar',
      surname: 'Petrovic',
    },
    {
      username: 'milos',
      password: 'pass',
      type: 'user',
      name: 'Milos',
      surname: 'Obradovic',
    },
    {
      username: 'admin',
      password: 'admin',
      type: 'admin',
      name: 'Admin',
      surname: 'Admin',
    },
  ];

  constructor(private router: Router) {
    // this.username = 'Milos';
    // this.password = 'pass';
  }

  ngOnInit(): void {}

  username!: string;
  password!: string;
  message = '';

  login() {
    // } //   } //     console.log(user.username + ' ' + user.password); //     let user = LoginComponent.users[i]; //   for (let i = 0; i < LoginComponent.users.length; i++) { // {
    for (let user of LoginComponent.users) {
      if (this.username == user.username) {
        if (this.password == user.password) {
          localStorage.setItem('username', this.username);
          localStorage.setItem('usertype', user.type);
          if (user.type == 'admin') {
            this.router.navigate(['admin']);
          } else this.router.navigate(['user']);
        } else {
          this.message = 'Pogresno uneta sifra!';
        }
        return;
      }
    }
    this.message = 'Pogresno unet username!';
  }

  guest() {
    this.router.navigate(['guest']);
  }
}

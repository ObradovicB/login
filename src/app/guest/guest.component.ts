import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'],
})
export class GuestComponent implements OnInit {
  constructor(private router: Router) {
    this.books = UserComponent.books;
  }

  ngOnInit(): void {}

  login() {
    this.router.navigate(['login']);
  }

  books;
}

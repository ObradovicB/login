import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  static books = [
    { name: 'knjiga1', pages: '100', author: 'petar', price: '100' },
    { name: 'knjiga2', pages: '200', author: 'milos', price: '100' },
    { name: 'knjiga3', pages: '300', author: 'milos', price: '1100' },
    { name: 'knjiga4', pages: '400', author: 'petar', price: '800' },
    { name: 'knjiga5', pages: '500', author: 'milos', price: '1800' },
  ];

  constructor(private router: Router) {
    let usertype = localStorage.getItem('usertype');
    if (usertype != 'user' && usertype != 'admin') {
      this.router.navigate(['login']);
    }

    this.myUsername = localStorage.getItem('username');
    this.myBooks = [];
    for (let book of UserComponent.books) {
      if (book.author == this.myUsername) {
        this.myBooks.push(book);
      }
    }
  }

  ngOnInit(): void {}

  myBooks;
  myUsername;

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('usertype');
    this.router.navigate(['login']);
  }
}

import { Component, OnInit } from '@angular/core';

import { Book } from '../book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    new Book('1', 'Harry Potter', 'J. K. Rolling', 'Science Fiction'),
    new Book('1', 'Harry Potter 2', 'J. K. Rolling', 'Science Fiction'),
    new Book('1', 'Harry Potter 3', 'J. K. Rolling', 'Science Fiction')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

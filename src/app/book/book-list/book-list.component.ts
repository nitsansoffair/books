import { Component, OnInit } from '@angular/core';

import { Book } from '../book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    new Book('1', 'Harry Potter', 'J. K. Rolling', 'Science Fiction', 'An amazing book of science fiction.', 'https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg?w=600&quality=85'),
    new Book('2', 'Harry Potter 2', 'J. K. Rolling', 'Science Fiction', 'An amazing book of science fiction.','https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg?w=600&quality=85'),
    new Book('3', 'Harry Potter 3', 'J. K. Rolling', 'Science Fiction', 'An amazing book of science fiction.','https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg?w=600&quality=85')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

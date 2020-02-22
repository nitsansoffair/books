import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TransformedBook } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: TransformedBook[];
  subscription: Subscription;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.subscription = this.bookService.booksChanged.subscribe((books: TransformedBook[]) => {
      this.books = books;
    });

    this.books = this.bookService.getBooks();
  }

}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TransformedBook } from '../book/book.model';
import { BookService } from '../book/book.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  books: TransformedBook[] = [];
  subscription: Subscription;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.subscription = this.bookService.favoritesChanged.subscribe((books: TransformedBook[]) => {
      this.books = books;
    });

    this.books = this.bookService.getFavorites();
  }

}

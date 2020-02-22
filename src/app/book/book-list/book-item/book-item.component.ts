import { Component, Input, OnInit } from '@angular/core';

import { TransformedBook } from '../../book.model';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: TransformedBook;
  @Input() index: number;

  constructor(public bookService: BookService) { }

  ngOnInit(): void {}

  addToFavorites() {
    this.bookService.addToFavorite(this.index);
  }

  removeFromFavorites() {
    this.bookService.removeFromFavorite(this.index);
  }
}

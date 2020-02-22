import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TransformedBook } from '../../book.model';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: TransformedBook;
  id: number;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;

      if (this.route.snapshot.parent.url[0].path === 'favorites') {
        this.book = this.bookService.getFavorite(this.id);
      } else {
        this.book = this.bookService.getBook(this.id);
      }
    });
  }

}

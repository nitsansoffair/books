import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import { TransformedBook } from '../book.model';
import { BookService } from '../book.service';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: TransformedBook[];
  subscription: Subscription;
  searchForm: FormGroup;

  constructor(private bookService: BookService, private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.subscription = this.bookService.booksChanged.subscribe((books: TransformedBook[]) => {
      this.books = books;

      console.log('bookService Subscription - ' + this.books);
      this.initForm();
    });

    this.books = this.bookService.getBooks();
    this.initForm();
  }

  onSubmit() {
    this.dataStorageService.fetchBooks(this.searchForm.value.search)
      .subscribe((books) => {
        console.log('onSubmit - ' + books);
      });
  }

  initForm() {
    this.searchForm = new FormGroup({
      search: new FormControl('', Validators.required)
    });
  }
}

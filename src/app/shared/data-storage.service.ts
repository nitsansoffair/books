import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { BookService } from '../book/book.service';
import { Book, TransformedBook } from '../book/book.model';

export interface BooksResponse {
  kind: string;
  totalItems: number;
  items: Book[];
}

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private bookService: BookService) {}

  fetchBooks(q: string) {
    return this.http.get<BooksResponse>(`https://www.googleapis.com/books/v1/volumes?q=${q}`)
      .pipe(map((booksResponse) => {
        return booksResponse.items.map((book): TransformedBook => {
          return {
            id: book.id,
            title: book.volumeInfo.title,
            autors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            imageLinks: book.volumeInfo.imageLinks.thumbnail,
            publishedDate: book.volumeInfo.publishedDate,
            pdf: book.accessInfo.pdf.acsTokenLink
          };
        });
      }), tap((books: TransformedBook[]) => {
        this.bookService.setBooks(books);
      }));
  }

  storeFavorites(userId: string) {
    this.http
      .put(`https://complot-books.firebaseio.com/${userId}/favorites.json`, this.bookService.getFavorites())
      .subscribe();
  }

  fetchFavorites(userId: string) {
    this.http
      .get<TransformedBook[]>(`https://complot-books.firebaseio.com/${userId}/favorites.json`)
      .subscribe((books) => {
        this.bookService.setFavorites(books);
      });
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { BookService } from '../book/book.service';
import { AuthService } from '../auth/auth.service';
import { Book, TransformedBook } from '../book/book.model';

export class DataStorageService {
  constructor(private http: HttpClient, private bookService: BookService, private authService: AuthService) {}

  fetchBooks(q: string) {
    return this.http.get<Book[]>('https://www.googleapis.com/books/v1/volumes', {
      params: new HttpParams().append('q', q)
    })
      .pipe(map((books) => {
        return books.map((book): TransformedBook => {
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
}

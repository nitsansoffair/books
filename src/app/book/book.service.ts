import { TransformedBook } from './book.model';
import {Subject} from 'rxjs';

export class BookService {
  private books: TransformedBook[] = [];
  booksChanged = new Subject<TransformedBook[]>();

  getBooks() {
    return this.books.slice();
  }

  getBook(index: number) {
    return this.books[index];
  }

  setBooks(books: TransformedBook[]) {
    this.books = books;
    this.booksChanged.next(this.books.slice());
  }
}

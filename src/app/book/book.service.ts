import { TransformedBook } from './book.model';
import {Subject} from 'rxjs';

export class BookService {
  private books: TransformedBook[] = [];
  booksChanged = new Subject<TransformedBook[]>();
  favorites: TransformedBook[] = [];
  favoritesChanged = new Subject<TransformedBook[]>();

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

  setFavorites(books: TransformedBook[]) {
    this.favorites = books;
    this.favoritesChanged.next(this.favorites.slice());
  }

  getFavorites() {
    return this.favorites;
  }

  addToFavorite(index: number) {
    this.favorites.push(this.books[index]);
    this.favoritesChanged.next(this.favorites.slice());
  }

  removeFromFavorite(index: number) {
    this.favorites.splice(this.favorites.indexOf(this.books[index]), 1);
    this.favoritesChanged.next(this.favorites.slice());
  }

  isInFavorites(book: TransformedBook) {
    return this.favorites.indexOf(book) !== -1;
  }

}

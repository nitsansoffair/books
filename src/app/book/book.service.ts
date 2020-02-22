import { TransformedBook } from './book.model';
import { Subject } from 'rxjs';

export class BookService {
  private books: TransformedBook[] = [];
  booksChanged = new Subject<TransformedBook[]>();
  favorites: TransformedBook[] = [];
  favoritesChanged = new Subject<TransformedBook[]>();
  pageIndex = 1;

  getBooksForPage() {
    return this.books.slice((this.pageIndex - 1) * 8, (this.pageIndex - 1) * 8 + 8);
  }

  getBook(index: number) {
    return this.books[(this.pageIndex - 1) * 8 + index];
  }

  setBooks(books: TransformedBook[]) {
    this.books = books;
    this.booksChanged.next(this.getBooksForPage());
  }

  setFavorites(books: TransformedBook[]) {
    this.favorites = books;
    this.favoritesChanged.next(this.favorites.slice());
  }

  getFavorite(index: number) {
    return this.favorites[index];
  }

  getFavorites() {
    return this.favorites;
  }

  addToFavorite(index: number) {
    this.favorites.push(this.getBook(index));
    this.favoritesChanged.next(this.favorites.slice());
  }

  removeFromFavorite(index: number) {
    this.favorites.splice(this.favorites.indexOf(this.getBook(index)), 1);
    this.favoritesChanged.next(this.favorites.slice());
  }

  isInFavorites(book: TransformedBook) {
    return this.favorites.indexOf(book) !== -1;
  }

  onPreviousPage() {
    this.pageIndex--;
    this.booksChanged.next(this.getBooksForPage());
  }

  onNextPage() {
    this.pageIndex++;
    this.booksChanged.next(this.getBooksForPage());
  }

  hasNextPage() {
    return this.pageIndex * 8 < this.books.length;
  }

  hasPreviousPage() {
    return this.pageIndex > 1;
  }

}

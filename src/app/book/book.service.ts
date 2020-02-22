import { TransformedBook } from './book.model';
import { Subject } from 'rxjs';

export class BookService {
  private books: TransformedBook[] = [];
  booksChanged = new Subject<TransformedBook[]>();
  favorites: TransformedBook[] = [];
  favoritesChanged = new Subject<TransformedBook[]>();
  pageIndex = 1;
  favoritesPageIndex = 1;

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

  setFavorites(books: TransformedBook[]) {
    this.favorites = books;
    this.favoritesChanged.next(this.getFavoritesForPage());
  }

  getFavorite(index: number) {
    return this.favorites[(this.favoritesPageIndex - 1) * 8 + index];
  }

  getFavorites() {
    return this.favorites.slice();
  }

  getFavoritesForPage() {
    return this.favorites.slice((this.favoritesPageIndex - 1) * 8, (this.favoritesPageIndex - 1) * 8 + 8);
  }

  addToFavorite(index: number) {
    this.favorites.push(this.getBook(index));
    this.favoritesChanged.next(this.getFavoritesForPage());
  }

  removeFromFavorite(book: TransformedBook) {
    this.favorites.splice(this.favorites.indexOf(book), 1);
    this.favoritesChanged.next(this.getFavoritesForPage());
  }

  isInFavorites(book: TransformedBook) {
    return this.favorites.indexOf(book) !== -1;
  }

  onFavoritesPreviousPage() {
    this.favoritesPageIndex--;
    this.favoritesChanged.next(this.getFavoritesForPage());
  }

  onFavoritesNextPage() {
    this.favoritesPageIndex++;
    this.favoritesChanged.next(this.getFavoritesForPage());
  }

  hasFavoritesNextPage() {
    return this.favoritesPageIndex * 8 < this.favorites.length;
  }

  hasFavoritesPreviousPage() {
    return this.favoritesPageIndex > 1;
  }

}

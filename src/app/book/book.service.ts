import { Book } from './book.model';

export class BookService {
  private books: Book[] = [
    new Book('1', 'Harry Potter', 'J. K. Rolling', 'Science Fiction', 'An amazing book of science fiction.', 'https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg?w=600&quality=85'),
    new Book('2', 'Harry Potter 2', 'J. K. Rolling', 'Science Fiction', 'An amazing book of science fiction.','https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg?w=600&quality=85'),
    new Book('3', 'Harry Potter 3', 'J. K. Rolling', 'Science Fiction', 'An amazing book of science fiction.','https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg?w=600&quality=85')
  ];

  getBooks() {
    return this.books.slice();
  }

  getBook(index: number) {
    return this.books[index];
  }
}

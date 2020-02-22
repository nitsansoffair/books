import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

import {TransformedBook} from '../book/book.model';
import {DataStorageService} from '../shared/data-storage.service';
import {BookService} from '../book/book.service';

@Injectable({providedIn: 'root'})
export class FavoritesResolverService implements Resolve<TransformedBook[]> {
  constructor(private dataStorageService: DataStorageService, private bookService: BookService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const favorites = this.bookService.getFavorites();

    if (favorites.length === 0) {
      return this.dataStorageService.fetchFavorites();
    }

    return favorites;
  }
}

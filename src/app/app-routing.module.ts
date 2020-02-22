import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book/book-list/book-detail/book-detail.component';
import { AuthComponent } from './auth/auth.component';
import { BookStartComponent } from './book/book-start/book-start.component';
import { AuthGuard } from './auth/auth.guard';
import { FavoritesComponent } from './favorites/favorites.component';
import {FavoritesResolverService} from './favorites/favorites-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BookComponent, canActivate: [AuthGuard], children: [
      { path: '', component: BookStartComponent },
      { path: ':id', component: BookDetailComponent }
    ] },
  { path: 'auth', component: AuthComponent },
  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard], children: [
      { path: '', component: BookStartComponent, resolve: [FavoritesResolverService] },
      { path: ':id', component: BookDetailComponent, resolve: [FavoritesResolverService] }
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

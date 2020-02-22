import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailComponent } from './book/book-list/book-detail/book-detail.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BookComponent, children: [
      { path: '', component: BookListComponent },
      { path: ':id', component: BookDetailComponent }
    ] },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

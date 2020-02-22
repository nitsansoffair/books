import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookComponent } from './book/book.component';
import { AppRoutingModule } from './app-routing.module';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookItemComponent } from './book/book-list/book-item/book-item.component';
import { BookDetailComponent } from './book/book-list/book-detail/book-detail.component';
import { BookService } from './book/book.service';
import { AuthComponent } from './auth/auth.component';
import { BookStartComponent } from './book/book-start/book-start.component';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookComponent,
    BookListComponent,
    BookItemComponent,
    BookDetailComponent,
    AuthComponent,
    BookStartComponent,
    FavoritesComponent,
    LoadingSpinnerComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

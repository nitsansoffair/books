import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookComponent } from './book/book.component';
import { AppRoutingModule } from './app-routing.module';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookItemComponent } from './book/book-list/book-item/book-item.component';
import { BookDetailComponent } from './book/book-list/book-detail/book-detail.component';
import { BookService } from './book/book.service';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookComponent,
    BookListComponent,
    BookItemComponent,
    BookDetailComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }

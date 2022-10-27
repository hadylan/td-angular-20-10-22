import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookStoreModule } from './book-store/book-store.module';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './book-store/book-list/book-list.component';
import { BookDetailComponent } from './book-store/book-detail/book-detail.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookStoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

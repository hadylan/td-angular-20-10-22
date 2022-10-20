import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    BookListComponent
  ]
})
export class BookStoreModule { }

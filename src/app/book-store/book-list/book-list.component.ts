import { Component, OnInit } from '@angular/core';
import { book } from 'src/app/interfaces/books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: book[] = [
    { name: 'Premier livre', pages: 2000 },
    { name: 'Second livre', pages: 1000 }
  ]

  newBook: book = {
    name: '',
    pages: Number()
  }

  createNewBook() {
    this.bookList.push(this.newBook)
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}

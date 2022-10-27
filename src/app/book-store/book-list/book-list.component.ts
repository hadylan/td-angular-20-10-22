import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  //bookArray: Array<Book> = new Array<Book>();
  bookList: Book[] = [
    {name: 'Tom Sawyer', feedback: 'Good Book', rating: 3},
    {name: 'Guerre et Paix', feedback: 'Long Book', rating: 2.5},
  ]

  constructor() { }

  ngOnInit(): void {

  }

}

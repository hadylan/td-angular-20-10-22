import { Component, OnInit } from '@angular/core';
import { Book, IBook } from 'src/app/interfaces/book';
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
    {name: 'Les 4 accord Toltèques', feedback: 'Life changing book', rating:4}
  ]

  selectedBook: Book | null = null;
  //bookArray: IBook 
    onSelect(book: Book): void {
      this.selectedBook = null;
      setTimeout(() => {
        this.selectedBook = book;
      }, 10);
    }
  constructor() { }

  ngOnInit(): void {

  }

}

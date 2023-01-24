import { Component, OnInit } from '@angular/core';
import { IBook } from '@libraries/shared';
import { FormsModule } from '@angular/forms';
import { IAutor, Autor } from '@libraries/shared';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  //bookArray: Array<Book> = new Array<Book>();
  bookList: IBook[] = [
    {id: 1, name: 'Tom Sawyer', feedback: 'Good Book', rating: 3, autor: new Autor(1, "jean", "dupon")},
    {id : 2, name: 'Guerre et Paix', feedback: 'Long Book', rating: 2.5, autor: new Autor(2, "Lola", "Minou")},
    {id: 3, name: 'Les 4 accord Toltèques', feedback: 'Life changing book', rating:4, autor: new Autor(3, "Joe", "Mealler")}
  ]

  selectedBook: IBook | null = null;
  bookArray: Array<IBook> = new Array<IBook>();

    onSelect(book: IBook): void {
      this.selectedBook = null;
      setTimeout(() => {
        this.selectedBook = book;
      }, 10);
    }
  constructor() { }

  updateList(book: IBook) {
    // Todo: trouver le book par son id et  l'update dans bookArray
    //this.selectedBook?.name = book.name;
    this.bookArray.find(element => element.name = book.name);
  }

  setCurrentBook(book: IBook) {
    this.selectedBook = null;
    setTimeout(() => { this.selectedBook = book; }, 10);
  }

  ngOnInit(): void {

  }

}

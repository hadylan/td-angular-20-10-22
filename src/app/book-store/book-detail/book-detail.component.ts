import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAutor, Autor } from '@libraries/shared';
import { IBook, Book } from '@libraries/shared';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input()
  selectedBook: IBook | undefined
  @Output()
  emitBook: EventEmitter<IBook> = new EventEmitter<IBook>();

  bookForm = this.fb.group({
    name: [''],
    feedback: [''],
    rating: [0],
  }, {updateOn: 'submit'});
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.submitted = false;

    if (this.selectedBook == null) {
      this.selectedBook = new Book(1, '', '', 0);
    } else {
      this.bookForm.patchValue(this.selectedBook);
    }
    /*if (this.selectedBook){
      this.bookForm.patchValue(this.selectedBook)
    }*/
  }

  onSubmit() {
    this.submitted = true;
    if (this.bookForm.valid) {
      this.selectedBook = {...this.selectedBook!, ...this.bookForm.value! };
      this.emitBook.emit(this.selectedBook!);
    }
  }
  resetForm() {
    if (this.selectedBook !== null) {
      this.bookForm.patchValue(this.selectedBook!);
    }
  }

}


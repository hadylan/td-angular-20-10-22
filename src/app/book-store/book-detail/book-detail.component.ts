import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input()
  selectedBook: Book | undefined

  bookForm = this.fb.group({
    name: [''],
    feedback: [''],
    rating: [0],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.selectedBook){
      this.bookForm.patchValue(this.selectedBook)
    }
  }

}

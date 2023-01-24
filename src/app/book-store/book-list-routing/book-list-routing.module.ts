import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from '../book-list/book-list.component';
import { BookDetailComponent } from '../book-detail/book-detail.component';
//import { NotFoundComponent } from '.';

const routes: Routes = [
  { path: 'book', component: BookListComponent, 
    children: [
      { path: 'edit/:name', component: BookDetailComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
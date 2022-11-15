import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-store/book-list/book-list.component';
import { BookDetailComponent } from './book-store/book-detail/book-detail.component';

const routes: Routes = [
  { path: 'book/edit/:name', component: BookDetailComponent },
  { path: 'book/list', component: BookListComponent },
  { path: '', redirectTo: '/book/list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
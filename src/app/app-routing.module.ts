import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-store/book-list/book-list.component';
import { BookDetailComponent } from './book-store/book-detail/book-detail.component';
import { BookRoutingModule } from './book-store/book-list-routing/book-list-routing.module';

const routes: Routes = [
  { path: 'book', component: BookListComponent, 
    children: [
      { path: 'edit/:name', component: BookDetailComponent },
    ]
  },
  { path: '', redirectTo: '/book', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
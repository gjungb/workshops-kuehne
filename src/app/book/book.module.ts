import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BookListComponent } from './book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BookApiService } from './shared/book-api.service';
import { AppIsbnPipe } from './shared/app-isbn.pipe';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { RouterModule } from '@angular/router';
import { BookEditComponent } from './book-edit/book-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookCardComponent,
    BookListComponent,
    AppIsbnPipe,
    BookDetailComponent,
    BookEditComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule],
  providers: [
    BookApiService,
    {
      provide: 'BASE_URL',
      useValue: 'http://localhost:4730/books',
    },
  ],
  exports: [BookListComponent],
})
export class BookModule {}

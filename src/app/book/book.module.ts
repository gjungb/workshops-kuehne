import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookCardComponent} from "./book-card/book-card.component";
import {BookListComponent} from "./book-list/book-list.component";
import {HttpClientModule} from "@angular/common/http";
import {BookApiService} from "./shared/book-api.service";


@NgModule({
  declarations: [
    BookCardComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    BookApiService,
    {
      provide: 'BASE_URL',
      useValue: 'http://localhost:4730/books'
    }
  ],
  exports: [
    BookListComponent
  ]
})
export class BookModule {
}

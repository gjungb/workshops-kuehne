import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { BookApiService } from '../shared/book-api.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  book$!: Observable<Book>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly api: BookApiService
  ) {}

  ngOnInit(): void {
    const isbn =
      this.route.snapshot.paramMap.get('isbn') ?? '9780071494618';

    this.book$ = this.api.getBookByIsbn(isbn);
  }
}

import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Book } from '../model/book';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookApiService } from '../shared/book-api.service';
import {
  finalize,
  Observable,
  Subscription,
  takeUntil,
  tap,
  timer,
} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
// stateful
export class BookListComponent implements OnInit, OnDestroy {
  books?: Book[];

  books$!: Observable<Book[]>;

  @ViewChildren(BookCardComponent)
  cards!: QueryList<BookCardComponent>;

  private sub?: Subscription;

  private destroy$ = new EventEmitter<void>();

  constructor(
    private readonly api: BookApiService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    // emit values over time
    this.sub = timer(5_000, 2_000)
      .pipe(
        tap((value) => console.log(value)),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.books$ = this.api
      .getBooks()
      .pipe(finalize(() => console.log('finalized')));
  }

  goToBookDetails(book: Book): void {
    // effect
    console.log(book);
    this.router.navigate(['/books', book.isbn]).then((res) => console.log(res));
  }

  ngOnDestroy(): void {
    // this.sub?.unsubscribe();
    this.destroy$.emit();
  }
}

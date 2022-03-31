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
import { Subscription, takeUntil, tap, timer } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books?: Book[];

  @ViewChildren(BookCardComponent)
  cards!: QueryList<BookCardComponent>;

  private sub?: Subscription;

  private destroy$ = new EventEmitter<void>();

  constructor(private readonly api: BookApiService) {}

  ngOnInit(): void {
    // emit values over time
    this.sub = timer(5_000, 2_000)
      .pipe(
        tap((value) => console.log(value)),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.api.getBooks().subscribe({
      // effect
      next: (value) => (this.books = value),
      complete: () => console.log('done'),
    });
  }

  goToBookDetails(book: Book) {
    console.log(book);
  }

  ngOnDestroy(): void {
    // this.sub?.unsubscribe();
    this.destroy$.emit();
  }
}

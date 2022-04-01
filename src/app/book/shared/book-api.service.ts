import { Inject, Injectable } from '@angular/core';
import { Book } from '../model/book';
import { catchError, delay, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookApiService {
  private rand = Math.random();

  private books: Book[] = [
    {
      isbn: '9783161484100',
      title: 'How to win friends',
      author: 'Dale Carnegie',
    },
    {
      isbn: '9783161484100',
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...',
    },
    {
      isbn: '9783161484100',
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ...",
    },
  ];

  constructor(
    private readonly http: HttpClient,
    @Inject('BASE_URL') private readonly url: string
  ) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url).pipe(
      tap((value) => console.log(value.length)),
      delay(3_000),
      catchError((err, orig) => {
        return of(this.books);
      })
    );
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${isbn}`);
  }

  /**
   * @internal
   * @param book
   * @private
   */
  private doStuff(book: Book): void {
    book.title = "I don't know where this happened";
  }
}

import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Book} from "../model/book";
import {BookCardComponent} from "../book-card/book-card.component";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    {
      title: 'How to win friends',
      author: 'Dale Carnegie',
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...'
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ..."
    }
  ];

  @ViewChildren(BookCardComponent)
  cards!: QueryList<BookCardComponent>

  constructor() { }

  ngOnInit(): void {
  }


  goToBookDetails(book: Book) {
    console.log(book);
  }
}

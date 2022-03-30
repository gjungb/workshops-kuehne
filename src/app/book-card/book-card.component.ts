import {Component, Input} from '@angular/core';
import {Book} from "../model/book";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input('appBook')
  content: Book = {
    title: 'A Book',
    author: 'Someone'
  };


  customStyle = {
    backgroundColor: 'red'
  };

  constructor() { }

}

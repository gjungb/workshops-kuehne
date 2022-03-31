import {Component, EventEmitter, Input, Output} from '@angular/core';
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

  @Output()
  detailClick = new EventEmitter<Book>();


  customStyle = {
    backgroundColor: 'red'
  };

  constructor() { }

  /**
   *
   *
   * @param ev
   */
  handleDetailClick(ev: MouseEvent) {
    console.log('clicked', ev.clientX);
    this.detailClick.emit(this.content);
  }
}

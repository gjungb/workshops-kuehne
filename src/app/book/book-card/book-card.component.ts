import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// representational
// dumb
// stateless
export class BookCardComponent {
  @Input('appBook')
  content: Book = {
    isbn: '9783161484100',
    title: 'A Book',
    author: 'Someone',
  };

  @Output()
  detailClick = new EventEmitter<Book>();

  customStyle = {
    backgroundColor: 'red',
  };

  constructor() {}

  /**
   *
   *
   * @param ev
   */
  handleDetailClick(ev: MouseEvent): void {
    console.log('clicked', ev.clientX);
    this.detailClick.emit(this.content);
  }
}

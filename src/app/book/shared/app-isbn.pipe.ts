import { Pipe, PipeTransform } from '@angular/core';
/* @ts-ignore */
import * as ISBN from 'isbn3';

@Pipe({
  name: 'appIsbn'
})
export class AppIsbnPipe implements PipeTransform {

  transform(value?: string): string | undefined {
    // TODO introduce NPE
    return ISBN.hyphenate(value);
  }

}

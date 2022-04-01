/**
 * A Book is a collection of meaningful words
 */
export interface Book {
  /**
   * The ISBN
   *
   * @link https://en.wikipedia.org/wiki/International_Standard_Book_Number
   */
  isbn: string;
  /**
   * The title of the book
   */
  title: string;

  author: string;

  abstract?: string;
}

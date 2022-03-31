/**
 * A Book is a collection of meaningful words
 */
export interface Book {
  /**
   * The title of the book
   */
  title: string;

  author: string;

  abstract?: string;
}

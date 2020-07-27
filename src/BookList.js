'use strict';

class BookList extends React.Component {
  constructor(props) {
    super(props);
  }

  _sortByAuthorThenTitle(books) {
    const self = this;
    books.sort((bookA, bookB) => {
      let compare = self._getAuthorForCompare(bookA).localeCompare(self._getAuthorForCompare(bookB));
      if (compare !== 0) {
        return compare;
      }

      return self._compareByTitle(bookA, bookB);
  
    });

    return books;
  }

  _getAuthorForCompare(book) {
    return book.author.lastName ? book.author.lastName : book.author.firstName;
  }

  _compareByTitle(bookA, bookB) {
    return this._toDisplayTitle(bookA).localeCompare(this._toDisplayTitle(bookB));
  }

  _toDisplayTitle(book) {
    const series = book.series ? book.series + ' - ' : '';
    return `${series}${book.title}`;
  }

  _sortByTitle(books) {
    books.sort(compareByTitle);
    return books;
  }
  
  _toDisplayText(book) {
    const author = book.author;
    const authorDisplayText = `${author.lastName ? author.lastName + ', ' : ''}${author.firstName}`;
    return `${this._toDisplayTitle(book)} (${authorDisplayText})`;
  }

  render() {
    const self = this;

    let books = [...this.props.books];
    if (this.props.sortByAuthorThenTitle) {
      this._sortByAuthorThenTitle(books);
    }
    else if (this.props.sortByTitle) {
      this._sortByTitle(books);
    }

    let bookList = books.map(book => {
      const displayText = this._toDisplayText(book);
      return (
        <Book 
          title={book.title} 
          author={book.author} 
          series={book.series} 
          displayText={displayText}
          key={displayText} 
        />);
    });
      
    return (
      <ul className='book-list'>
        {bookList}
      </ul>
    );
  }
}

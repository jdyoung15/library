'use strict';

class Library extends React.Component {
  constructor(props) {
    super(props);
  }

  _compareByAuthor(bookA, bookB) {
    const aAuthor = bookA.author.lastName ? bookA.author.lastName : bookA.author.firstName;
    const bAuthor = bookB.author.lastName ? bookB.author.lastName : bookB.author.firstName;
    return aAuthor.localeCompare(bAuthor);
  }

  render() {
    const sortedBooks = [...initialBookData];
    sortedBooks.sort(this._compareByAuthor);

    return (
      <ul className='book-list'>
        <BookList books={sortedBooks} />
      </ul>
    );
  }
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<Library />, domContainer);

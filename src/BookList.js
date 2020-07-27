'use strict';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedBooks: this.props.books 
    };
  }

  _toDisplayText(book) {
    const author = book.author;
    const authorDisplayText = `${author.lastName ? author.lastName + ', ' : ''}${author.firstName}`;
    const seriesDisplayText = book.series ? book.series + ' - ' : '';
    return `${seriesDisplayText}${book.title} (${authorDisplayText})`;
  }

  render() {
    const self = this;
    let bookList = this.state.displayedBooks.map(book => {
      const displayText = self._toDisplayText(book);
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

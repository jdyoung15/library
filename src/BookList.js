'use strict';

class BookList extends React.Component {
  constructor(props) {
    super(props);

    const books = [...this.props.books];
    this._shuffleArray(books);
    this.state = {
      books: books,
      queryTerms: [],
    }
  }

  _shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  _toDisplayText(book) {
    const author = book.author;
    const authorDisplayText = `${author.lastName ? author.lastName + ', ' : ''}${author.firstName}`;
    return `${this._toDisplayTitle(book)} (${authorDisplayText})`;
  }

  _sortByAuthorThenTitle() {
    const books = [...this.state.books];
    const self = this;
    books.sort((bookA, bookB) => {
      let compare = self._getAuthorForCompare(bookA).localeCompare(self._getAuthorForCompare(bookB));
      if (compare !== 0) {
        return compare;
      }

      return self._compareByTitle(bookA, bookB);
    });

    this.setState({
      books: books
    });
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

  _sortByTitle() {
    const books = [...this.state.books];
    books.sort(this._compareByTitle.bind(this));
    this.setState({
      books: books
    });
  }

  _randomize() {
    const books = [...this.state.books];
    this._shuffleArray(books);
    this.setState({
      books: books
    });
  }

  _handleSearchBoxChange(event) {
    const query = event.target.value;
    this.setState({
      queryTerms: this._toTerms(query)
    });
  }

  _toTerms(s) {
    return s.trim().toLowerCase().split(' ').map(term => {
      return term.trim().replace(/[\W_]+/g, '');
    });

  }

  _matchesAllQueryTerms(s) {
    const terms = this._toTerms(s);
    for (const queryTerm of this.state.queryTerms) {
      const matches = terms.filter(term => term.startsWith(queryTerm)).length > 0;
      if (!matches) {
        return false;
      }
    }
    return true;
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

    let bookList = this.state.books
      .map(book => {
        const displayText = this._toDisplayText(book);
        const hide = !this._matchesAllQueryTerms(displayText);
        return (
          <Book 
            title={book.title} 
            author={book.author} 
            series={book.series} 
            displayText={displayText}
            hide={hide}
            key={displayText} 
          />);
    });
      
    return (
      <div className='book-list'>
        <button onClick={this._sortByAuthorThenTitle.bind(this)}>
          Sort by Author
        </button>
        <button onClick={this._sortByTitle.bind(this)}>
          Sort by Title 
        </button>
        <button onClick={this._randomize.bind(this)}>
          Shuffle all
        </button>
        <input type='text' placeholder='Search...' size="70" onChange={this._handleSearchBoxChange.bind(this)} />
        <ul className='book-list-items'>
          {bookList}
        </ul>
      </div>
    );
  }
}

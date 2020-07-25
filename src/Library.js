'use strict';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      books: [
        {
          author: {
            lastName: 'Abagnale',
            firstName: 'Frank'
          },
          title: 'Catch Me If You Can',
        },
        {
          author: {
            lastName: 'Abbot',
            firstName: 'Edwin'
          },
          title: 'Flatland',
        },
      ]
    };
  }

  _fetchMetadata(title, author) {
    this._fetchBookId(title, author)
      .then(bookId => {
        console.log(bookId);
        this._fetchBookMetadata(bookId);
      });
  }

  _fetchBookId(title, author) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://www.goodreads.com/search.xml?key=${config.GOODREADS_API_KEY}&q=${title}`;
    return fetch(proxyUrl + url)
      .then(response => response.text())
      .then(txt => {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(txt, 'text/xml');
        let firstResult = xmlDoc.getElementsByTagName('work')[0];
        let bookId = firstResult.getElementsByTagName('best_book')[0].getElementsByTagName('id')[0].childNodes[0].nodeValue;
        return bookId;
      });
  }

  _fetchBookMetadata(bookId) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://www.goodreads.com/book/show/${bookId}.xml?key=${config.GOODREADS_API_KEY}`;
    return fetch(proxyUrl + url)
      .then(response => response.text())
      .then(txt => {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(txt, 'text/xml');
        let book = xmlDoc.getElementsByTagName('book')[0];
        let avgRating = book.getElementsByTagName('average_rating')[0].childNodes[0].nodeValue;
        console.log(avgRating);
      });
  }

  render() {
    let self = this;
    let bookList = this.state.books.map(book => {
      let displayText = `${book.title} (${book.author.lastName}, ${book.author.firstName})`;
      return (
        <li className='book-item' key={displayText} onClick={() => self._fetchMetadata(book.title, book.author)}>
          {displayText}
        </li>
      );
    });
      
    return (
      <ul className='book-list'>
        {bookList}
      </ul>
      //<button onClick={() => this.setState({ liked: true }) }>
      //  Like
      //</button>
    );
  }
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<Library />, domContainer);

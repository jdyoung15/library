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

  fetchMetadata(title, author) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://www.goodreads.com/search.xml?key=${config.GOODREADS_API_KEY}&q=${title}`;
    fetch(proxyUrl + url)
      .then(response => response.text())
      .then(txt => {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(txt, 'text/xml');
        let firstResult = xmlDoc.getElementsByTagName('work')[0];
        let avgRating = firstResult.getElementsByTagName('average_rating')[0].childNodes[0].nodeValue;
        console.log(firstResult);
        let bookId = firstResult.getElementsByTagName('best_book')[0].getElementsByTagName('id')[0].childNodes[0].nodeValue;
        console.log(bookId);
      });

    //alert(title + ' ' + author.lastName + ', ' + author.firstName);
  }

  render() {
    let self = this;
    let bookList = this.state.books.map(book => {
      let displayText = `${book.title} (${book.author.lastName}, ${book.author.firstName})`;
      return (
        <li className='book-item' key={displayText} onClick={() => self.fetchMetadata(book.title, book.author)}>
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

'use strict';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      fetched: false,
      avgRating: -1,
      ratingsCount: -1,
      numPages: -1,
    };
  }

  _toggleExpanded(title, author) {
    this.setState({
      expanded: !this.state.expanded
    });

    if (this.state.fetched) {
      return;
    }

    this._fetchBookId(title, author)
      .then(bookId => {
        console.log(bookId);
        this._fetchBookMetadata(bookId);
      });

    this.setState({
      fetched: true
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
        let ratingsCount = book.getElementsByTagName('ratings_count')[0].childNodes[0].nodeValue;
        let numPages = book.getElementsByTagName('num_pages')[0].childNodes[0].nodeValue;
        this.setState({
          avgRating: avgRating,
          ratingsCount: ratingsCount,
          numPages: numPages,
        });
      });
  }

  render() {
    const author = this.props.author;
    const hdrText = `${this.props.title} (${author.lastName}, ${author.firstName})`;
    let details;
    if (this.state.expanded) {
      details = (
        <div className='book-details'>
          <span>Rating: {this.state.avgRating}</span>
          <span>Ratings count: {this.state.ratingsCount}</span>
          <span>Num pages: {this.state.numPages}</span>
        </div>
      );
    }
    return (
      <li className='book-item' key={hdrText} onClick={() => this._toggleExpanded(this.props.title, author)}>
        <span className='book-hdr'>{hdrText}</span>
        {details}
      </li>
    );
  }
}

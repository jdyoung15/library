'use strict';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      fetched: false,
      avgRating: '',
      ratingsCount: '',
      numPages: '',
      origPubYear: '',
    };
  }

  _toggleExpanded(title, author) {
    this.setState({
      expanded: !this.state.expanded
    });

    if (this.state.fetched) {
      return;
    }

    this._fetchBookMetadata(title, author);

    this.setState({
      fetched: true
    });
  }

  _fetchBookMetadata(title, author) {
    return this._fetchBookId(title, author)
      .then(bookId => {
        const url = `https://www.goodreads.com/book/show/${bookId}.xml?key=${config.GOODREADS_API_KEY}`;
        return this._fetch(url)
          .then(response => response.text())
          .then(txt => {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(txt, 'text/xml');
            let book = xmlDoc.getElementsByTagName('book')[0];
            this.setState({
              avgRating: this._extractFirstTagValue(book, 'average_rating'),
              ratingsCount: this._extractFirstTagValue(book, 'ratings_count'),
              numPages: this._extractFirstTagValue(book, 'num_pages'),
              origPubYear: this._extractFirstTagValue(book, 'original_publication_year'),
            });
          });
      });
  }

  _fetchBookId(title, author) {
    const url = `https://www.goodreads.com/search.xml?key=${config.GOODREADS_API_KEY}&q=${title}`;
    return this._fetch(url)
      .then(response => response.text())
      .then(txt => {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(txt, 'text/xml');
        let firstResult = xmlDoc.getElementsByTagName('work')[0];
        let bookId = firstResult.getElementsByTagName('best_book')[0].getElementsByTagName('id')[0].childNodes[0].nodeValue;
        return bookId;
      });
  }

  _fetch(url) {
    return fetch(PROXY_URL + url);
  }

  _extractFirstTagValue(xml, tagName) {
    return xml.getElementsByTagName(tagName)[0].childNodes[0].nodeValue;
  }

  render() {
    const author = this.props.author;
    const hdrText = `${this.props.title} (${author.lastName}, ${author.firstName})`;
    let details;
    if (this.state.expanded) {
      details = (
        <div className='book-details'>
          <span>Rating: {this.state.avgRating}</span>
          <span>Num ratings: {this.state.ratingsCount}</span>
          <span>Num pages: {this.state.numPages}</span>
          <span>Year: {this.state.origPubYear}</span>
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

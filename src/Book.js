'use strict';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const EXCLUDED_SHELVES = ['to-read', 'currently-reading'];
const NUM_GENRES = 3;
const NUM_SIMILAR_BOOKS = 3;

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
      description: '',
      genres: [],
      similarBooks: [],
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
            let xml = parser.parseFromString(txt, 'text/xml');
            let bookXml = xml.getElementsByTagName('book')[0];
            this.setState({
              avgRating: this._extractFirstTagValue(bookXml, 'average_rating'),
              ratingsCount: this._extractFirstTagValue(bookXml, 'ratings_count'),
              numPages: this._extractFirstTagValue(bookXml, 'num_pages'),
              origPubYear: this._extractFirstTagValue(bookXml, 'original_publication_year'),
              description: this._extractFirstTagValue(bookXml, 'description'),
              genres: this._extractGenres(bookXml),
              similarBooks: this._extractSimilarBooks(bookXml),
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
        let xml = parser.parseFromString(txt, 'text/xml');
        let workXml = xml.getElementsByTagName('work')[0];
        let bookId = workXml.getElementsByTagName('best_book')[0].getElementsByTagName('id')[0].childNodes[0].nodeValue;
        return bookId;
      });
  }

  _fetch(url) {
    return fetch(PROXY_URL + url);
  }

  _extractFirstTagValue(xml, tagName) {
    return xml.getElementsByTagName(tagName)[0].childNodes[0].nodeValue;
  }

  _extractGenres(bookXml) {
    let genres = Array.from(bookXml.getElementsByTagName('shelf'))
      .map(shelf => shelf.getAttribute('name'))
      .filter(name => !EXCLUDED_SHELVES.includes(name));

    return genres.slice(0, Math.min(genres.length, NUM_GENRES));
  }

  _extractSimilarBooks(bookXml) {
    let similarBooks = Array.from(
      bookXml.getElementsByTagName('similar_books')[0].getElementsByTagName('title_without_series'))
        .map(title => title.childNodes[0].nodeValue);
        
    return similarBooks.slice(0, Math.min(similarBooks.length, NUM_SIMILAR_BOOKS));
  }

  _renderGenres() {
    let genres = this.state.genres.map(genre => (<li className='genre' key={genre}>{genre}</li>));
    return (
      <div className='book-genres'>
        <span>Genres:</span>
        <ul className='genre-list'>
          {genres}
        </ul>
      </div>
    );
  }

  _renderSimilarBooks() {
    let similarBooks = this.state.similarBooks.map(similarBook => 
      (<li className='similar-book' key={similarBook}>{similarBook}</li>));
    return (
      <div className='similar-books'>
        <span>Similar books:</span>
        <ul className='similar-books-list'>
          {similarBooks}
        </ul>
      </div>
    );
  }

  render() {
    const author = this.props.author;
    const hdrText = `${this.props.title} (${author.lastName}, ${author.firstName})`;
    let details;
    if (this.state.expanded) {
      details = (
        <div className='book-details'>
          <div className='book-stats'>
            <span>Rating: {this.state.avgRating}</span>
            <span>Num ratings: {this.state.ratingsCount}</span>
            <span>Num pages: {this.state.numPages}</span>
            <span>Year: {this.state.origPubYear}</span>
          </div>
          <div className='book-description'>
            {this.state.description}
          </div>
          {this._renderGenres()}
          {this._renderSimilarBooks()}
        </div>
      );
    }
    return (
      <li className='book-item' key={hdrText}>
        <span className='book-hdr' onClick={() => this._toggleExpanded(this.props.title, author)}>{hdrText}</span>
        {details}
      </li>
    );
  }
}
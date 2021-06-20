'use strict';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const EXCLUDED_SHELVES = ['to-read', 'currently-reading'];
const NUM_GENRES = 3;
const NUM_SIMILAR_BOOKS = 3;
const DESC_TRUNCATION_LIMIT = 1000;

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      initiatedFetch: false,
      receivedFetch: false,
      avgRating: '',
      ratingsCount: '',
      numPages: '',
      origPubYear: '',
      description: '',
      genres: [],
      similarBooks: [],
      truncateDescription: true,
    };
  }

  _toggleExpanded(title, author) {
    this.setState({
      expanded: !this.state.expanded
    });

    if (this.state.initiatedFetch) {
      return;
    }

    this._fetchBookMetadata(title, author);

    this.setState({
      initiatedFetch: true
    });
  }

  _fetchBookMetadata(title, author) {
    const authorUrl = (author.firstName + ' ' +  author.lastName).replaceAll(' ', '+');
    const titleUrl = title.replaceAll(' ', '+');
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:"${titleUrl}"+inauthor:${authorUrl}`;
    console.log(url);
    return this._fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          receivedFetch: true,
        });

        if (json.totalItems === 0) {
          console.log('No books found');
          return;
        }

        json.items.forEach(item => {
          const vi = item.volumeInfo;
          console.log(`Title: ${vi.title}\nSubtitle: ${vi.subtitle}\nDate: ${vi.publishedDate}\nAvg rating: ${vi.averageRating}\nRating count: ${vi.ratingsCount}\nLink: ${vi.canonicalVolumeLink}\n`);
        });

        let candidates = json.items;
        // filter exact title matches 
        const titleMatches = json.items.filter(item => item.volumeInfo.title.toLowerCase() === title.toLowerCase());
        // if none, consider all 
        if (titleMatches.length > 0) {
          candidates = titleMatches;
        }

        // filter items with books.google.com link
        const googleLinkMatches = candidates.filter(item => item.volumeInfo.canonicalVolumeLink.includes('books.google.com'));
        // if none, consider all
        if (googleLinkMatches.length > 0) {
          candidates = googleLinkMatches;
        }

        // sort by descending number of reviews
        candidates.sort((c1, c2) => (c2.volumeInfo.ratingsCount || 0) - (c1.volumeInfo.ratingsCount || 0));

        console.log('\n\n#################################################################################\n\n');
        // if multiple, use earliest publishedDate and highest ratingCount
        candidates.forEach(item => {
          const vi = item.volumeInfo;
          console.log(`Title: ${vi.title}\nSubtitle: ${vi.subtitle}\nDate: ${vi.publishedDate}\nAvg rating: ${vi.averageRating}\nRating count: ${vi.ratingsCount}\nLink: ${vi.canonicalVolumeLink}\n`);
        });
        
        //console.log(json);
        const info = candidates[0].volumeInfo;
        this.setState({
          avgRating: info.averageRating,
          ratingsCount: info.ratingsCount,
          numPages: info.pageCount,
          origPubYear: info.publishedDate,
          description: info.description || '',
          goodreadsUrl: info.canonicalVolumeLink,
          genres: info.categories,
          similarBooks: [],
        });
      });
  }

  _fetchBookMetadataOld(title, author) {
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
              receivedFetch: true,
              avgRating: this._getFirstValue(bookXml, 'average_rating'),
              ratingsCount: this._getFirstValue(bookXml, 'ratings_count'),
              numPages: this._getFirstValue(bookXml, 'num_pages'),
              origPubYear: this._getFirstValue(bookXml, 'original_publication_year'),
              description: this._getFirstValue(bookXml, 'description'),
              goodreadsUrl: this._getFirstValue(bookXml, 'url'),
              genres: this._extractGenres(bookXml),
              similarBooks: this._extractSimilarBooks(bookXml),
            });
          });
      });
  }

  _fetchBookId(title, author) {
    const url = `https://www.goodreads.com/search.xml?key=${config.GOODREADS_API_KEY}&q=${title}`;
    const self = this;
    return this._fetch(url)
      .then(response => response.text())
      .then(txt => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(txt, 'text/xml');
        let results = Array.from(xml.getElementsByTagName('best_book'));

        let matches = results.filter(result => {
          const resultTitle = self._getFirstValue(result, 'title');
          const resultAuthor = self._getFirstValue(result, 'name');
          return resultTitle === title || (resultAuthor.includes(author.lastName) && resultAuthor.includes(author.firstName));
        });

        let selected = matches.length > 0 ? matches[0] : results[0];
        return self._getFirstValue(selected, 'id');
      });
  }

  _fetch(url) {
    //return fetch(PROXY_URL + url);
    return fetch(url);
  }

  _getFirstValue(xml, tagName) {
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
        <h3>Genres</h3>
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
        <h3>Similar books</h3>
        <ul className='similar-books-list'>
          {similarBooks}
        </ul>
      </div>
    );
  }

  _formatLargeNum(num) {
    const units= ['', 'K', 'M', 'B', 'T'];
    let result = num;
    let i = 0;
    while (result > 1000) {
      i++;
      result = (result / 1000).toFixed(i > 1 ? 1 : 0);
    }

    if (i >= units.length) {
      return num;
    }

    return result.toString() + units[i];
  }

  render() {
    if (this.props.hide) {
      return null;
    }

    const author = this.props.author;
    let bookContent;
    if (this.state.expanded) {
      if (!this.state.receivedFetch) {
        bookContent = (
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        );
      }
      else {
        const limit = this.state.truncateDescription ? DESC_TRUNCATION_LIMIT : Number.MAX_SAFE_INTEGER;
        const ellipsis = this.state.description.length <= limit ? '' : '...';
        const goodreadsLink = `<a href=${this.state.goodreadsUrl} target='_blank'>Google Books page</a>`;
        const truncatedDesc = `${this.state.description.substring(0, limit)}${ellipsis}<br><br>${goodreadsLink}` 
        bookContent = (
          <div className='book-details'>
            <div className='book-description' dangerouslySetInnerHTML={{__html: truncatedDesc}} />
            <div className='book-addl-info'>
              <table className='book-stats'>
                <tbody>
                  <tr><td>Rating:</td><td>{this.state.avgRating}</td></tr>
                  <tr><td># Ratings:</td><td>{this._formatLargeNum(this.state.ratingsCount)}</td></tr>
                  <tr><td># Pages:</td><td>{this.state.numPages}</td></tr>
                  <tr><td>Year:</td><td>{this.state.origPubYear}</td></tr>
                </tbody>
              </table>
              {this._renderGenres()}
              {this._renderSimilarBooks()}
            </div>
          </div>
        );
      }
    }
    return (
      <li className={`book-item${this.state.expanded ? ' expanded' : ''}`}>
        <div className='book-hdr' onClick={() => this._toggleExpanded(this.props.title, author)}>
          <span>{this.props.displayText}</span>
          <i className={`arrow ${this.state.expanded ? 'down' : 'up'}`} />
        </div>
        {bookContent}
      </li>
    );
  }
}

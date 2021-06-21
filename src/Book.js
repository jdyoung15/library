'use strict';

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
      description: '',
      genres: [],
      truncateDescription: true,
    };
  }

  /** Handles when this book component is expanded or collapsed. /*/
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

  /** Fetches the relevant info for this book and updates the state. */
  _fetchBookMetadata(title, author) {
    const authorUrl = (author.firstName + ' ' +  author.lastName).replaceAll(' ', '+');
    const titleUrl = title.replaceAll(' ', '+');
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:"${titleUrl}"+inauthor:${authorUrl}`;
    console.log(url);
    return fetch(url)
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

        // sort by descending number of reviews
        candidates.sort((c1, c2) => (c2.volumeInfo.ratingsCount || 0) - (c1.volumeInfo.ratingsCount || 0));

        console.log('\n\n##########################################\n\n');
        // if multiple, use earliest publishedDate and highest ratingCount
        candidates.forEach(item => {
          const vi = item.volumeInfo;
          console.log(`Title: ${vi.title}\nSubtitle: ${vi.subtitle}\nDate: ${vi.publishedDate}\nAvg rating: ${vi.averageRating}\nRating count: ${vi.ratingsCount}\nLink: ${vi.canonicalVolumeLink}\n`);
        });
        
        //const info = candidates[0].volumeInfo;
        this.setState({
          // Assumes averageRating and ratingsCount are either both non-null or both null for a given book info
          avgRating: this._find(candidates, 'averageRating'),
          ratingsCount: this._find(candidates, 'ratingsCount'),
          numPages: this._find(candidates, 'pageCount'),
          description: this._find(candidates, 'description') || '',
          googleBooksUrl: this._findUrl(candidates, 'books.google.com') || this._findUrl(candidates, 'play.google.com'),
          genres: this._findGenres(candidates),
        });

        console.log('\n\n#################################################################################\n\n');
      });
  }

  /**
   * Given an array of book info objects retrieved via the Google Books API,
   * returns the first-encountered truthy value corresponding to the given property.
   * If none are found, returns undefined. 
   */
  _find(bookInfos, property) {
    return bookInfos.map(bi => bi.volumeInfo[property]).find(p => p);
  }

  /**
   * Given an array of book info objects retrieved via the Google Books API,
   * returns the first-encountered url that matches the given url.
   * If none are found, returns undefined. 
   */
  _findUrl(bookInfos, url) {
    return bookInfos.map(bi => bi.volumeInfo.canonicalVolumeLink).filter(cvi => cvi && cvi.includes(url)).find(cvi => cvi);
  }

  /**
   * Given an array of book info objects retrieved via the Google Books API,
   * returns an array containing the aggregated genres across all the book info objects.
   */
  _findGenres(bookInfos) {
    const allGenres = bookInfos.map(bi => bi.volumeInfo.categories).reduce((acc, curr) => acc.concat(curr), []);
    const truthyOnly = allGenres.filter(g => g);
    const deduplicated = [...new Set(truthyOnly)];
    return deduplicated;
  }

  /** Renders the UI for the genres associated with this book. */
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

  /** 
   * Returns a string representing the given number in rounded and abbreviated form. E.g. 3384 -> '3K'. 
   * Smaller numbers will not be rounded/abbreviated. 
   */
  _formatLargeNum(num) {
    const units= ['', 'K', 'M', 'B', 'T'];
    let result = num;
    let i = 0;
    while (result > 1000) {
      i++;
      result = (result / 1000).toFixed(i > 1 ? 1 : 0);
    }

    if (i >= units.length) {
      return num.toString();
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
        const googleBooksLink = `<a href=${this.state.googleBooksUrl} target='_blank'>Google Books page</a>`;
        const truncatedDesc = `${this.state.description.substring(0, limit)}${ellipsis}<br><br>${googleBooksLink}` 
        bookContent = (
          <div className='book-details'>
            <div className='book-description' dangerouslySetInnerHTML={{__html: truncatedDesc}} />
            <div className='book-addl-info'>
              <table className='book-stats'>
                <tbody>
                  <tr><td>Rating:</td><td>{this.state.avgRating}</td></tr>
                  <tr><td># Ratings:</td><td>{this._formatLargeNum(this.state.ratingsCount)}</td></tr>
                  <tr><td># Pages:</td><td>{this.state.numPages}</td></tr>
                </tbody>
              </table>
              {this._renderGenres()}
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

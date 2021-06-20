'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
var EXCLUDED_SHELVES = ['to-read', 'currently-reading'];
var NUM_GENRES = 3;
var NUM_SIMILAR_BOOKS = 3;
var DESC_TRUNCATION_LIMIT = 1000;

var Book = function (_React$Component) {
  _inherits(Book, _React$Component);

  function Book(props) {
    _classCallCheck(this, Book);

    var _this = _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).call(this, props));

    _this.state = {
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
      truncateDescription: true
    };
    return _this;
  }

  _createClass(Book, [{
    key: '_toggleExpanded',
    value: function _toggleExpanded(title, author) {
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
  }, {
    key: '_fetchBookMetadata',
    value: function _fetchBookMetadata(title, author) {
      var _this2 = this;

      var authorUrl = (author.firstName + ' ' + author.lastName).replaceAll(' ', '+');
      var titleUrl = title.replaceAll(' ', '+');
      var url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:"' + titleUrl + '"+inauthor:' + authorUrl;
      console.log(url);
      return this._fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        _this2.setState({
          receivedFetch: true
        });

        if (json.totalItems === 0) {
          console.log('No books found');
          return;
        }

        json.items.forEach(function (item) {
          var vi = item.volumeInfo;
          console.log('Title: ' + vi.title + '\nSubtitle: ' + vi.subtitle + '\nDate: ' + vi.publishedDate + '\nAvg rating: ' + vi.averageRating + '\nRating count: ' + vi.ratingsCount + '\nLink: ' + vi.canonicalVolumeLink + '\n');
        });

        var candidates = json.items;
        // filter exact title matches 
        var titleMatches = json.items.filter(function (item) {
          return item.volumeInfo.title.toLowerCase() === title.toLowerCase();
        });
        // if none, consider all 
        if (titleMatches.length > 0) {
          candidates = titleMatches;
        }

        // filter items with books.google.com link
        var googleLinkMatches = candidates.filter(function (item) {
          return item.volumeInfo.canonicalVolumeLink.includes('books.google.com');
        });
        // if none, consider all
        if (googleLinkMatches.length > 0) {
          candidates = googleLinkMatches;
        }

        // sort by descending number of reviews
        candidates.sort(function (c1, c2) {
          return (c2.volumeInfo.ratingsCount || 0) - (c1.volumeInfo.ratingsCount || 0);
        });

        console.log('\n\n#################################################################################\n\n');
        // if multiple, use earliest publishedDate and highest ratingCount
        candidates.forEach(function (item) {
          var vi = item.volumeInfo;
          console.log('Title: ' + vi.title + '\nSubtitle: ' + vi.subtitle + '\nDate: ' + vi.publishedDate + '\nAvg rating: ' + vi.averageRating + '\nRating count: ' + vi.ratingsCount + '\nLink: ' + vi.canonicalVolumeLink + '\n');
        });

        //console.log(json);
        var info = candidates[0].volumeInfo;
        _this2.setState({
          avgRating: info.averageRating,
          ratingsCount: info.ratingsCount,
          numPages: info.pageCount,
          origPubYear: info.publishedDate,
          description: info.description || '',
          goodreadsUrl: info.canonicalVolumeLink,
          genres: info.categories,
          similarBooks: []
        });
      });
    }
  }, {
    key: '_fetchBookMetadataOld',
    value: function _fetchBookMetadataOld(title, author) {
      var _this3 = this;

      return this._fetchBookId(title, author).then(function (bookId) {
        var url = 'https://www.goodreads.com/book/show/' + bookId + '.xml?key=' + config.GOODREADS_API_KEY;
        return _this3._fetch(url).then(function (response) {
          return response.text();
        }).then(function (txt) {
          var parser = new DOMParser();
          var xml = parser.parseFromString(txt, 'text/xml');
          var bookXml = xml.getElementsByTagName('book')[0];
          _this3.setState({
            receivedFetch: true,
            avgRating: _this3._getFirstValue(bookXml, 'average_rating'),
            ratingsCount: _this3._getFirstValue(bookXml, 'ratings_count'),
            numPages: _this3._getFirstValue(bookXml, 'num_pages'),
            origPubYear: _this3._getFirstValue(bookXml, 'original_publication_year'),
            description: _this3._getFirstValue(bookXml, 'description'),
            goodreadsUrl: _this3._getFirstValue(bookXml, 'url'),
            genres: _this3._extractGenres(bookXml),
            similarBooks: _this3._extractSimilarBooks(bookXml)
          });
        });
      });
    }
  }, {
    key: '_fetchBookId',
    value: function _fetchBookId(title, author) {
      var url = 'https://www.goodreads.com/search.xml?key=' + config.GOODREADS_API_KEY + '&q=' + title;
      var self = this;
      return this._fetch(url).then(function (response) {
        return response.text();
      }).then(function (txt) {
        var parser = new DOMParser();
        var xml = parser.parseFromString(txt, 'text/xml');
        var results = Array.from(xml.getElementsByTagName('best_book'));

        var matches = results.filter(function (result) {
          var resultTitle = self._getFirstValue(result, 'title');
          var resultAuthor = self._getFirstValue(result, 'name');
          return resultTitle === title || resultAuthor.includes(author.lastName) && resultAuthor.includes(author.firstName);
        });

        var selected = matches.length > 0 ? matches[0] : results[0];
        return self._getFirstValue(selected, 'id');
      });
    }
  }, {
    key: '_fetch',
    value: function _fetch(url) {
      //return fetch(PROXY_URL + url);
      return fetch(url);
    }
  }, {
    key: '_getFirstValue',
    value: function _getFirstValue(xml, tagName) {
      return xml.getElementsByTagName(tagName)[0].childNodes[0].nodeValue;
    }
  }, {
    key: '_extractGenres',
    value: function _extractGenres(bookXml) {
      var genres = Array.from(bookXml.getElementsByTagName('shelf')).map(function (shelf) {
        return shelf.getAttribute('name');
      }).filter(function (name) {
        return !EXCLUDED_SHELVES.includes(name);
      });

      return genres.slice(0, Math.min(genres.length, NUM_GENRES));
    }
  }, {
    key: '_extractSimilarBooks',
    value: function _extractSimilarBooks(bookXml) {
      var similarBooks = Array.from(bookXml.getElementsByTagName('similar_books')[0].getElementsByTagName('title_without_series')).map(function (title) {
        return title.childNodes[0].nodeValue;
      });

      return similarBooks.slice(0, Math.min(similarBooks.length, NUM_SIMILAR_BOOKS));
    }
  }, {
    key: '_renderGenres',
    value: function _renderGenres() {
      var genres = this.state.genres.map(function (genre) {
        return React.createElement(
          'li',
          { className: 'genre', key: genre },
          genre
        );
      });
      return React.createElement(
        'div',
        { className: 'book-genres' },
        React.createElement(
          'h3',
          null,
          'Genres'
        ),
        React.createElement(
          'ul',
          { className: 'genre-list' },
          genres
        )
      );
    }
  }, {
    key: '_renderSimilarBooks',
    value: function _renderSimilarBooks() {
      var similarBooks = this.state.similarBooks.map(function (similarBook) {
        return React.createElement(
          'li',
          { className: 'similar-book', key: similarBook },
          similarBook
        );
      });
      return React.createElement(
        'div',
        { className: 'similar-books' },
        React.createElement(
          'h3',
          null,
          'Similar books'
        ),
        React.createElement(
          'ul',
          { className: 'similar-books-list' },
          similarBooks
        )
      );
    }
  }, {
    key: '_formatLargeNum',
    value: function _formatLargeNum(num) {
      var units = ['', 'K', 'M', 'B', 'T'];
      var result = num;
      var i = 0;
      while (result > 1000) {
        i++;
        result = (result / 1000).toFixed(i > 1 ? 1 : 0);
      }

      if (i >= units.length) {
        return num;
      }

      return result.toString() + units[i];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      if (this.props.hide) {
        return null;
      }

      var author = this.props.author;
      var bookContent = void 0;
      if (this.state.expanded) {
        if (!this.state.receivedFetch) {
          bookContent = React.createElement(
            'div',
            { className: 'spinner' },
            React.createElement('div', { className: 'bounce1' }),
            React.createElement('div', { className: 'bounce2' }),
            React.createElement('div', { className: 'bounce3' })
          );
        } else {
          var limit = this.state.truncateDescription ? DESC_TRUNCATION_LIMIT : Number.MAX_SAFE_INTEGER;
          var ellipsis = this.state.description.length <= limit ? '' : '...';
          var goodreadsLink = '<a href=' + this.state.goodreadsUrl + ' target=\'_blank\'>Google Books page</a>';
          var truncatedDesc = '' + this.state.description.substring(0, limit) + ellipsis + '<br><br>' + goodreadsLink;
          bookContent = React.createElement(
            'div',
            { className: 'book-details' },
            React.createElement('div', { className: 'book-description', dangerouslySetInnerHTML: { __html: truncatedDesc } }),
            React.createElement(
              'div',
              { className: 'book-addl-info' },
              React.createElement(
                'table',
                { className: 'book-stats' },
                React.createElement(
                  'tbody',
                  null,
                  React.createElement(
                    'tr',
                    null,
                    React.createElement(
                      'td',
                      null,
                      'Rating:'
                    ),
                    React.createElement(
                      'td',
                      null,
                      this.state.avgRating
                    )
                  ),
                  React.createElement(
                    'tr',
                    null,
                    React.createElement(
                      'td',
                      null,
                      '# Ratings:'
                    ),
                    React.createElement(
                      'td',
                      null,
                      this._formatLargeNum(this.state.ratingsCount)
                    )
                  ),
                  React.createElement(
                    'tr',
                    null,
                    React.createElement(
                      'td',
                      null,
                      '# Pages:'
                    ),
                    React.createElement(
                      'td',
                      null,
                      this.state.numPages
                    )
                  ),
                  React.createElement(
                    'tr',
                    null,
                    React.createElement(
                      'td',
                      null,
                      'Year:'
                    ),
                    React.createElement(
                      'td',
                      null,
                      this.state.origPubYear
                    )
                  )
                )
              ),
              this._renderGenres(),
              this._renderSimilarBooks()
            )
          );
        }
      }
      return React.createElement(
        'li',
        { className: 'book-item' + (this.state.expanded ? ' expanded' : '') },
        React.createElement(
          'div',
          { className: 'book-hdr', onClick: function onClick() {
              return _this4._toggleExpanded(_this4.props.title, author);
            } },
          React.createElement(
            'span',
            null,
            this.props.displayText
          ),
          React.createElement('i', { className: 'arrow ' + (this.state.expanded ? 'down' : 'up') })
        ),
        bookContent
      );
    }
  }]);

  return Book;
}(React.Component);
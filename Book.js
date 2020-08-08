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

      return this._fetchBookId(title, author).then(function (bookId) {
        var url = 'https://www.goodreads.com/book/show/' + bookId + '.xml?key=' + config.GOODREADS_API_KEY;
        return _this2._fetch(url).then(function (response) {
          return response.text();
        }).then(function (txt) {
          var parser = new DOMParser();
          var xml = parser.parseFromString(txt, 'text/xml');
          var bookXml = xml.getElementsByTagName('book')[0];
          _this2.setState({
            receivedFetch: true,
            avgRating: _this2._getFirstValue(bookXml, 'average_rating'),
            ratingsCount: _this2._getFirstValue(bookXml, 'ratings_count'),
            numPages: _this2._getFirstValue(bookXml, 'num_pages'),
            origPubYear: _this2._getFirstValue(bookXml, 'original_publication_year'),
            description: _this2._getFirstValue(bookXml, 'description'),
            goodreadsUrl: _this2._getFirstValue(bookXml, 'url'),
            genres: _this2._extractGenres(bookXml),
            similarBooks: _this2._extractSimilarBooks(bookXml)
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
      return fetch(PROXY_URL + url);
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
      var _this3 = this;

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
          var goodreadsLink = '<a href=' + this.state.goodreadsUrl + ' target=\'_blank\'>Goodreads page</a>';
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
              return _this3._toggleExpanded(_this3.props.title, author);
            } },
          this.props.displayText
        ),
        bookContent
      );
    }
  }]);

  return Book;
}(React.Component);
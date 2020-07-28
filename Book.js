'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
var EXCLUDED_SHELVES = ['to-read', 'currently-reading'];
var NUM_GENRES = 3;
var NUM_SIMILAR_BOOKS = 3;

var Book = function (_React$Component) {
  _inherits(Book, _React$Component);

  function Book(props) {
    _classCallCheck(this, Book);

    var _this = _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).call(this, props));

    _this.state = {
      expanded: false,
      fetched: false,
      avgRating: '',
      ratingsCount: '',
      numPages: '',
      origPubYear: '',
      description: '',
      genres: [],
      similarBooks: []
    };
    return _this;
  }

  _createClass(Book, [{
    key: '_toggleExpanded',
    value: function _toggleExpanded(title, author) {
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
            avgRating: _this2._getFirstValue(bookXml, 'average_rating'),
            ratingsCount: _this2._getFirstValue(bookXml, 'ratings_count'),
            numPages: _this2._getFirstValue(bookXml, 'num_pages'),
            origPubYear: _this2._getFirstValue(bookXml, 'original_publication_year'),
            description: _this2._getFirstValue(bookXml, 'description'),
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
          'span',
          null,
          'Genres:'
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
          'span',
          null,
          'Similar books:'
        ),
        React.createElement(
          'ul',
          { className: 'similar-books-list' },
          similarBooks
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var author = this.props.author;
      var details = void 0;
      if (this.state.expanded) {
        details = React.createElement(
          'div',
          { className: 'book-details' },
          React.createElement(
            'div',
            { className: 'book-stats' },
            React.createElement(
              'span',
              null,
              'Rating: ',
              this.state.avgRating
            ),
            React.createElement(
              'span',
              null,
              'Num ratings: ',
              this.state.ratingsCount
            ),
            React.createElement(
              'span',
              null,
              'Num pages: ',
              this.state.numPages
            ),
            React.createElement(
              'span',
              null,
              'Year: ',
              this.state.origPubYear
            )
          ),
          React.createElement('div', { className: 'book-description', dangerouslySetInnerHTML: { __html: this.state.description } }),
          this._renderGenres(),
          this._renderSimilarBooks()
        );
      }
      return React.createElement(
        'li',
        { className: 'book-item' },
        React.createElement(
          'span',
          { className: 'book-hdr', onClick: function onClick() {
              return _this3._toggleExpanded(_this3.props.title, author);
            } },
          this.props.displayText
        ),
        details
      );
    }
  }]);

  return Book;
}(React.Component);
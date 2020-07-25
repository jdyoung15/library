'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

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
      origPubYear: ''
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
          var xmlDoc = parser.parseFromString(txt, 'text/xml');
          var book = xmlDoc.getElementsByTagName('book')[0];
          _this2.setState({
            avgRating: _this2._extractFirstTagValue(book, 'average_rating'),
            ratingsCount: _this2._extractFirstTagValue(book, 'ratings_count'),
            numPages: _this2._extractFirstTagValue(book, 'num_pages'),
            origPubYear: _this2._extractFirstTagValue(book, 'original_publication_year')
          });
        });
      });
    }
  }, {
    key: '_fetchBookId',
    value: function _fetchBookId(title, author) {
      var url = 'https://www.goodreads.com/search.xml?key=' + config.GOODREADS_API_KEY + '&q=' + title;
      return this._fetch(url).then(function (response) {
        return response.text();
      }).then(function (txt) {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(txt, 'text/xml');
        var firstResult = xmlDoc.getElementsByTagName('work')[0];
        var bookId = firstResult.getElementsByTagName('best_book')[0].getElementsByTagName('id')[0].childNodes[0].nodeValue;
        return bookId;
      });
    }
  }, {
    key: '_fetch',
    value: function _fetch(url) {
      return fetch(PROXY_URL + url);
    }
  }, {
    key: '_extractFirstTagValue',
    value: function _extractFirstTagValue(xml, tagName) {
      return xml.getElementsByTagName(tagName)[0].childNodes[0].nodeValue;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var author = this.props.author;
      var hdrText = this.props.title + ' (' + author.lastName + ', ' + author.firstName + ')';
      var details = void 0;
      if (this.state.expanded) {
        details = React.createElement(
          'div',
          { className: 'book-details' },
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
        );
      }
      return React.createElement(
        'li',
        { className: 'book-item', key: hdrText, onClick: function onClick() {
            return _this3._toggleExpanded(_this3.props.title, author);
          } },
        React.createElement(
          'span',
          { className: 'book-hdr' },
          hdrText
        ),
        details
      );
    }
  }]);

  return Book;
}(React.Component);
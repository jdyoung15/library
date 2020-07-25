'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Book = function (_React$Component) {
  _inherits(Book, _React$Component);

  function Book(props) {
    _classCallCheck(this, Book);

    var _this = _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).call(this, props));

    _this.state = {
      expanded: false,
      fetched: false,
      avgRating: -1,
      ratingsCount: -1,
      numPages: -1
    };
    return _this;
  }

  _createClass(Book, [{
    key: '_toggleExpanded',
    value: function _toggleExpanded(title, author) {
      var _this2 = this;

      this.setState({
        expanded: !this.state.expanded
      });

      if (this.state.fetched) {
        return;
      }

      this._fetchBookId(title, author).then(function (bookId) {
        console.log(bookId);
        _this2._fetchBookMetadata(bookId);
      });

      this.setState({
        fetched: true
      });
    }
  }, {
    key: '_fetchBookId',
    value: function _fetchBookId(title, author) {
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      var url = 'https://www.goodreads.com/search.xml?key=' + config.GOODREADS_API_KEY + '&q=' + title;
      return fetch(proxyUrl + url).then(function (response) {
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
    key: '_fetchBookMetadata',
    value: function _fetchBookMetadata(bookId) {
      var _this3 = this;

      var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      var url = 'https://www.goodreads.com/book/show/' + bookId + '.xml?key=' + config.GOODREADS_API_KEY;
      return fetch(proxyUrl + url).then(function (response) {
        return response.text();
      }).then(function (txt) {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(txt, 'text/xml');
        var book = xmlDoc.getElementsByTagName('book')[0];
        var avgRating = book.getElementsByTagName('average_rating')[0].childNodes[0].nodeValue;
        var ratingsCount = book.getElementsByTagName('ratings_count')[0].childNodes[0].nodeValue;
        var numPages = book.getElementsByTagName('num_pages')[0].childNodes[0].nodeValue;
        _this3.setState({
          avgRating: avgRating,
          ratingsCount: ratingsCount,
          numPages: numPages
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

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
            'Ratings count: ',
            this.state.ratingsCount
          ),
          React.createElement(
            'span',
            null,
            'Num pages: ',
            this.state.numPages
          )
        );
      }
      return React.createElement(
        'li',
        { className: 'book-item', key: hdrText, onClick: function onClick() {
            return _this4._toggleExpanded(_this4.props.title, author);
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
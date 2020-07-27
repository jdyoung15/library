'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookList = function (_React$Component) {
  _inherits(BookList, _React$Component);

  function BookList(props) {
    _classCallCheck(this, BookList);

    return _possibleConstructorReturn(this, (BookList.__proto__ || Object.getPrototypeOf(BookList)).call(this, props));
  }

  _createClass(BookList, [{
    key: '_sortByAuthorThenTitle',
    value: function _sortByAuthorThenTitle(books) {
      var self = this;
      books.sort(function (bookA, bookB) {
        var compare = self._getAuthorForCompare(bookA).localeCompare(self._getAuthorForCompare(bookB));
        if (compare !== 0) {
          return compare;
        }

        return self._compareByTitle(bookA, bookB);
      });

      return books;
    }
  }, {
    key: '_getAuthorForCompare',
    value: function _getAuthorForCompare(book) {
      return book.author.lastName ? book.author.lastName : book.author.firstName;
    }
  }, {
    key: '_compareByTitle',
    value: function _compareByTitle(bookA, bookB) {
      return this._toDisplayTitle(bookA).localeCompare(this._toDisplayTitle(bookB));
    }
  }, {
    key: '_toDisplayTitle',
    value: function _toDisplayTitle(book) {
      var series = book.series ? book.series + ' - ' : '';
      return '' + series + book.title;
    }
  }, {
    key: '_sortByTitle',
    value: function _sortByTitle(books) {
      books.sort(this._compareByTitle.bind(this));
      return books;
    }
  }, {
    key: '_toDisplayText',
    value: function _toDisplayText(book) {
      var author = book.author;
      var authorDisplayText = '' + (author.lastName ? author.lastName + ', ' : '') + author.firstName;
      return this._toDisplayTitle(book) + ' (' + authorDisplayText + ')';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var self = this;

      var books = [].concat(_toConsumableArray(this.props.books));
      if (this.props.sortByAuthorThenTitle) {
        this._sortByAuthorThenTitle(books);
      } else if (this.props.sortByTitle) {
        this._sortByTitle(books);
      }

      var bookList = books.map(function (book) {
        var displayText = _this2._toDisplayText(book);
        return React.createElement(Book, {
          title: book.title,
          author: book.author,
          series: book.series,
          displayText: displayText,
          key: displayText
        });
      });

      return React.createElement(
        'ul',
        { className: 'book-list' },
        bookList
      );
    }
  }]);

  return BookList;
}(React.Component);
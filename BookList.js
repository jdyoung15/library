'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookList = function (_React$Component) {
  _inherits(BookList, _React$Component);

  function BookList(props) {
    _classCallCheck(this, BookList);

    var _this = _possibleConstructorReturn(this, (BookList.__proto__ || Object.getPrototypeOf(BookList)).call(this, props));

    var books = [].concat(_toConsumableArray(_this.props.books));
    _this._shuffleArray(books);
    _this.state = {
      books: books,
      queryTerms: []
    };
    return _this;
  }

  _createClass(BookList, [{
    key: '_shuffleArray',
    value: function _shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var _ref = [array[j], array[i]];
        array[i] = _ref[0];
        array[j] = _ref[1];
      }
    }
  }, {
    key: '_toDisplayText',
    value: function _toDisplayText(book) {
      var author = book.author;
      var authorDisplayText = '' + (author.lastName ? author.lastName + ', ' : '') + author.firstName;
      return this._toDisplayTitle(book) + ' (' + authorDisplayText + ')';
    }
  }, {
    key: '_sortByAuthorThenTitle',
    value: function _sortByAuthorThenTitle() {
      var books = [].concat(_toConsumableArray(this.state.books));
      var self = this;
      books.sort(function (bookA, bookB) {
        var compare = self._getAuthorForCompare(bookA).localeCompare(self._getAuthorForCompare(bookB));
        if (compare !== 0) {
          return compare;
        }

        return self._compareByTitle(bookA, bookB);
      });

      this.setState({
        books: books
      });
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
    value: function _sortByTitle() {
      var books = [].concat(_toConsumableArray(this.state.books));
      books.sort(this._compareByTitle.bind(this));
      this.setState({
        books: books
      });
    }
  }, {
    key: '_randomize',
    value: function _randomize() {
      var books = [].concat(_toConsumableArray(this.state.books));
      this._shuffleArray(books);
      this.setState({
        books: books
      });
    }
  }, {
    key: '_handleSearchBoxChange',
    value: function _handleSearchBoxChange(event) {
      var query = event.target.value;
      this.setState({
        queryTerms: this._toTerms(query)
      });
    }
  }, {
    key: '_toTerms',
    value: function _toTerms(s) {
      return s.trim().toLowerCase().split(' ').map(function (term) {
        return term.trim().replace(/[\W_]+/g, '');
      });
    }
  }, {
    key: '_matchesAllQueryTerms',
    value: function _matchesAllQueryTerms(s) {
      var terms = this._toTerms(s);
      if (s.includes('Sebold')) {
        console.log(terms);
      }

      var _loop = function _loop(queryTerm) {
        var matches = terms.filter(function (term) {
          return term.startsWith(queryTerm);
        }).length > 0;
        if (!matches) {
          return {
            v: false
          };
        }
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.state.queryTerms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var queryTerm = _step.value;

          var _ret = _loop(queryTerm);

          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return true;
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

      var bookList = this.state.books.map(function (book) {
        var displayText = _this2._toDisplayText(book);
        var hide = !_this2._matchesAllQueryTerms(displayText);
        return React.createElement(Book, {
          title: book.title,
          author: book.author,
          series: book.series,
          displayText: displayText,
          hide: hide,
          key: displayText
        });
      });

      return React.createElement(
        'div',
        { className: 'book-list' },
        React.createElement(
          'button',
          { onClick: this._sortByAuthorThenTitle.bind(this) },
          'Sort by Author'
        ),
        React.createElement(
          'button',
          { onClick: this._sortByTitle.bind(this) },
          'Sort by Title'
        ),
        React.createElement(
          'button',
          { onClick: this._randomize.bind(this) },
          'Shuffle all'
        ),
        React.createElement('input', { type: 'text', placeholder: 'Search...', size: '70', onChange: this._handleSearchBoxChange.bind(this) }),
        React.createElement(
          'ul',
          { className: 'book-list-items' },
          bookList
        )
      );
    }
  }]);

  return BookList;
}(React.Component);
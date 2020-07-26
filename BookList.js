'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
    key: 'render',
    value: function render() {
      var bookList = this.props.books.map(function (book) {
        return React.createElement(Book, { title: book.title, author: book.author, series: book.series, key: book.title });
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
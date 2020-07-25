'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Library = function (_React$Component) {
  _inherits(Library, _React$Component);

  function Library(props) {
    _classCallCheck(this, Library);

    var _this = _possibleConstructorReturn(this, (Library.__proto__ || Object.getPrototypeOf(Library)).call(this, props));

    _this.state = {
      books: [{
        author: {
          lastName: 'Abagnale',
          firstName: 'Frank'
        },
        title: 'Catch Me If You Can'
      }, {
        author: {
          lastName: 'Abbot',
          firstName: 'Edwin'
        },
        title: 'Flatland'
      }]
    };
    return _this;
  }

  _createClass(Library, [{
    key: 'render',
    value: function render() {
      var bookList = this.state.books.map(function (book) {
        var displayText = book.title + ' (' + book.author.lastName + ', ' + book.author.firstName + ')';
        return React.createElement(
          'li',
          { key: displayText, className: 'book' },
          displayText
        );
      });

      return React.createElement(
        'ul',
        { className: 'book-list' },
        bookList
      )
      //<button onClick={() => this.setState({ liked: true }) }>
      //  Like
      //</button>
      ;
    }
  }]);

  return Library;
}(React.Component);

var domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(Library, null), domContainer);
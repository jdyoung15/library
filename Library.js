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
    key: 'fetchMetadata',
    value: function fetchMetadata(title, author) {
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      var url = 'https://www.goodreads.com/search.xml?key=' + config.GOODREADS_API_KEY + '&q=' + title;
      fetch(proxyUrl + url).then(function (response) {
        return response.text();
      }).then(function (txt) {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(txt, 'text/xml');
        var firstResult = xmlDoc.getElementsByTagName('work')[0];
        var avgRating = firstResult.getElementsByTagName('average_rating')[0].childNodes[0].nodeValue;
        console.log(firstResult);
        var bookId = firstResult.getElementsByTagName('best_book')[0].getElementsByTagName('id')[0].childNodes[0].nodeValue;
        console.log(bookId);
      });

      //alert(title + ' ' + author.lastName + ', ' + author.firstName);
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      var bookList = this.state.books.map(function (book) {
        var displayText = book.title + ' (' + book.author.lastName + ', ' + book.author.firstName + ')';
        return React.createElement(
          'li',
          { className: 'book-item', key: displayText, onClick: function onClick() {
              return self.fetchMetadata(book.title, book.author);
            } },
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
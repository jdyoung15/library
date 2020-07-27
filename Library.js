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
      sortByAuthorThenTitle: true,
      sortByTitle: false
    };
    return _this;
  }

  _createClass(Library, [{
    key: '_toggleSortByAuthorThenTitle',
    value: function _toggleSortByAuthorThenTitle() {
      this.setState({
        sortByAuthorThenTitle: !this.state.sortByAuthorThenTitle,
        sortByTitle: !this.state.sortByTitle
      });
    }
  }, {
    key: '_toggleSortByTitle',
    value: function _toggleSortByTitle() {
      this.setState({
        sortByTitle: !this.state.sortByTitle,
        sortByAuthorThenTitle: !this.state.sortByAuthorThenTitle
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('sortByAuthorThenTitle ' + this.state.sortByAuthorThenTitle);
      console.log('sortByTitle ' + this.state.sortByTitle);
      return React.createElement(
        'div',
        { className: 'library' },
        React.createElement(
          'button',
          { onClick: this._toggleSortByAuthorThenTitle.bind(this), disabled: !this.state.sortByTitle },
          'Sort by Author'
        ),
        React.createElement(
          'button',
          { onClick: this._toggleSortByTitle.bind(this), disabled: !this.state.sortByAuthorThenTitle },
          'Sort by Title'
        ),
        React.createElement(
          'ul',
          { className: 'book-list' },
          React.createElement(BookList, {
            books: initialBookData,
            sortByAuthorThenTitle: this.state.sortByAuthorThenTitle,
            sortByTitle: this.state.sortByTitle
          })
        )
      );
    }
  }]);

  return Library;
}(React.Component);

var domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(Library, null), domContainer);
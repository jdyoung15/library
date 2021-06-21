'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      description: '',
      genres: [],
      truncateDescription: true
    };
    return _this;
  }

  /** Handles when this book component is expanded or collapsed. /*/


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

    /** Fetches the relevant info for this book and updates the state. */

  }, {
    key: '_fetchBookMetadata',
    value: function _fetchBookMetadata(title, author) {
      var _this2 = this;

      var authorUrl = (author.firstName + ' ' + author.lastName).replaceAll(' ', '+');
      var titleUrl = title.replaceAll(' ', '+');
      var url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:"' + titleUrl + '"+inauthor:' + authorUrl;
      console.log(url);
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        _this2.setState({
          receivedFetch: true
        });

        if (json.totalItems === 0) {
          console.log('No books found');
          return;
        }

        json.items.forEach(function (item) {
          var vi = item.volumeInfo;
          console.log('Title: ' + vi.title + '\nSubtitle: ' + vi.subtitle + '\nDate: ' + vi.publishedDate + '\nAvg rating: ' + vi.averageRating + '\nRating count: ' + vi.ratingsCount + '\nLink: ' + vi.canonicalVolumeLink + '\n');
        });

        var candidates = json.items;
        // filter exact title matches 
        var titleMatches = json.items.filter(function (item) {
          return item.volumeInfo.title.toLowerCase() === title.toLowerCase();
        });
        // if none, consider all 
        if (titleMatches.length > 0) {
          candidates = titleMatches;
        }

        // sort by descending number of reviews
        candidates.sort(function (c1, c2) {
          return (c2.volumeInfo.ratingsCount || 0) - (c1.volumeInfo.ratingsCount || 0);
        });

        console.log('\n\n##########################################\n\n');
        // if multiple, use earliest publishedDate and highest ratingCount
        candidates.forEach(function (item) {
          var vi = item.volumeInfo;
          console.log('Title: ' + vi.title + '\nSubtitle: ' + vi.subtitle + '\nDate: ' + vi.publishedDate + '\nAvg rating: ' + vi.averageRating + '\nRating count: ' + vi.ratingsCount + '\nLink: ' + vi.canonicalVolumeLink + '\n');
        });

        //const info = candidates[0].volumeInfo;
        _this2.setState({
          // Assumes averageRating and ratingsCount are either both non-null or both null for a given book info
          avgRating: _this2._find(candidates, 'averageRating'),
          ratingsCount: _this2._find(candidates, 'ratingsCount'),
          numPages: _this2._find(candidates, 'pageCount'),
          description: _this2._find(candidates, 'description') || '',
          googleBooksUrl: _this2._findUrl(candidates, 'books.google.com') || _this2._findUrl(candidates, 'play.google.com'),
          genres: _this2._findGenres(candidates)
        });

        console.log('\n\n#################################################################################\n\n');
      });
    }

    /**
     * Given an array of book info objects retrieved via the Google Books API,
     * returns the first-encountered truthy value corresponding to the given property.
     * If none are found, returns undefined. 
     */

  }, {
    key: '_find',
    value: function _find(bookInfos, property) {
      return bookInfos.map(function (bi) {
        return bi.volumeInfo[property];
      }).find(function (p) {
        return p;
      });
    }

    /**
     * Given an array of book info objects retrieved via the Google Books API,
     * returns the first-encountered url that matches the given url.
     * If none are found, returns undefined. 
     */

  }, {
    key: '_findUrl',
    value: function _findUrl(bookInfos, url) {
      return bookInfos.map(function (bi) {
        return bi.volumeInfo.canonicalVolumeLink;
      }).filter(function (cvi) {
        return cvi && cvi.includes(url);
      }).find(function (cvi) {
        return cvi;
      });
    }

    /**
     * Given an array of book info objects retrieved via the Google Books API,
     * returns an array containing the aggregated genres across all the book info objects.
     */

  }, {
    key: '_findGenres',
    value: function _findGenres(bookInfos) {
      var allGenres = bookInfos.map(function (bi) {
        return bi.volumeInfo.categories;
      }).reduce(function (acc, curr) {
        return acc.concat(curr);
      }, []);
      var truthyOnly = allGenres.filter(function (g) {
        return g;
      });
      var deduplicated = [].concat(_toConsumableArray(new Set(truthyOnly)));
      return deduplicated;
    }

    /** Renders the UI for the genres associated with this book. */

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

    /** 
     * Returns a string representing the given number in rounded and abbreviated form. E.g. 3384 -> '3K'. 
     * Smaller numbers will not be rounded/abbreviated. 
     */

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
        return num.toString();
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
          var googleBooksLink = '<a href=' + this.state.googleBooksUrl + ' target=\'_blank\'>Google Books page</a>';
          var truncatedDesc = '' + this.state.description.substring(0, limit) + ellipsis + '<br><br>' + googleBooksLink;
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
                  )
                )
              ),
              this._renderGenres()
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
          React.createElement(
            'span',
            null,
            this.props.displayText
          ),
          React.createElement('i', { className: 'arrow ' + (this.state.expanded ? 'down' : 'up') })
        ),
        bookContent
      );
    }
  }]);

  return Book;
}(React.Component);
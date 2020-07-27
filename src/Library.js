'use strict';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByAuthorThenTitle: true,
      sortByTitle: false,
    }
  }

  _toggleSortByAuthorThenTitle() {
    this.setState({
      sortByAuthorThenTitle: !this.state.sortByAuthorThenTitle,
      sortByTitle: !this.state.sortByTitle,
    });
  }

  _toggleSortByTitle() {
    this.setState({
      sortByTitle: !this.state.sortByTitle,
      sortByAuthorThenTitle: !this.state.sortByAuthorThenTitle,
    });
  }

  render() {
    console.log('sortByAuthorThenTitle ' + this.state.sortByAuthorThenTitle);
    console.log('sortByTitle ' + this.state.sortByTitle);
    return (
      <div className='library'>
        <button onClick={this._toggleSortByAuthorThenTitle.bind(this)} disabled={!this.state.sortByTitle}>
          Sort by Author
        </button>
        <button onClick={this._toggleSortByTitle.bind(this)} disabled={!this.state.sortByAuthorThenTitle}>
          Sort by Title 
        </button>
        <ul className='book-list'>
          <BookList 
            books={initialBookData} 
            sortByAuthorThenTitle={this.state.sortByAuthorThenTitle}
            sortByTitle={this.state.sortByTitle}
          />
        </ul>
      </div>
    );
  }
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<Library />, domContainer);

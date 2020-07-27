'use strict';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByAuthorThenTitle: true,
      sortByTitle: false,
    }
  }

  render() {
    return (
      <ul className='book-list'>
        <BookList 
          books={initialBookData} 
          sortByAuthorThenTitle={this.state.sortByAuthorThenTitle}
          sortByTitle={this.state.sortByTitle}
        />
      </ul>
    );
  }
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<Library />, domContainer);

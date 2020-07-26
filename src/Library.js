'use strict';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      books: initialBookData
    };
  }

  render() {
    return (
      <ul className='book-list'>
        <BookList books={this.state.books} />
      </ul>
    );
  }
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<Library />, domContainer);

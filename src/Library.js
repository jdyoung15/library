'use strict';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      books: [
        {
          author: {
            lastName: 'Abagnale',
            firstName: 'Frank'
          },
          title: 'Catch Me If You Can',
        },
        {
          author: {
            lastName: 'Abbot',
            firstName: 'Edwin'
          },
          title: 'Flatland',
        },
      ]
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

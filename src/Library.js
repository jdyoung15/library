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
    let bookList = this.state.books.map(book => {
      let displayText = `${book.title} (${book.author.lastName}, ${book.author.firstName})`;
      return (
        <li key={displayText} className='book'>
          {displayText}
        </li>
      );
    });
      
    return (
      <ul className='book-list'>
        {bookList}
      </ul>
      //<button onClick={() => this.setState({ liked: true }) }>
      //  Like
      //</button>
    );
  }
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<Library />, domContainer);

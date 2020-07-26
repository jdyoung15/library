'use strict';

class BookList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let bookList = this.props.books.map(book => {
      return (<Book title={book.title} author={book.author} series={book.series} key={book.title} />);
    });
      
    return (
      <ul className='book-list'>
        {bookList}
      </ul>
    );
  }
}

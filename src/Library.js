'use strict';

class Library extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='library'>
        <h1>Books</h1>
        <BookList books={initialBookData} />
      </div>
    );
  }
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<Library />, domContainer);

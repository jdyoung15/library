'use strict';

class Library extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='library'>
        <BookList books={initialBookData} />
      </div>
    );
  }
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<Library />, domContainer);

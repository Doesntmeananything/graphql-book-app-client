import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

class BookList extends React.Component {
  displayBooks() {
    const { data } = this.props;
    return data.loading ? (
      <div>Loading data...</div>
    ) : (
      data.books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      })
    );
  }
  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);

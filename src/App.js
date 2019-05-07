import React from "react";
import ApolloClient, { HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import BookList from "./components/BookList";

// Apollo client setup
const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>My Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;

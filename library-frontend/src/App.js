import { useState } from "react";
import { useQuery, useApolloClient } from "@apollo/client";
import { ALL_AUTHORS, ALL_BOOKS } from "./queries";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import LoginForm from "./components/LoginForm";
import BooksByGenre from "./components/BooksByGenre";

const App = () => {
  const authors = useQuery(ALL_AUTHORS);
  const books = useQuery(ALL_BOOKS);
  const user = {
    _id: { $oid: "65af808a4254d5ba1c5829da" },
    username: "filip",
    password: "secret",
    __v: { $numberInt: "0" },
    favoriteGenre: "drama",
  };
  const [page, setPage] = useState("authors");
  const [token, setToken] = useState(null);
  const client = useApolloClient();

  if (authors.loading || !authors || !authors.data) {
    return <div>loading...</div>;
  }

  const logout = () => {
    setToken(null);
    localStorage.clear();
    client.resetStore();
  };

  if (!token) {
    return (
      <>
        <LoginForm setToken={setToken} setError={null} />
      </>
    );
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        <button onClick={() => setPage("add")}>add book</button>
        <button onClick={logout}>logout</button>
      </div>
      <BooksByGenre favoriteGenre={user.favoriteGenre} />

      <Authors authors={authors.data.allAuthors} show={page === "authors"} />

      <Books books={books.allBooks} show={page === "books"} />

      <NewBook show={page === "add"} />
    </div>
  );
};

export default App;

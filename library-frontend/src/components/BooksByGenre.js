import React from "react";
import { useQuery } from "@apollo/client";
import { BOOKS_BY_GENRE } from "../queries";

const BooksByGenre = ({ favoriteGenre }) => {
  const { loading, error, data } = useQuery(BOOKS_BY_GENRE, {
    variables: { genre: favoriteGenre },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const books = data.booksByGenre;

  return (
    <div>
      <h2>Books by Genre</h2>
      <ul>
        {books.map((book) => (
          <li key={book.title}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksByGenre;

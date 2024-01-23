import React, { useState } from "react";

const Books = () => {
  let books = [
    {
      title: "Clean Code",
      published: 2008,
      author: "Robert Martin",
      id: "afa5b6f4-344d-11e9-a414-719c6709cf3e",
      genres: ["refactoring"],
    },
    {
      title: "Agile software development",
      published: 2002,
      author: "Robert Martin",
      id: "afa5b6f5-344d-11e9-a414-719c6709cf3e",
      genres: ["agile", "patterns", "design"],
    },
    {
      title: "Refactoring, edition 2",
      published: 2018,
      author: "Martin Fowler",
      id: "afa5de00-344d-11e9-a414-719c6709cf3e",
      genres: ["refactoring"],
    },
    {
      title: "Refactoring to patterns",
      published: 2008,
      author: "Joshua Kerievsky",
      id: "afa5de01-344d-11e9-a414-719c6709cf3e",
      genres: ["refactoring", "patterns"],
    },
    {
      title: "Practical Object-Oriented Design, An Agile Primer Using Ruby",
      published: 2012,
      author: "Sandi Metz",
      id: "afa5de02-344d-11e9-a414-719c6709cf3e",
      genres: ["refactoring", "design"],
    },
    {
      title: "Crime and punishment",
      published: 1866,
      author: "Fyodor Dostoevsky",
      id: "afa5de03-344d-11e9-a414-719c6709cf3e",
      genres: ["classic", "crime"],
    },
    {
      title: "The Demon ",
      published: 1872,
      author: "Fyodor Dostoevsky",
      id: "afa5de04-344d-11e9-a414-719c6709cf3e",
      genres: ["classic", "revolution"],
    },
  ];
  // Add a check for undefined or empty books array
  const [selectedGenre, setSelectedGenre] = useState("refactoring");

  if (!books || books.length === 0) {
    return <div>No books available.</div>;
  }

  // Filter books based on the selected genre
  const filteredBooks = selectedGenre
    ? books.filter((book) => book.genres.includes(selectedGenre))
    : books;

  return (
    <div>
      <div>
        {/* Genre buttons */}
        <button onClick={() => setSelectedGenre("refactoring")}>
          Refactoring
        </button>
        <button onClick={() => setSelectedGenre("agile")}>Agile</button>
        {/* Add more genre buttons as needed */}
        <button onClick={() => setSelectedGenre(null)}>All Genres</button>
      </div>

      <h2>Books</h2>
      <ul>
        {/* Display filtered books */}
        {filteredBooks.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Books;

import React, { useState } from 'react';
import './Movies.css';

export default function Home() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&language=eng`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('API Response:', data);
      setBooks(data.docs || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <h1>Book Recommendation</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a book"
        />
        <button type="submit">Search</button>
      </form>
      <div className="book-list">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.key} className="book-item">
              <h2>{book.title}</h2>
              {book.cover_i && (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={`${book.title} cover`}
                  className="book-cover"
                />
              )}
            </div>
          ))
        ) : (
          <p className="no-books">No books found. Try a different search.</p>
        )}
      </div>
    </div>
  );
}
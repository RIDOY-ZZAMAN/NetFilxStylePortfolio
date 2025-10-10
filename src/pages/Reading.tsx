import React, { useEffect, useState } from "react";
import "./Reading.css";
import { getReading } from "../queries/getReading";

const Reading: React.FC = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchReading() {
      const data = await getReading();
      console.log("Consoling from the Reading tsx", data);
      setBooks(data);
    }

    fetchReading();
  }, []);

  // Debug: Check what's in the state
  console.log("Books state:", books);
  console.log("Books length:", books.length);

  return (
    <div className="reading-container">
      <h2 className="reading-title">📚 Books That Shaped My Journey</h2>
      <p className="reading-intro">
        These books have influenced my perspectives, motivation, and
        self-growth.
      </p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div
            key={index}
            className="book-card"
            style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={book.imgsrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">Title: {book.title}</h3>
              <h4 className="book-author">Author: {book.author}</h4>
              <h4 className="book-author">Genre: {book.genre}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;

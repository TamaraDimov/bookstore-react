import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

function Books() {
  const books = useSelector((store) => store.books.books);

  return (
    <>
      <div>
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        ))}
      </div>
      <Form />
    </>
  );
}

export default Books;

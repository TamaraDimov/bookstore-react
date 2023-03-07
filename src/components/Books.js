import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
import style from './style/form.css';

function Books() {
  const books = useSelector((store) => store.books.books);

  return (
    <>
      <div>
        {books.map((book) => (
          <Book
            class={style.aman}
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

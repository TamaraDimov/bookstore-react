import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
import style from './style/form.css';
import { getbookInfo } from '../redux/books/booksSlice';

function Books() {
  const dispatch = useDispatch();
  const { books, pageLoading } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(getbookInfo());
  }, [dispatch]);

  if (pageLoading) {
    return <h1>Loading...please wait...</h1>;
  }

  if (books.length === 0) {
    return (
      <>
        <h1>Nothing to Display</h1>
        <Form />
      </>
    );
  }

  return (
    <>
      <div>
        {books.map((book) => (
          <Book
            class={style.aman}
            key={book.item_id}
            title={book.title}
            author={book.author}
            id={book.item_id}
          />
        ))}
      </div>
      <Form />
    </>
  );
}

export default Books;

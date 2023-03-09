import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
import style from './style/form.css';
import { bookSliceActions, getbookInfo } from '../redux/books/booksSlice';

function Books() {
  const dispatch = useDispatch();
  const { books, pageLoading } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(getbookInfo());
  }, [dispatch]);

  if (pageLoading) {
    return <h1>Loading...please wait...</h1>;
  }

  const showBooks = () => (
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

  if (books.length === 0) {
    if (localStorage.length > 0) {
      const books = [];
      Object.keys(localStorage).forEach((key) => {
        books.push(JSON.parse(localStorage.getItem(key)));
      });
      books.forEach((b) => dispatch(bookSliceActions.addBook(b)));
      return showBooks();
    }
    return (
      <>
        <h1 className="text-5">Nothing to Display</h1>
        <br />
        <Form />
      </>
    );
  }

  return showBooks();
}

export default Books;

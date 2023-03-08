import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { booksActions, deleteBook } from '../redux/books/booksSlice';

function Book({ title, author, id }) {
  const show = useDispatch();

  const removeHandler = (event) => {
    const { id } = event.target.dataset;

    show(booksActions.removeBook(id));
    show(deleteBook(id));
  };
  return (
    <>
      <li className="bookList">
        <div className="bookInfo">
          <p className="title">{title}</p>
          <p className="author">{author}</p>
        </div>
        <button data-id={id} type="button" onClick={removeHandler}>
          Remove Book
        </button>
      </li>
    </>
  );
}
Book.defaultProps = {
  id: '',
  title: '',
  author: '',
};
Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};

export default Book;

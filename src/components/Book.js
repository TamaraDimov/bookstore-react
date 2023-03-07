import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  return (
    <>
      <li className="bookList">
        <div className="bookInfo">
          <p className="title">{title}</p>
          <p className="author">{author}</p>
        </div>
        <button type="button" onClick={() => dispatch(removeBook(id))}>
          remove
        </button>
      </li>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;

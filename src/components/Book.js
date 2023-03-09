import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookSliceActions, deleteBook } from '../redux/books/booksSlice';

function Book({ title, author, id }) {
  const show = useDispatch();

  const removeHandler = () => {
    show(bookSliceActions.removeBook(id));
    show(deleteBook(id));
    localStorage.removeItem(id);
  };
  return (
    <div className="wrap">
      <li className="bookList">
        <div className="bookInfo">
          <p className="category text-5">Aciton</p>
          <p className="title text-6">{title}</p>
          <p className="author text-8">{author}</p>

          <div className="rowBtn">
            <button className="text-8" type="button">
              Comments
            </button>
            <div className="line2" />
            <button
              className="text-8"
              data-id={id}
              type="button"
              onClick={removeHandler}
            >
              Remove Book
            </button>
            <div className="line2" />
            <button className="text-8" type="button">
              Edit
            </button>
            <div className="line2" />
          </div>
        </div>
        <div className="right-side">
          <div className="complete graph">
            <div className="oval" />
            <div className="complete percent">
              <span className="percentage">75%</span>
              <p className="text-2">Completed</p>
            </div>
            <div className="line3" />
          </div>
        </div>
        <div className="progressInfo">
          <p className="text-4"> CURRENT CHAPTER</p>
          <p className="text-7"> Chapter 10</p>
          <button className="btn" type="button">
            UPDATE PROGRES
          </button>
        </div>
      </li>
    </div>
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

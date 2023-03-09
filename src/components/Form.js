import uniqid from 'uniqid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookSliceActions, postBook } from '../redux/books/booksSlice';
import style from './style/form.css';

function Form() {
  const dispatch = useDispatch();
  const [title, addTitle] = useState('');
  const [author, addAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !author.trim()) return;
    const bookInfo = {
      item_id: uniqid(),
      title,
      author,
      category: 'Action',
    };

    dispatch(bookSliceActions.addBook(bookInfo));
    dispatch(postBook(bookInfo));
    localStorage.setItem(bookInfo.item_id, JSON.stringify(bookInfo));
    addTitle('');
    addAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className="formStile">
        <input
          type="text"
          id="title"
          className="input1"
          value={title}
          placeholder="Add title"
          onChange={(e) => addTitle(e.target.value)}
        />
        <input
          type="text"
          id="author"
          value={author}
          placeholder="Add Author"
          onChange={(e) => addAuthor(e.target.value)}
        />
        <input className="submit" type="submit" value="Add Book" />
      </div>
    </form>
  );
}

export default Form;

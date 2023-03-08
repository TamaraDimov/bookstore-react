import uniqid from 'uniqid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { booksActions, postBook } from '../redux/books/booksSlice';
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

    dispatch(booksActions.addBook(bookInfo));
    dispatch(postBook(bookInfo));
    addTitle('');
    addAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        type="text"
        id="title"
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
    </form>
  );
}

export default Form;

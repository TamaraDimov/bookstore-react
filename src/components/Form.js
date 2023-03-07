import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function Form() {
  const dispatch = useDispatch();
  const [title, addTitle] = useState('');
  const [author, addAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = Math.random();
    dispatch(addBook({ id, title, author }));
    addTitle('');
    addAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <input type="submit" value="Add Book" />
    </form>
  );
}

export default Form;

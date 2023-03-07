import { createSlice } from '@reduxjs/toolkit';
import list from './list';

const initialState = {
  books: list,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (store, action) => {
      const newBook = action.payload;
      return {
        ...store,
        books: [...store.books, newBook],
      };
    },
    removeBook: (store, action) => {
      const bookId = action.payload;
      return {
        ...store,
        books: store.books.filter((book) => book.id !== bookId),
      };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;

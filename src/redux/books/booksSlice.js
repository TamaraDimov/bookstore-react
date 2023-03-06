import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookstore: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducer: {
    addBook: (state, action) => {
      state.bookstore.push(action.payload);
    },
    removeBook: (state, action) => {
      state.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;

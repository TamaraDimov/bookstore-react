/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/C1TOCRXy2TrdHgmdGVbc/books';

export const postBook = createAsyncThunk(
  'bookInfo/postbookInfo',
  async (bookInfo, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL, bookInfo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const getbookInfo = createAsyncThunk(
  'bookInfo/getbookInfo',
  async (_, thunkAPI) => {
    try {
      const response = await axios(BASE_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const deleteBook = createAsyncThunk(
  'bookInfo/deleteBook',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const initialState = {
  books: [],
  isLoading: false,
  status: 'idle',
  error: null,
  createStatus: '',
  deleteStatus: '',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (store, action) => {
      const newBook = action.payload;
      store.books.push(newBook);
    },
    extraReducers: (extrabuilder) => {
      extrabuilder
        .addCase(getbookInfo.rejected, (store, action) => {
          store.status = 'error';
          store.error = action.error.message;
        })
        .addCase(postBook.pending, (store) => {
          store.isLoading = true;
        });
    },
    removeBook: (store, action) => {
      const bookId = action.payload;
      store.books = store.books.filter((book) => book.item_id !== bookId);
    },
  },
});

export const bookSliceActions = booksSlice.actions;

export default booksSlice.reducer;

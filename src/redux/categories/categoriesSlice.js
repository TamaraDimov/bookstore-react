import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',

  initialState,

  reducer: {
    checkStatus: (store) => {
      if (store.categories.length === 0) {
        store.categories.push('Under construction');
      }
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;

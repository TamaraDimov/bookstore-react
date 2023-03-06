import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',

  initialState,

  reducer: {
    checkStatus: (state) => {
      if (state.categories.length === 0) {
        state.categories.push('Under construction');
      }
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;

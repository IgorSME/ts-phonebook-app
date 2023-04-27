import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    changeFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const changeFilterValue = (state:RootState) => state.filter.value;

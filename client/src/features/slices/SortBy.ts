import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    name: '',
    value: -1,
  },
};

const Sorts = createSlice({
  name: 'Sorts',
  initialState,
  reducers: {
    setSorts(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setSorts } = Sorts.actions;

export default Sorts.reducer;

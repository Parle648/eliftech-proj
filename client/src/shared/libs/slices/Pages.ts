import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EventState {
  value: number;
}

const initialState: EventState = {
  value: 0,
};

const Pages = createSlice({
  name: 'Pages',
  initialState,
  reducers: {
    setPages(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { setPages } = Pages.actions;

export default Pages.reducer;

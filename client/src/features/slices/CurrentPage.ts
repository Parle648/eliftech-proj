import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EventState {
  value: number;
}

const initialState: EventState = {
  value: 0,
};

const CurrentPage = createSlice({
  name: 'CurrentPage',
  initialState,
  reducers: {
    setCurrentCount(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    incrementCurrent(state) {
      state.value = state.value + 1;
    },
  },
});

export const { setCurrentCount, incrementCurrent } = CurrentPage.actions;

export default CurrentPage.reducer;

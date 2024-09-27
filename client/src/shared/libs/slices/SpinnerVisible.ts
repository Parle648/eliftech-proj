import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EventState {
  value: boolean;
}

const initialState: EventState = {
  value: false,
};

const SpinnerVisible = createSlice({
  name: 'SpinnerVisible',
  initialState,
  reducers: {
    setSpinnerVisible(state, action: PayloadAction<boolean>) {
      state.value = action.payload;
    },
  },
});

export const { setSpinnerVisible } = SpinnerVisible.actions;

export default SpinnerVisible.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  event_id: number;
  full_name: string;
  email: string;
  date_of_birth: Date;
  where_hear: string;
}

interface UserState {
  value: User[];
}

const initialState: UserState = {
  value: [],
};

const Users = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.value = action.payload;
    },
  },
});

export const { setUsers } = Users.actions;

export default Users.reducer;

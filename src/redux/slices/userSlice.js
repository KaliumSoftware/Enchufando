import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUsers: [],
  loggedUser: {}
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    setLoggedUser: (state, action) => {
      localStorage.setItem(
        'loggedUser',
        JSON.stringify(action.payload)
      );

      state.loggedUser = action.payload;
    }
  }
});

export const { getAllUsers, setLoggedUser } = userSlice.actions;
export default userSlice.reducer;

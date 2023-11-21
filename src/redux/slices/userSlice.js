import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUsers: [],
  allUsersCopy: [],
  onlyUsers: 0,
  loggedUser: {}
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getAllUsers: (state, action) => {
      state.allUsers = action.payload;
      state.allUsersCopy = action.payload;
    },

    setLoggedUser: (state, action) => {
      localStorage.setItem('loggedUser', JSON.stringify(action.payload));

      state.loggedUser = action.payload;
    },
    filterUsersByName: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      const filteredUsers = state.allUsersCopy.filter((user) => {
        if (user.name) {
          const userNameNormalized = user.name
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
          return userNameNormalized.toLowerCase().includes(searchTerm);
        }
        return true;
      });
      state.allUsers = filteredUsers;
    }
  }
});

export const { getAllUsers, setLoggedUser, filterUsersByName } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import userService from "../services/user";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers(state, { payload }) {
      return payload;
    },
  },
});

const { setUsers } = usersSlice.actions;

export const initializeUsers = () => {
  return async (dispatch) => {
    const response = await userService.getAll();
    dispatch(setUsers(response));
  };
};

export const searchByUsername = (username) => {
  return (dispatch, getState) => {
    const users = getState().users;
    if (!users) {
      return null;
    }
    const user = users.find((user) => user.username === username);
    if (user) {
      return user;
    }
    return null;
  };
};

export default usersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/login";
import blogsService from "../services/blogs";

const initialState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      if (!window.localStorage.getItem("user")) {
        const payloadStr = JSON.stringify(payload);
        window.localStorage.setItem("user", payloadStr);
      }
      blogsService.setToken(payload.token);
      return payload;
    },
    removeUser() {
      window.localStorage.removeItem("user");
      blogsService.setToken(null);
      return initialState;
    },
  },
});
export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
export const initializeUser = () => {
  return (dispatch) => {
    const user = window.localStorage.getItem("user");
    if (user) {
      const jsonUser = JSON.parse(user);
      dispatch(setUser(jsonUser));
    }
  };
};

export const loginUser = (payload) => {
  return async (dispatch) => {
    console.log(payload);
    const response = await loginService.login(payload);
    dispatch(setUser(response));
  };
};

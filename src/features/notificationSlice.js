import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: null,
  type: null,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    show(state, { payload }) {
      return {
        text: payload.text,
        type: payload.type,
      };
    },
    hide() {
      return initialState;
    },
  },
});

export const { show, hide } = notificationSlice.actions;

export const setNotification = (text, type) => {
  return (dispatch) => {
    const payload = {
      text,
      type,
    };
    setTimeout(() => {
      dispatch(hide());
    }, 5000);
    dispatch(show(payload));
  };
};

export default notificationSlice.reducer;

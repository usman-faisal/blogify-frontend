import { configureStore } from "@reduxjs/toolkit";
import notificationSlice from "./features/notificationSlice";
import blogsSlice from "./features/blogsSlice";
import userSlice from "./features/userSlice";
import usersSlice from "./features/usersSlice";

const store = configureStore({
  reducer: {
    notification: notificationSlice,
    blogs: blogsSlice,
    user: userSlice,
    users: usersSlice,
  },
});
store.subscribe(() => {
  console.log(store.getState());
});

export default store;

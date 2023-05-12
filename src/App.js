import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeBlogs } from "./features/blogsSlice";
import { initializeUser } from "./features/userSlice";
import { Route, Routes, useMatch } from "react-router-dom";
import UserBlogs from "./pages/UserBlogs";
import BlogDetails from "./pages/BlogDetails";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Users from "./pages/Users";
import { Notification } from "@mantine/core";
import { initializeUsers } from "./features/usersSlice";
const App = () => {
  const dispatch = useDispatch();
  const noti = useSelector((state) => state.notification);
  const users = useSelector((state) => state.users);
  const blogs = useSelector((state) => state.blogs);

  const userMatch = useMatch("/users/:id")?.params?.id;
  const userDetailsToShow =
    userMatch &&
    users.find((user) => user.id.toString() === userMatch.toString());
  const blogMatch = useMatch("/blogs/:id")?.params?.id;
  const blogDetailsToShow =
    blogMatch &&
    blogs.find((blog) => blog.id.toString() === blogMatch.toString());
  const userLikedBlogsMatch = useMatch("/users/:id/likedBlogs")?.params?.id;
  const userLikedBlogsToShow =
    userLikedBlogsMatch &&
    users.find((user) => user.id.toString() === userLikedBlogsMatch.toString());
  console.log({ userLikedBlogsToShow });
  useEffect(() => {
    dispatch(initializeUser());
    dispatch(initializeUsers());
    dispatch(initializeBlogs());
  }, []);
  console.log(noti, "notii");
  return (
    <>
      {noti.text && (
        <Notification color={noti.type === "error" && "red"}>
          {noti.text}
        </Notification>
      )}
      <Routes>
        <Route element={<Users />} path="/users" />
        <Route element={<Login />} path="/login" />
        <Route
          element={
            <UserBlogs
              blogs={userDetailsToShow?.blogs}
              title={`Blogs added by ${userDetailsToShow?.username}`}
            />
          }
          path="/users/:id"
        />
        <Route
          element={
            <UserBlogs
              blogs={userLikedBlogsToShow?.likedBlogs}
              title={`Blogs liked by ${userLikedBlogsToShow?.username}`}
            />
          }
          path="/users/:id/likedBlogs"
        />
        <Route
          element={<BlogDetails blog={blogDetailsToShow} />}
          path="/blogs/:id"
        />
        <Route element={<Home />} path="/" />
      </Routes>
    </>
  );
};

export default App;
// // <div>

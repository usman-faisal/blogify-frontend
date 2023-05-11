import { createSlice } from "@reduxjs/toolkit";
import blogsService from "../services/blogs";

const blogsSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    setBlogs(state, { payload }) {
      return payload;
    },
    appendBlog(state, { payload }) {
      state.push(payload);
    },
    filterBlogs(state, { payload }) {
      return state.filter((blog) => blog.id !== payload);
    },
    updateBlog(state, { payload }) {
      return state.map((blog) =>
        blog.id.toString() === payload.id.toString() ? payload : blog
      );
    },
  },
});

export const { setBlogs, appendBlog, filterBlogs, updateBlog } =
  blogsSlice.actions;

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogsService.getAll();
    dispatch(setBlogs(blogs));
  };
};

export const addBlog = (newBlog) => {
  return async (dispatch) => {
    const blog = await blogsService.create(newBlog);
    dispatch(appendBlog(blog));
  };
};

export const removeBlog = (id) => {
  return async (dispatch) => {
    await blogsService.remove(id);
    dispatch(filterBlogs(id));
  };
};

export const likeBlog = (blog) => {
  return async (dispatch) => {
    const updatedBlog = await blogsService.addLike(blog.id);
    updatedBlog.user = blog.user;
    console.log({ blog });
    console.log({ updatedBlog });
    dispatch(updateBlog(updatedBlog));
  };
};

export const addComment = (blog, comment) => {
  return async (dispatch) => {
    const updatedBlog = await blogsService.addComment(blog.id, comment);
    dispatch(updateBlog(updatedBlog));
  };
};

export default blogsSlice.reducer;

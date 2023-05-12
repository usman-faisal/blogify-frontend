import React from "react";
import { Grid } from "@mantine/core";
import BlogListItem from "./BlogListItem";

const BlogList = ({ blogs }) => {
  return (
    <Grid mt={10}>
      {blogs.map((blog) => (
        <Grid.Col key={blog.id} xs={6} md={4}>
          <BlogListItem blog={blog} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default BlogList;

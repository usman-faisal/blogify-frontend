import React from "react";
import { Grid, Skeleton } from "@mantine/core";
import BlogListItem from "./BlogListItem";

const BlogList = ({ blogs, loading }) => {
  if (loading) {
    return (
      <Grid>
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <Grid.Col key={i} xs={6} md={4}>
              <Skeleton height={100} />
            </Grid.Col>
          ))}
        ;
      </Grid>
    );
  }
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

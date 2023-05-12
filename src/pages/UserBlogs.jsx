import React from "react";

import Navbar from "../components/Navbar/Navbar";
import { Container, Title } from "@mantine/core";
import BlogList from "../components/Blog/BlogList";

const UserBlogs = ({ title, blogs }) => {
  if (!title || !blogs) return null;
  return (
    <>
      <Navbar />
      <Container pb={30} maw="95rem">
        <Title variant={"dimmed"}>{title}</Title>
        <BlogList blogs={blogs} />
      </Container>
    </>
  );
};

export default UserBlogs;

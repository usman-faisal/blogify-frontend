import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Container } from "@mantine/core";
import BlogList from "../components/Blog/BlogList";

const UserDetails = ({ user }) => {
  if (!user) return null;
  console.log(user);
  return (
    <>
      <Navbar />
      <Container maw="95rem">
        <h2>Blogs added by {user.username}</h2>
        <BlogList blogs={user.blogs} />
      </Container>
    </>
  );
};

export default UserDetails;

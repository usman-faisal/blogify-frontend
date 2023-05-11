import React from "react";
import Navbar from "../components/Navbar/Navbar";
import UserList from "../components/User/UserList";
import { Container } from "@mantine/core";

const Users = () => {
  return (
    <>
      <Navbar />
      <Container maw="95rem">
        <UserList />
      </Container>
    </>
  );
};

export default Users;

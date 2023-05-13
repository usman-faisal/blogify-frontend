import React, { useRef } from "react";
import { useSelector } from "react-redux";
import BlogForm from "../components/Blog/BlogForm";
import BlogList from "../components/Blog/BlogList";
import Navbar from "../components/Navbar/Navbar";
import { Button, Collapse, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { bool } from "prop-types";

const Home = () => {
  const user = useSelector((state) => state.user);
  const [opened, { toggle }] = useDisclosure(false);
  const blogs = useSelector((state) => state.blogs);
  return (
    <>
      <Navbar />
      <Container pb={30} maw="95rem">
        {user && (
          <>
            {!opened && (
              <Button className="blogform-button" onClick={() => toggle()}>
                Create New
              </Button>
            )}
            <Collapse in={opened}>
              <BlogForm opened={opened} toggle={toggle} />
            </Collapse>
          </>
        )}
        <BlogList blogs={blogs} loading={blogs.length === 0} />
      </Container>
    </>
  );
};

export default Home;

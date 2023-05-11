import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Toggleable from "../components/utils/Toggleable";
import BlogForm from "../components/Blog/BlogForm";
import BlogList from "../components/Blog/BlogList";
import Navbar from "../components/Navbar/Navbar";
import { Button, Collapse, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Home = () => {
  const user = useSelector((state) => state.user);
  const [opened, { toggle }] = useDisclosure(false);
  const blogs = useSelector((state) => state.blogs);
  return (
    <>
      <Navbar />
      <Container maw="95rem">
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
        <BlogList blogs={blogs} />
      </Container>
    </>
  );
};

export default Home;

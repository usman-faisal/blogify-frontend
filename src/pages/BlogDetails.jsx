import { likeBlog, removeBlog } from "../features/blogsSlice";
import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../features/notificationSlice";
import { useState } from "react";
import CommentList from "../components/Comment/CommentList";
import {
  Avatar,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Text,
  Title,
} from "@mantine/core";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
const BlogDetails = ({ blog }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  if (!blog) return;
  const handleRemoveClick = async () => {
    const confirm = window.confirm(
      `Remove blog ${blog.title} by ${blog.author}`
    );
    if (!confirm) return;
    try {
      await dispatch(removeBlog(blog.id));
      dispatch(
        setNotification(
          `Blog ${blog.title} by ${blog.author} remove`,
          "success"
        )
      );
      navigate("/");
    } catch (err) {
      dispatch(setNotification(err.response.data.error, "error"));
    }
  };

  const handleLikeClick = async () => {
    try {
      await dispatch(likeBlog(blog));
    } catch (err) {
      dispatch(setNotification(err.response.data.error, "error"));
    }
  };

  return (
    <>
      <Navbar />
      <Container pb={30} maw="95rem">
        <Flex direction="column" gap={20}>
          <Title size="h1" maw="40rem">
            {blog.title}
          </Title>

          <Group>
            <Avatar radius="xl" />
            <Flex direction="column">
              <Text size="md">{blog.author}</Text>
              <Text size="sm" color="dimmed">
                {new Date().toDateString()}
              </Text>
            </Flex>
          </Group>
          <Group>
            <span style={{ cursor: "pointer" }} onClick={handleLikeClick}>
              👍
            </span>
            <span>{blog.likes}</span>
            {user && user.username === blog.user?.username && (
              <Button size="xs" color="red" onClick={handleRemoveClick}>
                remove
              </Button>
            )}
          </Group>
        </Flex>
        <Divider mt={20} mb={20} />
        <div style={{ marginBottom: "20px" }}>
          <Text>{blog.content}</Text>
        </div>

        {/*<Divider mt={20} mb={20} />*/}
        <CommentList blog={blog} />
      </Container>
    </>
  );
};

export default BlogDetails;

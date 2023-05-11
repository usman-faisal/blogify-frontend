import React from "react";
import { addBlog } from "../../features/blogsSlice";
import { setNotification } from "../../features/notificationSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Flex, Group, Input, Textarea } from "@mantine/core";

const BlogForm = ({ toggle, opened }) => {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [content, setContent] = React.useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const createBlog = async (payload) => {
    try {
      dispatch(addBlog(payload));
      dispatch(
        setNotification(
          `a new blog ${payload.title} by ${payload.author} added`,
          "success"
        )
      );
      toggle();
    } catch (error) {
      dispatch(setNotification(error.response.data.error, "error"));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createBlog({ title, author, content });
    setTitle("");
    setAuthor("");
    setContent("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={10}>
        <Input.Wrapper label="Title">
          <Input
            required
            value={title}
            placeholder="Interesting Facts About Space"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Input.Wrapper>
        <Input.Wrapper label="Author">
          <Input
            required
            value={author}
            placeholder={user?.username || "Author"}
            id="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Input.Wrapper>
        <Input.Wrapper label="Content">
          <Textarea
            required
            minLength={50}
            value={content}
            placeholder="content"
            onChange={(e) => setContent(e.target.value)}
          />
        </Input.Wrapper>
        <Group>
          {opened && (
            <Button onClick={() => toggle()} color="red">
              Close
            </Button>
          )}
          <Button
            className="blogform-button"
            style={{ alignSelf: "start" }}
            type="submit"
            id="create-btn"
          >
            Create
          </Button>
        </Group>
      </Flex>
    </form>
  );
};

export default BlogForm;

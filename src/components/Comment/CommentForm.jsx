import React, { useState } from "react";
import { Button, Flex, Input } from "@mantine/core";
import { addComment } from "../../features/blogsSlice";
import { useDispatch } from "react-redux";

const CommentForm = ({ blog }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    setComment("");
    await dispatch(addComment(blog, comment));
  }
  return (
    <form onSubmit={handleSubmit}>
      <Flex gap={5}>
        <Input
          placeholder="Add comment"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button type="submit">add</Button>
      </Flex>
    </form>
  );
};

export default CommentForm;

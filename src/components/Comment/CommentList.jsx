import React, { useState } from "react";
import { addComment } from "../../features/blogsSlice";
import { useDispatch } from "react-redux";
import { Button, Flex, Input } from "@mantine/core";
import Comment from "./Comment";

const CommentList = ({ blog }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  return (
    <>
      <Flex gap={5}>
        <Input
          placeholder="Add comment"
          type="text"
          onChange={(e) => setComment(e.target.value)}
        />
        <Button onClick={() => dispatch(addComment(blog, comment))}>add</Button>
      </Flex>
      <Flex mt={20} gap={10} direction="column">
        {blog.comments.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
      </Flex>
    </>
  );
};

export default CommentList;

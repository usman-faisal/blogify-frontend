import React, { useState } from "react";
import { Button, Drawer, Flex } from "@mantine/core";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentList = ({ blog, opened, close, open }) => {
  return (
    <>
      <Drawer opened={opened} onClose={close} title="Comments">
        <CommentForm blog={blog} />
        <Flex mt={20} gap={10} direction="column">
          {blog.comments.map((comment, index) => (
            <Comment comment={comment} key={index} />
          ))}
        </Flex>
      </Drawer>
      <Button onClick={() => open()} variant="default">
        Add comment
      </Button>
    </>
  );
};

export default CommentList;

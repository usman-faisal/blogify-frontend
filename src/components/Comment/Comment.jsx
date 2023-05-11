import React from "react";
import { Avatar, Group, Paper, Text } from "@mantine/core";

const Comment = ({ comment }) => {
  return (
    <Paper maw={400} p={10} withBorder radius="md">
      <Group>
        <Avatar radius="xl" />
        <Text style={{ hyphens: "auto" }} maw={300} size="sm">
          {comment}
        </Text>
      </Group>
    </Paper>
  );
};

export default Comment;

import React from "react";
import { Button, Card, Group, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const BlogListItem = ({ blog }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text size="xl">{blog.title}</Text>
      <Text size="sm" color="dimmed">
        {blog.content?.substring(0, 15) + "...."}
      </Text>
      <Link to={`/blogs/${blog.id}`}>
        <Button variant="light" color="blue" mt="md" radius="md">
          Read Now
        </Button>
      </Link>
    </Card>
  );
};

export default BlogListItem;

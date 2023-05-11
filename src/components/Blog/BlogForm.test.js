import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import BlogForm from "./BlogForm";

test("<BlogForm /> updates parent content and calls onSubmit", async () => {
  const createBlog = jest.fn();
  const user = userEvent.setup();
  render(<BlogForm createBlog={createBlog} />);
  const inputTitle = screen.getByPlaceholderText("title");
  const inputAuthor = screen.getByPlaceholderText("author");
  const inputUrl = screen.getByPlaceholderText("url");
  const button = screen.getByText("create");
  await user.type(inputTitle, "this is a test title");
  await user.type(inputAuthor, "this is a test author");
  await user.type(inputUrl, "this is a test url");
  await user.click(button);
  expect(createBlog.mock.calls).toHaveLength(1);
  expect(createBlog.mock.calls[0][0].title).toBe("this is a test title");
  expect(createBlog.mock.calls[0][0].author).toBe("this is a test author");
  expect(createBlog.mock.calls[0][0].url).toBe("this is a test url");
});

// NPM Packages
import { render, screen } from "@testing-library/react";

// Project files
import TodoList from "./TodoList";

test("Expected to show no pending items text when the list is empty.", () => {
  // Arrange
  const items = [];
  render(<TodoList items={items} />);

  // Act
  const textElement = screen.getByText(/no pending items to show/i);

  // Assert
  expect(textElement).toBeInTheDocument(/no pending items to show/i);
});

test("Expected to show items when there are items in the list.", () => {
  // Arrange
  const items = [
    { id: 1, name: "read", isDone: false },
    { id: 2, name: "study", isDone: false },
  ];
  render(<TodoList items={items} />);

  // Act
  const textElement = screen.getByText(/read/i, /study/i);

  // Assert
  expect(textElement).toBeInTheDocument(/read/i, /study/i);
});

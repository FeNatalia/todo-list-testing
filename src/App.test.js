// NPM Packages
import { render, screen } from "@testing-library/react";

// Project files
import App from "./App";

test("Expected to show the instructions screen if the todo list is empty", () => {
  // Arrange
  const data = [];

  Storage.prototype.getItem = jest.fn(() => JSON.stringify(data));

  render(<App />);

  // Act
  const textElement = screen.getByText(/welcome to todoapp/i);
  expect(textElement).toBeInTheDocument();
});

test("Expected to show the normal screen if the todo list had an item/items", () => {
  // Arrange
  const item = {
    id: 0,
    name: "clean my desk",
    isDone: false,
  };
  const data = [item];

  Storage.prototype.getItem = jest.fn(() => JSON.stringify(data));

  render(<App />);

  // Act
  const textElement = screen.getByText(/my todo list/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});

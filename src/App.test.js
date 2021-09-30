import { render, screen } from "@testing-library/react";
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

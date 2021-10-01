// NPM Packages
import { render, screen } from "@testing-library/react";

// Project files
import Instructions from "./Instructions";

test("Expected to have a button for adding a todo item to the list", () => {
  // Arrange
  render(<Instructions />);

  // Assert
  const buttonElement = screen.getByText(/add item/i);

  // Act
  expect(buttonElement).toBeInTheDocument();
});

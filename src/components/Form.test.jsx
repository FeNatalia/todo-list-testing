// NPM Packages
import { render, screen } from "@testing-library/react";

// Project files
import Form from "./Form";

test("Expected to show Add item text", () => {
  // Arrange
  render(<Form />);

  // Act
  const buttonElement = screen.getByText(/add item/i);

  // Assert
  expect(buttonElement).toBeInTheDocument(/add item/i);
});

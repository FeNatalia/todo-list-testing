// NPM Packages
import { render, screen, fireEvent } from "@testing-library/react";

// Project files
import ButtonAddItem from "./ButtonAddItem";

test("Expected to show Add item text when toggleForm is false.", () => {
  // Arrange
  const method = jest.fn();
  const toggleForm = false;
  render(<ButtonAddItem onClick={method} toggleForm={toggleForm} />);

  // Act
  const buttonElement = screen.getByText(/add item/i);

  // Assert
  expect(buttonElement).toBeInTheDocument(/add item/i);
});

test("Expected to show Hide form text when toggleForm is true.", () => {
  // Arrange
  const method = jest.fn();
  const toggleForm = true;
  render(<ButtonAddItem onClick={method} toggleForm={toggleForm} />);

  // Act
  const buttonElement = screen.getByText(/add item/i);
  fireEvent.click(buttonElement);

  // Assert
  expect(buttonElement).toBeInTheDocument(/hide form/i);
});

test("Expected to show Form (saying 'Add a new todo') when toggleForm is true.", () => {
  // Arrange
  const method = jest.fn();
  const toggleForm = true;
  render(<ButtonAddItem onClick={method} toggleForm={toggleForm} />);

  // Act
  const buttonElement = screen.getByText(/add item/i);
  fireEvent.click(buttonElement);
  const textElement = screen.getByText(/add a new todo/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});
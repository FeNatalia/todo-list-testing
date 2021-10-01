// NPM Packages
import { render, screen, fireEvent } from "@testing-library/react";

// Project files
import ButtonToggle from "./ButtonToggle";

test("Expected to fire an event when pressed", () => {
  // Arrange
  const method = jest.fn();
  const toggleCompletedList = false;
  render(
    <ButtonToggle onClick={method} toggleCompletedList={toggleCompletedList} />
  );

  // Act
  const buttonElement = screen.getByText(/view completed todos/i);

  fireEvent.click(buttonElement);

  // Assert
  expect(method).toHaveBeenCalledTimes(1);
});

test("Expected to show View completed todos text when toggleCompletedList is false.", () => {
  // Arrange
  const toggleCompletedList = false;
  render(<ButtonToggle toggleCompletedList={toggleCompletedList} />);

  // Act
  const textElement = screen.getByText(/view completed todos/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});

test("Expected to show Hide completed todos text when toggleCompletedList is true.", () => {
  // Arrange
  const toggleCompletedList = true;
  render(<ButtonToggle toggleCompletedList={toggleCompletedList} />);

  // Act
  const textElement = screen.getByText(/hide completed todos/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});

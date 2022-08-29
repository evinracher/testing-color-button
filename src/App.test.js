import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has the correct initial color", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });
  // expect the background color to be red
  expect(button).toHaveStyle({
    backgroundColor: "red",
  });
  // click button
  fireEvent.click(button);
  // expect the background color to be blue
  expect(button).toHaveStyle({
    backgroundColor: "blue",
  });

  // expect the button text to be 'Change to red'
  expect(button.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox");
  // check that button starts out enabled
  expect(button).toBeEnabled();

  // check that the checkbox starts out unchecked
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button", () => {
  render(<App />);
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);
  expect(button).not.toBeEnabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

import { render, screen, fireEvent } from "@testing-library/react";
import App, { addSpaceBeforeCamel } from "./App";

test("button has the correct initial color", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  // expect the background color to be MediumVioletRed
  expect(button).toHaveStyle({
    backgroundColor: "MediumVioletRed",
  });
  // click button
  fireEvent.click(button);
  // expect the background color to be MidnightBlue
  expect(button).toHaveStyle({
    backgroundColor: "MidnightBlue",
  });

  // expect the button text to be 'Change to Medium Violet Red'
  expect(button).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox");
  // check that button starts out enabled
  expect(button).toBeEnabled();

  // check that the checkbox starts out unchecked
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button", () => {
  render(<App />);
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

describe("spaces before camel-case capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(addSpaceBeforeCamel("red")).toBe("red");
  });
  test("works for one inner capital letters", () => {
    expect(addSpaceBeforeCamel("MidnightBlue")).toBe("Midnight Blue");
  });
  test("works for multiple inner capital letters", () => {
    expect(addSpaceBeforeCamel("MediumVioletRed")).toBe("Medium Violet Red");
  });
});

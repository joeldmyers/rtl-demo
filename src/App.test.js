import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders a simple form with all required information", async () => {
  render(<App />);

  userEvent.type(screen.getByLabelText("First name:"), "Jane");

  userEvent.type(screen.getByLabelText("Last name:"), "Doe");

  userEvent.type(screen.getByLabelText("Email:"), "janedoe@foo.com");

  userEvent.type(screen.getByLabelText("Notes:"), "Hi there!");

  userEvent.click(screen.getByText("Submit"));

  expect(screen.getByText("Success!")).toBeVisible();
});

import { mount } from "enzyme";
import App from "./App";

test("renders a simple form with all required information", async () => {
  const component = mount(<App />);

  const firstNameInput = component.find("input").at(0);
  firstNameInput.simulate("change", { target: { value: "Jane" } });

  const lastNameInput = component.find("input").at(1);
  lastNameInput.simulate("change", { target: { value: "Doe" } });

  const emailInput = component.find("input").at(2);
  emailInput.simulate("change", { target: { value: "janedoe@foo.com" } });

  const noteInput = component.find("input").at(3);
  noteInput.simulate("change", { target: { value: "Hi there!" } });

  component.find("SubmitButton").simulate("click");

  expect(component.find("SuccessMessage")).toHaveLength(1);
});

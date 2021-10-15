import { createElement } from "./elements.js";

// Declare function to create the form
export function createFormComponent(onSubmit) {
  // Create first radio button with label
  const radio1 = createElement("input", {
    type: "radio",
    name: "drink",
    value: "Coffee ☕",
    id: "Coffee",
  });

  const label1 = createElement("label", {
    for: "Coffee",
    textContent: "Coffee",
  });

  // Create second radio button with label
  const radio2 = createElement("input", {
    type: "radio",
    name: "drink",
    value: "Tea 🍵",
    id: "Tea",
  });

  const label2 = createElement("label", {
    for: "Tea",
    textContent: "Tea",
  });

  // Create third radio button with label
  const radio3 = createElement("input", {
    type: "radio",
    name: "drink",
    value: "Wodka 🍸",
    id: "Wodka",
  });

  const label3 = createElement("label", {
    for: "Wodka",
    textContent: "Wodka",
  });

  // Create container for radio buttons
  const radioButtons = createElement("div", { className: "radioButtons" }, [
    radio1,
    label1,
    radio2,
    label2,
    radio3,
    label3,
  ]);

  // Create input text field
  const inputField = createElement("input", {
    type: "text",
    className: "textField",
    placeholder: "Enter your name",
  });

  // Create submit button
  const submitButton = createElement("button", {
    type: "submit",
    className: "button",
    textContent: "Submit",
  });

  // Create form with radio buttons, text field and button
  const formComponent = createElement(
    "form",
    {
      className: "form",
      // Declare function onSubmit
      onsubmit: function (event) {
        event.preventDefault;
        onSubmit(inputField.value, formComponent.elements["drink"].value);
      },
    },
    [radioButtons, inputField, submitButton]
  );

  return formComponent;
}

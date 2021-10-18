import { createElement } from "./elements.js";

// Declare function to create the form
export function createFormComponent(onSubmit) {
  // Create Coffee radio button with label
  const radioCoffee = createElement("input", {
    type: "radio",
    name: "drink",
    value: "Coffee ☕",
    id: "Coffee",
  });

  const labelCoffee = createElement("label", {
    for: "Coffee",
    textContent: "Coffee",
  });

  // Create Tea radio button with label
  const radioTea = createElement("input", {
    type: "radio",
    name: "drink",
    value: "Tea 🍵",
    id: "Tea",
  });

  const labelTea = createElement("label", {
    for: "Tea",
    textContent: "Tea",
  });

  // Create Wodka radio button with label
  const radioWodka = createElement("input", {
    type: "radio",
    name: "drink",
    value: "Wodka 🍸",
    id: "Wodka",
  });

  const labelWodka = createElement("label", {
    for: "Wodka",
    textContent: "Wodka",
  });

  // Create container for radio buttons
  const radioButtons = createElement("div", { className: "radioButtons" }, [
    radioCoffee,
    labelCoffee,
    radioTea,
    labelTea,
    radioWodka,
    labelWodka,
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

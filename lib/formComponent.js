import { createElement } from "./elements.js";

export function createFormComponent(onSubmit) {
  // const checkboxElement = createElement("input", { type: "checkbox" });

  const inputField = createElement("input", {
    type: "text",
    className: "textField",
    placeholder: "Enter Your name!",
  });

  const submitButton = createElement("button", {
    type: "submit",
    className: "button",
    textContent: "Submit",
  });

  const formComponent = createElement(
    "form",
    {
      className: "form",
      onsubmit: function (event) {
        event.preventDefault;
        onSubmit(inputField.value);
      },
    },
    [inputField, submitButton]
  );

  return formComponent;
}

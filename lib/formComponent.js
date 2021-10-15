import { createElement } from "./elements.js";

export function createFormComponent(onSubmit) {
  // const checkboxElement = createElement("input", { type: "checkbox" });

  const inputField = createElement("input", {
    type: "text",
    className: "textField",
    placeholder: "Enter Your name!",
  });

  const radio1 = createElement("input", {
    type: "radio",
    name: "drink",
    value: "Coffee",
  });

  const label1 = createElement("label", {
    for: "Coffee",
    textContent: "Coffee",
  });

  const radioButtons = createElement("div", { className: "radioButtons" }, [
    radio1,
    label1,
  ]);

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
    [radioButtons, inputField, submitButton]
  );

  return formComponent;
}

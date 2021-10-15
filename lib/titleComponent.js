import { createElement } from "./elements.js";

export function createTitleComponent() {
  const titleElement = createElement("h1", {
    textContent: "Choose Your favorite!",
    className: "title",
  });
  return titleElement;
}

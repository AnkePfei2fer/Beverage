import { createElement } from "./elements.js";

export function createTitleComponent() {
  const titleElement = createElement(
    "h1",
    {
      className: "title",
    },
    ["Choose your favorite!"]
  );
  return titleElement;
}

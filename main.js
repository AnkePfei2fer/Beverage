import { createTitleComponent } from "./lib/titleComponent.js";
import { createFormComponent } from "./lib/formComponent.js";
import { createElement } from "./lib/elements.js";

function createApp() {
  const appPage = document.querySelector("#app");

  const titleComponent = createTitleComponent();
  const formComponent = createFormComponent(popup);

  function popup(name, drink) {
    appPage.removeChild(titleComponent);
    appPage.removeChild(formComponent);

    const footer = createElement("footer", { className: "footer" }, [
      "Photo by Patrick Tomasso on Unsplash",
    ]);

    const outputElement = createElement("div", { className: "output" }, [
      `Hi ${name}, here's your ${drink}. Enjoy!`,
      footer,
    ]);

    appPage.append(outputElement);
  }

  appPage.append(titleComponent, formComponent);
}

createApp();

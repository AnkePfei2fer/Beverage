import { createTitleComponent } from "./lib/titleComponent.js";
import { createFormComponent } from "./lib/formComponent.js";
import { createElement } from "./lib/elements.js";

const appPage = document.querySelector("#app");

const titleComponent = createTitleComponent();
const formComponent = createFormComponent(popup);

// function popup(name, drink) {
//   alert(`Hi ${name}, here's your ${drink}. Enjoy!`);
// }

function popup(name, drink) {
  appPage.removeChild(formComponent);
  appPage.removeChild(titleComponent);
  const outputElement = createElement("div", { className: "output" }, [
    `Hi ${name}, here's your ${drink}. Enjoy!`,
  ]);
  appPage.append(outputElement);
}

appPage.append(titleComponent);
appPage.append(formComponent);

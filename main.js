import { createTitleComponent } from "./lib/titleComponent.js";
import { createFormComponent } from "./lib/formComponent.js";

const appPage = document.querySelector("#app");

const titleComponent = createTitleComponent();
const formComponent = createFormComponent(popup);

function popup(name, drink) {
  alert(`Hi ${name}, here is your ${drink}. Enjoy!`);
}

appPage.append(titleComponent);
appPage.append(formComponent);

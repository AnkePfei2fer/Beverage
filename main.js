import { createTitleComponent } from "./lib/titleComponent.js";
import { createFormComponent } from "./lib/formComponent.js";

const appPage = document.querySelector("#app");

const titleComponent = createTitleComponent();
const formComponent = createFormComponent(function (name) {
  alert(`Hi ${name}, here is Your drink.`);
});

appPage.append(titleComponent);
appPage.append(formComponent);

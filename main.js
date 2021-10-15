import { createTitleComponent } from "./lib/titleComponent.js";
import { createFormComponent } from "./lib/formComponent.js";

const appPage = document.querySelector("#app");

const titleComponent = createTitleComponent();
const formComponent = createFormComponent(function (drink) {
  alert("Hi, here is Your ${drink}");
});

appPage.append(titleComponent);
appPage.append(formComponent);

import { createTitleComponent } from "./lib/titleComponent.js";

const appPage = document.querySelector("#app");
const titleComponent = createTitleComponent();
appPage.append(titleComponent);

import { model } from "./model";
import "./styles/main.css";
import { Site } from "./classes/site";

const site = new Site("#site");

// model.forEach((block) => {

//   site.insertAdjacentHTML("beforeend", block.toHTML());
// });

site.render(model);

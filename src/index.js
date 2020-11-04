import { model } from "./model";
// import { templates } from "./templates";
import "./styles/main.css";

const $site = document.querySelector("#site");

// console.log(templates["title"]({ value: "text" }));

model.forEach((block) => {
  // console.log(block.toHTML());

  // const toHTML = templates[block.type];

  // $site.insertAdjacentHTML("beforeend", toHTML(block));
  $site.insertAdjacentHTML("beforeend", block.toHTML());
});

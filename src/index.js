import { model } from "./model";
import { templates } from "./templates";
import "./styles/main.css";

const $site = document.querySelector("#site");

// console.log(templates["title"]({ value: "text" }));

model.forEach((block) => {
  // console.log(block);
  // let html = "";
  // if (block.type === "title") {
  //   html = title(block);
  // } else if (block.type === "text") {
  //   html = text(block);
  // } else if (block.type === "columns") {
  //   html = columns(block);
  // } else if (block.type === "image") {
  //   html = image(block);
  // }
  // console.log("html: ", html);

  const toHTML = templates[block.type];

  $site.insertAdjacentHTML("beforeend", toHTML(block));
});

import image from "./assets/image.png";

export const model = [
  {
    type: "title",
    value: "Hello World from JS!!!",
    options: {
      tag: "h2",
    },
  },
  { type: "text", value: "Some text" },
  {
    type: "columns",
    value: ["1111111", "2222222", "3333333", "444444444", "5555555"],
  },
  { type: "image", value: image },
];

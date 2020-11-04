import image from "./assets/image.png";

export const model = [
  {
    type: "title",
    value: "Конструктор сайтов на чистом JavaScript",
    options: {
      tag: "h2",
      // styles: "background: linear-gradient(to right, #ff0099, #493240);color: #fff; text-align: center; padding: 1.5rem",
      styles: {
        background: "linear-gradient(to right, #ff0099, #493240)",
        color: "#fff",
        "text-align": "center",
        padding: "1.5rem",
      },
    },
  },
  { type: "text", value: "Some text" },
  {
    type: "columns",
    value: ["1111111", "2222222", "3333333", "444444444", "5555555"],
  },
  { type: "image", value: image },
];

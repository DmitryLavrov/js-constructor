import image from "./assets/image1.jpg";
import {
  TitleBlock,
  TextBlock,
  ColumnsBlock,
  ImageBlock,
} from "./classes/blocks";

const text = `
Это динамический сайт.<br> 
Чтобы добавить новый контент, 
следует заполнить форму в левой колонке: <br>
- выбрать тип блока,<br> 
- в поле <b>value</b> ввести содержание <br>
- в поле <b>styles</b> ввести css-стили.<br> 
Нажать кнопку <b>Добавить</b>.<br>
Ниже появится новый блок.<br><br>
См. примеры ниже
`;

export const model = [
  new TitleBlock("Конструктор сайтов на чистом JavaScript", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),

  new TextBlock(text, {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "normal",
    },
  }),

  new ColumnsBlock(
    [
      "<b>Value:</b><br><i>Заголовок</i><br><br><b>Styles:</b><br><i>color:white; background-color:red; text-align:center</i>",
      "<b>Value:</b><br><i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quisquam deserunt itaque tempore debitis beatae incidunt officia sunt, iusto ratione enim nemo non voluptatibus similique odio obcaecati optio, eligendi eaque! Saepe iusto porro accusantium eaque nisi odit sit expedita laborum! Voluptates vel quia porro deserunt omnis voluptatem hic sed culpa nihil facilis. Totam aut illo ea non, labore voluptatibus suscipit repellendus. Totam tempora facere tenetur obcaecati iste nesciunt alias dolor sapiente provident laudantium, quo dolorum nam labore dolores, eaque iure doloremque aperiam nisi, reprehenderit sequi minus magnam? Quasi quod beatae placeat atque veniam libero inventore. Iusto atque dolorum iste quas.</i><br><br><b>Styles:</b><br><i>color:white; background-color:navy; padding:1rem;</i>",
      "<b>Value:</b><br><i>What is CSS? <br>CSS stands for Cascading Style Sheets. <br>CSS describes how HTML elements are to be displayed on screen, paper, or in other media. <br>CSS saves a lot of work. It can control the layout of multiple web pages all at once. <br>External stylesheets are stored in CSS files</i><br><br><b>Styles:</b><br><i>background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%); width:50%; min-height: 400px; margin: 2rem auto; padding: 2rem;</i>",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "normal",
      },
    }
  ),

  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
      "object-fit": "cover",
    },
    alt: "Это картинка",
  }),
];

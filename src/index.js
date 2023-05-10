import "./scss/index.scss";
const allImages = require.context(
  "./img/",
  true,
  /\.(png|jpe?g|gif|svg|webp)$/
);
import { displayMenu } from "./display-menu";
displayMenu();

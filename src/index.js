import "./scss/index.scss";
const menuItemsImages = require.context(
  "./img/menu-items/",
  true,
  /\.(png|jpe?g|gif|svg|webp)$/
);
import { displayMenu } from "./display-menu";
displayMenu();

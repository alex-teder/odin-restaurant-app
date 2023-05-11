import "./scss/index.scss";
const allImages = require.context(
  "./img/",
  true,
  /\.(png|jpe?g|gif|svg|webp)$/
);
const allFonts = require.context("./fonts/", true, /\.(woff2|ttf)$/);
import { displayMenu } from "./display-menu";
import { displayHomepage } from "./display-homepage";
import { displayContacts } from "./display-contacts";

// displayHomepage();
// displayMenu();
displayContacts();

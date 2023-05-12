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

let currentPage = 1;
displayHomepage();

function buttonHandler(event) {
  if (event.target.classList.contains("button")) {
    if (event.target.id === "home-btn" && currentPage !== 1) {
      currentPage = 1;
      displayHomepage();
    } else if (
      (event.target.id === "menu-btn" || event.target.id === "browse-menu") &&
      currentPage !== 2
    ) {
      currentPage = 2;
      displayMenu();
    } else if (event.target.id === "contact-btn" && currentPage !== 3) {
      currentPage = 3;
      displayContacts();
    }
  }
}

document.body.addEventListener("click", buttonHandler);

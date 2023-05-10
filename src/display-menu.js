import { pizzas, jujikas, desserts } from "./menu-items";

export function displayMenu() {
  const main = document.createElement("main");
  main.classList.add("menu");
  main.innerHTML = `
    <section class="menu__section menu__section--pizza">
      <h2 class="menu__title">PIZZA</h2>
      <div class="menu__container">
          
      </div>
    </section>
    <section class="menu__section menu__section--jujika">
      <h2 class="menu__title">SANDWICHES</h2>
      <div class="menu__container">
          
      </div>
    </section>
    <section class="menu__section menu__section--dessert">
      <h2 class="menu__title">DESSERT</h2>
      <div class="menu__container">
      
      </div>
    </section>
  `;
  document.querySelector("#app").appendChild(main);

  const pizzaContainer = document.querySelector(
    ".menu__section--pizza > .menu__container"
  );
  const jujikaContainer = document.querySelector(
    ".menu__section--jujika > .menu__container"
  );
  const dessertContainer = document.querySelector(
    ".menu__section--dessert > .menu__container"
  );

  function cardHTML(item) {
    return `
    <div class="card">
      <div class="card__image-container">
        <img src="./${item.pic}.webp" alt="" class="card__image">
      </div>
      <div class="card__content">
        <h4 class="card__title"><span class="geo">${item.nameGeo}</span> - ${item.nameEng}</h4>
        <p class="card__price">${item.price} GEL</p>
        <p class="card__text"><span class="geo">${item.descriptionGeo}</span></p>
      </div>
    </div>
  `;
  }

  pizzas.forEach((item) => {
    pizzaContainer.innerHTML += cardHTML(item);
  });
  jujikas.forEach((item) => {
    jujikaContainer.innerHTML += cardHTML(item);
  });
  desserts.forEach((item) => {
    dessertContainer.innerHTML += cardHTML(item);
  });
}

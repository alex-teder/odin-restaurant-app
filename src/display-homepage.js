export function displayHomepage() {
  document.querySelector("#app").innerHTML = "";
  const main = document.createElement("main");
  main.classList.add("homepage");
  main.innerHTML = `
  <div class="homepage__container">
    <div class="homepage__content">
      <h1 class="homepage__title">PAZZA<br>პაცცა</h1>
      <p class="homepage__subtext">Try the best pizza in Tbilisi</p>
      <button class="button homepage__button" id="browse-menu">Browse menu</button>
      <p class="homepage__address">10, P. Ingorokva, Tbilisi<br>18, I. Gagarini, Tbilisi</p>
    </div>
    <picture class="homepage__image-container">
      <source media="(min-width: 600px)" srcset="./pizza-pic-new.jpeg" class="homepage__image--large">
      <img src="./pizza-pic-vertical.jpg" alt="" class="homepage__image--small">
    </picture>
  </div>
  `;

  document.querySelector("#app").appendChild(main);
}

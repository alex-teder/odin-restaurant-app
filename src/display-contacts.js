export function displayContacts() {
  document.querySelector("#app").innerHTML = "";
  const main = document.createElement("main");
  main.classList.add("contacts");
  main.innerHTML = `
  <div class="contacts__container">
    <h2 class="contacts__title">CONTACT US</h2>
    <div class="contacts__content">
      <p class="contacts__text contacts__text--bold">პაცცა • PAZZA</p>
      <p class="contacts__text">032 255 05 00</p>
      <p class="contacts__text">hello@pazza.ge</p>
      <p class="contacts__text">10, P. Ingorokva, Tbilisi</p>
      <p class="contacts__text">18, I. Gagarini, Tbilisi</p>
    </div>
    <div class="contacts__links">
      <p class="contacts__link contacts__text"><img height="20px" width="20px" src="./icon-facebook.svg"
          alt="facebook logo" class="contacts__social-logo"><a
          href="https://www.facebook.com/pazzageorgia">facebook.com/pazzageorgia</a></p>
      <p class="contacts__link contacts__text"><img height="20px" width="20px" src="./icon-instagram.svg"
          alt="instagram logo" class="contacts__social-logo"><a
          href="https://www.instagram.com/pazzageo/">instagram.com/pazzageo</a>
      </p>
    </div>
  </div>
  `;

  document.querySelector("#app").appendChild(main);
}

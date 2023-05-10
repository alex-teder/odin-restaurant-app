export const pizzas = [];
export const jujikas = [];
export const desserts = [];

function createMenuItem(nameEng, nameGeo, type, price) {
  let pic = "";
  const setPic = function (url) {
    this.pic = url;
  };
  let descriptionEng = "";
  let descriptionGeo = "";
  const setDescriptionEng = function (desc) {
    this.descriptionEng = desc;
  };
  const setDescriptionGeo = function (desc) {
    this.descriptionGeo = desc;
  };
  const item = {
    nameEng,
    nameGeo,
    type,
    price,
    pic,
    setPic,
    descriptionEng,
    descriptionGeo,
    setDescriptionEng,
    setDescriptionGeo,
  };
  return item;
}

function addItemToExport(item) {
  if (item.type === "pizza") {
    pizzas.push(item);
  } else if (item.type === "jujika") {
    jujikas.push(item);
  } else if (item.type === "dessert") {
    desserts.push(item);
  }
}

const margherita = createMenuItem("Margherita", "მარგერიტა", "pizza", 23);
margherita.setPic("src/img/menu-items/margherita.webp");
margherita.setDescriptionEng("Pizza Margherita.");
margherita.setDescriptionGeo(
  "მომწვარი, ჰაეროვანი ცომი, პომიდვრის სოუსი და 100% ნამდვილი მოცარელა, ეკონომიის გარეშე!"
);
addItemToExport(margherita);

const prosciutto = createMenuItem("Prosciutto", "პროშუტო", "pizza", 28);
prosciutto.setPic("src/img/menu-items/prosciutto.webp");
prosciutto.setDescriptionGeo(
  "მომწვარი, ჰაეროვანი ცომი, პომიდვრის სოუსი, ნამდვილი მოცარელა და „პროშუტო კრუდო“!"
);
addItemToExport(prosciutto);

const salame = createMenuItem("Salame", "სალიამი", "pizza", 28);
salame.setPic("src/img/menu-items/prosciutto.webp");
salame.setDescriptionGeo(
  "მომწვარი, ჰაეროვანი ცომი, პომიდვრის სოუსი, მოცარელა და სალიამი ნაპოლი!"
);
addItemToExport(salame);

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
  let isNew = false;
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
    isNew,
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
margherita.setPic("margherita");
margherita.setDescriptionEng("Pizza Margherita.");
margherita.setDescriptionGeo(
  "მომწვარი, ჰაეროვანი ცომი, პომიდვრის სოუსი და 100% ნამდვილი მოცარელა, ეკონომიის გარეშე!"
);
addItemToExport(margherita);

const prosciutto = createMenuItem("Prosciutto", "პროშუტო", "pizza", 28);
prosciutto.setPic("prosciutto");
prosciutto.setDescriptionGeo(
  "მომწვარი, ჰაეროვანი ცომი, პომიდვრის სოუსი, ნამდვილი მოცარელა და „პროშუტო კრუდო“!"
);
addItemToExport(prosciutto);

const salame = createMenuItem("Salame", "სალიამი", "pizza", 28);
salame.setPic("salame");
salame.setDescriptionGeo(
  "მომწვარი, ჰაეროვანი ცომი, პომიდვრის სოუსი, მოცარელა და სალიამი ნაპოლი!"
);
addItemToExport(salame);

const panciatella = createMenuItem("Panciatella", "პანჩატელა", "pizza", 28);
panciatella.setPic("panciatella");
panciatella.isNew = true;
panciatella.setDescriptionGeo(
  "მომწვარი, ჰაეროვანი ცომი, პომიდვრის სოუსი,შებოლილი პანჩეტა (ბეკონი), დაფქული ყავა, ყველი სტრაჩატელა, რუკოლა."
);
addItemToExport(panciatella);

const blue = createMenuItem("Blue", "ობიანი", "pizza", 28);
blue.setPic("blue");
blue.setDescriptionGeo(
  `არანაირი ოთხი ყველი, იგივე გემო და ეფექტი, თუმცა მხოლოდ ნამდვილი მოცარელა და</span> Blue Cheese! <span class="geo">მომწვარი, ჰაეროვანი ცომით.`
);
addItemToExport(blue);

const bianco = createMenuItem("Bianco", "ბიანკო", "pizza", 28);
bianco.setPic("bianco");
bianco.setDescriptionGeo(
  "მომწვარი, ჰაეროვანი ცომი, ტრუფელის სოუსი, ნამდვილი მოცარელა და ბევრი ქამა სოკო"
);
addItemToExport(bianco);

const bolognese = createMenuItem("Bolognese", "Ბოლონიური", "pizza", 28);
bolognese.setPic("bolognese");
bolognese.setDescriptionGeo(
  "მომწვარი, ჰაეროვანი ცომი, ქართულ საფერავზე დამზადებული, ნამდვილი და კლასიკური ბოლონიეზე!"
);
addItemToExport(bolognese);

const tuna = createMenuItem("Tuna", "თინუსი", "pizza", 28);
tuna.setPic("tuna");
tuna.setDescriptionGeo(
  "მომწვარი, ჰაეროვანი ცომი, პომიდვრის სოუსი, ნამდვილი მოცარელა, ბევრი თინუსი და დამარინადებული წითელი ხახვი"
);
addItemToExport(tuna);

const jujikaSalame = createMenuItem(
  "<br>Jujika with salame",
  "სალიამის ჯუჯიკა",
  "jujika",
  19
);
jujikaSalame.setPic("jujika-salame");
jujikaSalame.setDescriptionGeo(
  "ზეთით და ორეგანოთი გამომცხვარი თხელი, თბილი და ხრაჭუნა ცომი, 100% კრემ-ყველი, ჩვენ მიერ მომზადებული პომიდვრის ტკბილ-ცხარე ჯემი, რუკოლა და სალიამი."
);
addItemToExport(jujikaSalame);

const jujikaProsciutto = createMenuItem(
  "<br>Jujika with prosciutto",
  "პროშუტოს ჯუჯიკა",
  "jujika",
  19
);
jujikaProsciutto.setPic("jujika-prosciutto");
jujikaProsciutto.setDescriptionGeo(
  "ზეთში და ორეგანოში გამომცხვარი თხელი, თბილი და ხრაშუნა ცომი, კრემ-ყველი, ტკბილ-ცხარე პომიდვრის ჯემი, რუკოლა და პროშუტო კრუდო."
);
addItemToExport(jujikaProsciutto);

const jujikaBlue = createMenuItem(
  "<br>Jujika with blue cheese and walnuts",
  "ობიანი ყველის და ნიგვზის ჯუჯიკა",
  "jujika",
  19
);
jujikaBlue.setPic("jujika-blue");
jujikaBlue.setDescriptionGeo(
  "ზეთში და ორეგანოში გამომცხვარი თხელი, თბილი და ხრაშუნა ცომი, კრემ-ყველი, ტკბილ-ცხარე პომიდვრის ჯემი, რუკოლა, ლურჯი ყველი და მოხალული ნიგოზი."
);
addItemToExport(jujikaBlue);

const jujikaSalmon = createMenuItem(
  "<br>Jujika with smoked salmon",
  "შებოლილი ორაგულის ჯუჯიკა",
  "jujika",
  25
);
jujikaSalmon.setPic("jujika-salmon");
jujikaSalmon.isNew = true;
jujikaSalmon.setDescriptionGeo(
  "ზეთით და ორეგანოთი გამომცხვარი თხელი, თბილი და ხრაჭუნა ცომი, კრემ-ყველი, ჩვენ მიერ მომზადებული პომიდვრის ტკბილ-ცხარე ჯემი, კამის პასტა რუკოლა და შებოლილი ორაგული."
);
addItemToExport(jujikaSalmon);

const tiramisu = createMenuItem(
  "Tiramisu Disadorno",
  "ტირამისუ დისარონო",
  "dessert",
  12
);
tiramisu.setPic("tiramisu");
tiramisu.setDescriptionGeo(
  "უუუგემრიელესი, უფაფუკესი, უნაზესი და უბრალოდ, ქალაქში საუკეთესო ტირამისუ"
);
addItemToExport(tiramisu);

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display-menu.js":
/*!*****************************!*\
  !*** ./src/display-menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayMenu\": () => (/* binding */ displayMenu)\n/* harmony export */ });\n/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items */ \"./src/menu-items.js\");\n\n\nfunction displayMenu() {\n  const main = document.createElement(\"main\");\n  main.classList.add(\"menu\");\n  main.innerHTML = `\n    <section class=\"menu__section menu__section--pizza\">\n      <h2 class=\"menu__title\">PIZZA</h2>\n      <div class=\"menu__container\">\n          \n      </div>\n    </section>\n    <section class=\"menu__section menu__section--jujika\">\n      <h2 class=\"menu__title\">SANDWICHES</h2>\n      <div class=\"menu__container\">\n          \n      </div>\n    </section>\n    <section class=\"menu__section menu__section--dessert\">\n      <h2 class=\"menu__title\">DESSERT</h2>\n      <div class=\"menu__container\">\n      \n      </div>\n    </section>\n  `;\n  document.querySelector(\"#app\").appendChild(main);\n\n  const pizzaContainer = document.querySelector(\n    \".menu__section--pizza > .menu__container\"\n  );\n  const jujikaContainer = document.querySelector(\n    \".menu__section--jujika > .menu__container\"\n  );\n  const dessertContainer = document.querySelector(\n    \".menu__section--dessert > .menu__container\"\n  );\n\n  function cardHTML(item) {\n    return `\n    <div class=\"card\">\n      <img src=\"${item.pic}\" alt=\"\" class=\"card__image\">\n      <div class=\"card__content\">\n        <h4 class=\"card__title\"><span class=\"geo\">${item.nameGeo}</span> - ${item.nameEng}</h4>\n        <p class=\"card__price\">${item.price} GEL</p>\n        <p class=\"card__text\"><span class=\"geo\">${item.descriptionGeo}</span></p>\n      </div>\n    </div>\n  `;\n  }\n\n  _menu_items__WEBPACK_IMPORTED_MODULE_0__.pizzas.forEach((item) => {\n    pizzaContainer.innerHTML += cardHTML(item);\n  });\n  _menu_items__WEBPACK_IMPORTED_MODULE_0__.jujikas.forEach((item) => {\n    jujikaContainer.innerHTML += cardHTML(item);\n  });\n  _menu_items__WEBPACK_IMPORTED_MODULE_0__.desserts.forEach((item) => {\n    dessertContainer.innerHTML += cardHTML(item);\n  });\n}\n\n\n//# sourceURL=webpack://odin-restaurant-app/./src/display-menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-menu */ \"./src/display-menu.js\");\n\n(0,_display_menu__WEBPACK_IMPORTED_MODULE_0__.displayMenu)();\n\n\n//# sourceURL=webpack://odin-restaurant-app/./src/index.js?");

/***/ }),

/***/ "./src/menu-items.js":
/*!***************************!*\
  !*** ./src/menu-items.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"desserts\": () => (/* binding */ desserts),\n/* harmony export */   \"jujikas\": () => (/* binding */ jujikas),\n/* harmony export */   \"pizzas\": () => (/* binding */ pizzas)\n/* harmony export */ });\nconst pizzas = [];\nconst jujikas = [];\nconst desserts = [];\n\nfunction createMenuItem(nameEng, nameGeo, type, price) {\n  let pic = \"\";\n  const setPic = function (url) {\n    this.pic = url;\n  };\n  let descriptionEng = \"\";\n  let descriptionGeo = \"\";\n  const setDescriptionEng = function (desc) {\n    this.descriptionEng = desc;\n  };\n  const setDescriptionGeo = function (desc) {\n    this.descriptionGeo = desc;\n  };\n  const item = {\n    nameEng,\n    nameGeo,\n    type,\n    price,\n    pic,\n    setPic,\n    descriptionEng,\n    descriptionGeo,\n    setDescriptionEng,\n    setDescriptionGeo,\n  };\n  return item;\n}\n\nfunction addItemToExport(item) {\n  if (item.type === \"pizza\") {\n    pizzas.push(item);\n  } else if (item.type === \"jujika\") {\n    jujikas.push(item);\n  } else if (item.type === \"dessert\") {\n    desserts.push(item);\n  }\n}\n\nconst margherita = createMenuItem(\"Margherita\", \"მარგერიტა\", \"pizza\", 23);\nmargherita.setPic(\"src/img/menu-items/margherita.webp\");\nmargherita.setDescriptionEng(\"Pizza Margherita.\");\nmargherita.setDescriptionGeo(\n  \"მომწვარი, ჰაეროვანი ცომი, პომიდვრის სოუსი და 100% ნამდვილი მოცარელა, ეკონომიის გარეშე!\"\n);\naddItemToExport(margherita);\n\n\n//# sourceURL=webpack://odin-restaurant-app/./src/menu-items.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
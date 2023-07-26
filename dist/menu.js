/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMenuContent: () => (/* binding */ addMenuContent)
/* harmony export */ });
// Cache
const item1 = document.createElement("div");
const item1img = document.createElement("div");
const item1hea = document.createElement("h3");
const item1des = document.createElement("p");

const item2 = document.createElement("div");
const item2img = document.createElement("div");
const item2hea = document.createElement("h3");
const item2des = document.createElement("p");

const item3 = document.createElement("div");
const item3img = document.createElement("div");
const item3hea = document.createElement("h3");
const item3des = document.createElement("p");

const item4 = document.createElement("div");
const item4img = document.createElement("div");
const item4hea = document.createElement("h3");
const item4des = document.createElement("p");

const item5 = document.createElement("div");
const item5img = document.createElement("div");
const item5hea = document.createElement("h3");
const item5des = document.createElement("p");

const item6 = document.createElement("div");
const item6img = document.createElement("div");
const item6hea = document.createElement("h3");
const item6des = document.createElement("p");

const item7 = document.createElement("div");
const item7img = document.createElement("div");
const item7hea = document.createElement("h3");
const item7des = document.createElement("p");

const item8 = document.createElement("div");
const item8img = document.createElement("div");
const item8hea = document.createElement("h3");
const item8des = document.createElement("p");
const item9 = document.createElement("div");

const item9img = document.createElement("div");
const item9hea = document.createElement("h3");
const item9des = document.createElement("p");

const item10 = document.createElement("div");
const item10img = document.createElement("div");
const item10hea = document.createElement("h3");
const item10des = document.createElement("p");

function addMenuContent() {
    const tab = document.querySelector(".tab");
    tab.classList.add("menu");

    item1des.textContent = "Buns, beef patty, tomato, lettuce, cheese";
    item1hea.textContent = "Single";
    item1img.classList.add("img1");

    item2des.textContent = "Buns, beef patty, tomato, bacon, Cheese";
    item2hea.textContent = "Bacon";
    item2img.classList.add("img2");

    item3des.textContent = "Buns, x2 veg patty, tomato, lettuce, cheese";
    item3hea.textContent = "Vegan";
    item3img.classList.add("img3");

    item4des.textContent = "Buns, x2 beef patty, tomato, lettuce, x2 cheese";
    item4hea.textContent = "Double";
    item4img.classList.add("img4");

    item5des.textContent = "Whole wheat buns, organic beef patty, tomato, lettuce, guacamole";
    item5hea.textContent = "Health";
    item5img.classList.add("img5");

    item6des.textContent = "toasted white bread, tomato, lettuce, guacamole, cheese";
    item6hea.textContent = "Toasted Sandwich";
    item6img.classList.add("img6");

    item7des.textContent = "White sub, tomato, cucumber, lettuce, meatballs";
    item7hea.textContent = "Meatball Sub";
    item7img.classList.add("img7");

    item8des.textContent = "Portuguese bun, tomato, cheese, lettuce, chicken strips";
    item8hea.textContent = "Prego Roll";
    item8img.classList.add("img8");

    item9des.textContent = "White roll, hotdog sausage, salsa";
    item9hea.textContent = "Hotdog";
    item9img.classList.add("img9");

    item10des.textContent = "Bagel, ham, cheese, lettuce, tomato";
    item10hea.textContent = "Bagel";
    item10img.classList.add("img10");

    item1.append(item1img, item1hea, item1des);
    item2.append(item2img, item2hea, item2des);
    item3.append(item3img, item3hea, item3des);
    item4.append(item4img, item4hea, item4des);
    item5.append(item5img, item5hea, item5des);
    item6.append(item6img, item6hea, item6des);
    item7.append(item7img, item7hea, item7des);
    item8.append(item8img, item8hea, item8des);
    item9.append(item9img, item9hea, item9des);
    item10.append(item10img, item10hea, item10des);

    const elements = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10];
    // item2, item3, item4, item5, item6, item7, item8, item9, item10
    tab.replaceChildren(...elements);
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gQ2FjaGVcbmNvbnN0IGl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGl0ZW0xaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGl0ZW0xaGVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuY29uc3QgaXRlbTFkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuY29uc3QgaXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgaXRlbTJpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgaXRlbTJoZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5jb25zdCBpdGVtMmRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5jb25zdCBpdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBpdGVtM2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBpdGVtM2hlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbmNvbnN0IGl0ZW0zZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbmNvbnN0IGl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGl0ZW00aW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGl0ZW00aGVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuY29uc3QgaXRlbTRkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuY29uc3QgaXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgaXRlbTVpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgaXRlbTVoZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5jb25zdCBpdGVtNWRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5jb25zdCBpdGVtNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBpdGVtNmltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBpdGVtNmhlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbmNvbnN0IGl0ZW02ZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbmNvbnN0IGl0ZW03ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGl0ZW03aW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGl0ZW03aGVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuY29uc3QgaXRlbTdkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuY29uc3QgaXRlbTggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgaXRlbThpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgaXRlbThoZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5jb25zdCBpdGVtOGRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuY29uc3QgaXRlbTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5jb25zdCBpdGVtOWltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBpdGVtOWhlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbmNvbnN0IGl0ZW05ZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbmNvbnN0IGl0ZW0xMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBpdGVtMTBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgaXRlbTEwaGVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuY29uc3QgaXRlbTEwZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbmZ1bmN0aW9uIGFkZE1lbnVDb250ZW50KCkge1xuICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFiXCIpO1xuICAgIHRhYi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIGl0ZW0xZGVzLnRleHRDb250ZW50ID0gXCJCdW5zLCBiZWVmIHBhdHR5LCB0b21hdG8sIGxldHR1Y2UsIGNoZWVzZVwiO1xuICAgIGl0ZW0xaGVhLnRleHRDb250ZW50ID0gXCJTaW5nbGVcIjtcbiAgICBpdGVtMWltZy5jbGFzc0xpc3QuYWRkKFwiaW1nMVwiKTtcblxuICAgIGl0ZW0yZGVzLnRleHRDb250ZW50ID0gXCJCdW5zLCBiZWVmIHBhdHR5LCB0b21hdG8sIGJhY29uLCBDaGVlc2VcIjtcbiAgICBpdGVtMmhlYS50ZXh0Q29udGVudCA9IFwiQmFjb25cIjtcbiAgICBpdGVtMmltZy5jbGFzc0xpc3QuYWRkKFwiaW1nMlwiKTtcblxuICAgIGl0ZW0zZGVzLnRleHRDb250ZW50ID0gXCJCdW5zLCB4MiB2ZWcgcGF0dHksIHRvbWF0bywgbGV0dHVjZSwgY2hlZXNlXCI7XG4gICAgaXRlbTNoZWEudGV4dENvbnRlbnQgPSBcIlZlZ2FuXCI7XG4gICAgaXRlbTNpbWcuY2xhc3NMaXN0LmFkZChcImltZzNcIik7XG5cbiAgICBpdGVtNGRlcy50ZXh0Q29udGVudCA9IFwiQnVucywgeDIgYmVlZiBwYXR0eSwgdG9tYXRvLCBsZXR0dWNlLCB4MiBjaGVlc2VcIjtcbiAgICBpdGVtNGhlYS50ZXh0Q29udGVudCA9IFwiRG91YmxlXCI7XG4gICAgaXRlbTRpbWcuY2xhc3NMaXN0LmFkZChcImltZzRcIik7XG5cbiAgICBpdGVtNWRlcy50ZXh0Q29udGVudCA9IFwiV2hvbGUgd2hlYXQgYnVucywgb3JnYW5pYyBiZWVmIHBhdHR5LCB0b21hdG8sIGxldHR1Y2UsIGd1YWNhbW9sZVwiO1xuICAgIGl0ZW01aGVhLnRleHRDb250ZW50ID0gXCJIZWFsdGhcIjtcbiAgICBpdGVtNWltZy5jbGFzc0xpc3QuYWRkKFwiaW1nNVwiKTtcblxuICAgIGl0ZW02ZGVzLnRleHRDb250ZW50ID0gXCJ0b2FzdGVkIHdoaXRlIGJyZWFkLCB0b21hdG8sIGxldHR1Y2UsIGd1YWNhbW9sZSwgY2hlZXNlXCI7XG4gICAgaXRlbTZoZWEudGV4dENvbnRlbnQgPSBcIlRvYXN0ZWQgU2FuZHdpY2hcIjtcbiAgICBpdGVtNmltZy5jbGFzc0xpc3QuYWRkKFwiaW1nNlwiKTtcblxuICAgIGl0ZW03ZGVzLnRleHRDb250ZW50ID0gXCJXaGl0ZSBzdWIsIHRvbWF0bywgY3VjdW1iZXIsIGxldHR1Y2UsIG1lYXRiYWxsc1wiO1xuICAgIGl0ZW03aGVhLnRleHRDb250ZW50ID0gXCJNZWF0YmFsbCBTdWJcIjtcbiAgICBpdGVtN2ltZy5jbGFzc0xpc3QuYWRkKFwiaW1nN1wiKTtcblxuICAgIGl0ZW04ZGVzLnRleHRDb250ZW50ID0gXCJQb3J0dWd1ZXNlIGJ1biwgdG9tYXRvLCBjaGVlc2UsIGxldHR1Y2UsIGNoaWNrZW4gc3RyaXBzXCI7XG4gICAgaXRlbThoZWEudGV4dENvbnRlbnQgPSBcIlByZWdvIFJvbGxcIjtcbiAgICBpdGVtOGltZy5jbGFzc0xpc3QuYWRkKFwiaW1nOFwiKTtcblxuICAgIGl0ZW05ZGVzLnRleHRDb250ZW50ID0gXCJXaGl0ZSByb2xsLCBob3Rkb2cgc2F1c2FnZSwgc2Fsc2FcIjtcbiAgICBpdGVtOWhlYS50ZXh0Q29udGVudCA9IFwiSG90ZG9nXCI7XG4gICAgaXRlbTlpbWcuY2xhc3NMaXN0LmFkZChcImltZzlcIik7XG5cbiAgICBpdGVtMTBkZXMudGV4dENvbnRlbnQgPSBcIkJhZ2VsLCBoYW0sIGNoZWVzZSwgbGV0dHVjZSwgdG9tYXRvXCI7XG4gICAgaXRlbTEwaGVhLnRleHRDb250ZW50ID0gXCJCYWdlbFwiO1xuICAgIGl0ZW0xMGltZy5jbGFzc0xpc3QuYWRkKFwiaW1nMTBcIik7XG5cbiAgICBpdGVtMS5hcHBlbmQoaXRlbTFpbWcsIGl0ZW0xaGVhLCBpdGVtMWRlcyk7XG4gICAgaXRlbTIuYXBwZW5kKGl0ZW0yaW1nLCBpdGVtMmhlYSwgaXRlbTJkZXMpO1xuICAgIGl0ZW0zLmFwcGVuZChpdGVtM2ltZywgaXRlbTNoZWEsIGl0ZW0zZGVzKTtcbiAgICBpdGVtNC5hcHBlbmQoaXRlbTRpbWcsIGl0ZW00aGVhLCBpdGVtNGRlcyk7XG4gICAgaXRlbTUuYXBwZW5kKGl0ZW01aW1nLCBpdGVtNWhlYSwgaXRlbTVkZXMpO1xuICAgIGl0ZW02LmFwcGVuZChpdGVtNmltZywgaXRlbTZoZWEsIGl0ZW02ZGVzKTtcbiAgICBpdGVtNy5hcHBlbmQoaXRlbTdpbWcsIGl0ZW03aGVhLCBpdGVtN2Rlcyk7XG4gICAgaXRlbTguYXBwZW5kKGl0ZW04aW1nLCBpdGVtOGhlYSwgaXRlbThkZXMpO1xuICAgIGl0ZW05LmFwcGVuZChpdGVtOWltZywgaXRlbTloZWEsIGl0ZW05ZGVzKTtcbiAgICBpdGVtMTAuYXBwZW5kKGl0ZW0xMGltZywgaXRlbTEwaGVhLCBpdGVtMTBkZXMpO1xuXG4gICAgY29uc3QgZWxlbWVudHMgPSBbaXRlbTEsIGl0ZW0yLCBpdGVtMywgaXRlbTQsIGl0ZW01LCBpdGVtNiwgaXRlbTcsIGl0ZW04LCBpdGVtOSwgaXRlbTEwXTtcbiAgICAvLyBpdGVtMiwgaXRlbTMsIGl0ZW00LCBpdGVtNSwgaXRlbTYsIGl0ZW03LCBpdGVtOCwgaXRlbTksIGl0ZW0xMFxuICAgIHRhYi5yZXBsYWNlQ2hpbGRyZW4oLi4uZWxlbWVudHMpO1xufVxuXG5leHBvcnQge1xuICAgIGFkZE1lbnVDb250ZW50LFxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
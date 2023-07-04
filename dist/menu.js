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

    item2des.textContent = "Buns, beef patty, tomato, bacon, double-cheese";
    item2hea.textContent = "Bacon";
    item2img.classList.add("img2");

    item3des.textContent = "Buns, double veg patty, tomato, lettuce, cheese";
    item3hea.textContent = "Vegan";
    item3img.classList.add("img3");

    item4des.textContent = "Buns, double beef patty, tomato, lettuce, double-cheese";
    item4hea.textContent = "Double";
    item4img.classList.add("img4");

    item5des.textContent = "Whole wheat buns, organic beef patty, tomato, lettuce, guacamole";
    item5hea.textContent = "Double";
    item5img.classList.add("img5");

    item1.append(item1img, item1hea, item1des);
    item2.append(item2img, item2hea, item2des);
    item3.append(item3img, item3hea, item3des);
    item4.append(item4img, item4hea, item4des);
    item5.append(item5img, item5hea, item5des);

    const elements = [item1, item2, item3, item4, item5];
    // item2, item3, item4, item5, item6, item7, item8, item9, item10
    tab.replaceChildren(...elements);
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIENhY2hlXG5cbmNvbnN0IGl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGl0ZW0xaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGl0ZW0xaGVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuY29uc3QgaXRlbTFkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuY29uc3QgaXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgaXRlbTJpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgaXRlbTJoZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5jb25zdCBpdGVtMmRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5jb25zdCBpdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBpdGVtM2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBpdGVtM2hlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbmNvbnN0IGl0ZW0zZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbmNvbnN0IGl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGl0ZW00aW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGl0ZW00aGVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuY29uc3QgaXRlbTRkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuY29uc3QgaXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgaXRlbTVpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgaXRlbTVoZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5jb25zdCBpdGVtNWRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5jb25zdCBpdGVtNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBpdGVtNmltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBpdGVtNmhlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbmNvbnN0IGl0ZW02ZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbmNvbnN0IGl0ZW03ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGl0ZW03aW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGl0ZW03aGVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuY29uc3QgaXRlbTdkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuY29uc3QgaXRlbTggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgaXRlbThpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgaXRlbThoZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5jb25zdCBpdGVtOGRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuY29uc3QgaXRlbTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5jb25zdCBpdGVtOWltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBpdGVtOWhlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbmNvbnN0IGl0ZW05ZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbmNvbnN0IGl0ZW0xMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBpdGVtMTBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgaXRlbTEwaGVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuY29uc3QgaXRlbTEwZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbmZ1bmN0aW9uIGFkZE1lbnVDb250ZW50KCkge1xuICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFiXCIpO1xuICAgIHRhYi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIGl0ZW0xZGVzLnRleHRDb250ZW50ID0gXCJCdW5zLCBiZWVmIHBhdHR5LCB0b21hdG8sIGxldHR1Y2UsIGNoZWVzZVwiO1xuICAgIGl0ZW0xaGVhLnRleHRDb250ZW50ID0gXCJTaW5nbGVcIjtcbiAgICBpdGVtMWltZy5jbGFzc0xpc3QuYWRkKFwiaW1nMVwiKTtcblxuICAgIGl0ZW0yZGVzLnRleHRDb250ZW50ID0gXCJCdW5zLCBiZWVmIHBhdHR5LCB0b21hdG8sIGJhY29uLCBkb3VibGUtY2hlZXNlXCI7XG4gICAgaXRlbTJoZWEudGV4dENvbnRlbnQgPSBcIkJhY29uXCI7XG4gICAgaXRlbTJpbWcuY2xhc3NMaXN0LmFkZChcImltZzJcIik7XG5cbiAgICBpdGVtM2Rlcy50ZXh0Q29udGVudCA9IFwiQnVucywgZG91YmxlIHZlZyBwYXR0eSwgdG9tYXRvLCBsZXR0dWNlLCBjaGVlc2VcIjtcbiAgICBpdGVtM2hlYS50ZXh0Q29udGVudCA9IFwiVmVnYW5cIjtcbiAgICBpdGVtM2ltZy5jbGFzc0xpc3QuYWRkKFwiaW1nM1wiKTtcblxuICAgIGl0ZW00ZGVzLnRleHRDb250ZW50ID0gXCJCdW5zLCBkb3VibGUgYmVlZiBwYXR0eSwgdG9tYXRvLCBsZXR0dWNlLCBkb3VibGUtY2hlZXNlXCI7XG4gICAgaXRlbTRoZWEudGV4dENvbnRlbnQgPSBcIkRvdWJsZVwiO1xuICAgIGl0ZW00aW1nLmNsYXNzTGlzdC5hZGQoXCJpbWc0XCIpO1xuXG4gICAgaXRlbTVkZXMudGV4dENvbnRlbnQgPSBcIldob2xlIHdoZWF0IGJ1bnMsIG9yZ2FuaWMgYmVlZiBwYXR0eSwgdG9tYXRvLCBsZXR0dWNlLCBndWFjYW1vbGVcIjtcbiAgICBpdGVtNWhlYS50ZXh0Q29udGVudCA9IFwiRG91YmxlXCI7XG4gICAgaXRlbTVpbWcuY2xhc3NMaXN0LmFkZChcImltZzVcIik7XG5cbiAgICBpdGVtMS5hcHBlbmQoaXRlbTFpbWcsIGl0ZW0xaGVhLCBpdGVtMWRlcyk7XG4gICAgaXRlbTIuYXBwZW5kKGl0ZW0yaW1nLCBpdGVtMmhlYSwgaXRlbTJkZXMpO1xuICAgIGl0ZW0zLmFwcGVuZChpdGVtM2ltZywgaXRlbTNoZWEsIGl0ZW0zZGVzKTtcbiAgICBpdGVtNC5hcHBlbmQoaXRlbTRpbWcsIGl0ZW00aGVhLCBpdGVtNGRlcyk7XG4gICAgaXRlbTUuYXBwZW5kKGl0ZW01aW1nLCBpdGVtNWhlYSwgaXRlbTVkZXMpO1xuXG4gICAgY29uc3QgZWxlbWVudHMgPSBbaXRlbTEsIGl0ZW0yLCBpdGVtMywgaXRlbTQsIGl0ZW01XTtcbiAgICAvLyBpdGVtMiwgaXRlbTMsIGl0ZW00LCBpdGVtNSwgaXRlbTYsIGl0ZW03LCBpdGVtOCwgaXRlbTksIGl0ZW0xMFxuICAgIHRhYi5yZXBsYWNlQ2hpbGRyZW4oLi4uZWxlbWVudHMpO1xufVxuXG5leHBvcnQge1xuICAgIGFkZE1lbnVDb250ZW50LFxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
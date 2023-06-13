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
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTemplate: () => (/* binding */ createTemplate)
/* harmony export */ });
// Cache
const content = document.querySelector("#content");
// Header
const header = document.createElement("header");
const heading = document.createElement("h2");
const nav = document.createElement("nav");
// Main
const main = document.createElement("main");
const tab = document.createElement("div");
const byP = document.createElement("p");
const byA1 = document.createElement("a");
const byA2 = document.createElement("a");
// Footer
const footer = document.createElement("footer");
const footerP = document.createElement("p");
const footerA = document.createElement("a");
const footerI = document.createElement("i");

function createTemplate() {
    // Build header
    heading.textContent = "BurgerPalace";

    const btnText = ["Home", "Menu", "Contact"];
    btnText.forEach(element => {
        const btn = document.createElement("button");
        btn.textContent = element;
        nav.appendChild(btn);
    });

    header.appendChild(heading);
    header.appendChild(nav);
    content.appendChild(header);


    // Build main
    tab.classList.add("tab");

    main.appendChild(tab);
    content.appendChild(main);


    // Build background img photo credit
    byA1.href = "https://unsplash.com/@1ncreased?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"; // Link needs to be resolved
    byA1.textContent = "Lidye";
    byA2.href = "https://unsplash.com/photos/1Shk_PkNkNw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    byA2.textContent = "Unsplash";
    byP.id = "photoBy";
    byP.textContent += "Photo by ";
    byP.appendChild(byA1);
    byP.textContent += " on ";
    byP.appendChild(byA2);
    content.appendChild(byP);


    // Build footer
    footerA.href = "https://github.com/llpingll";
    footerA.target = "_blank";
    footerI.classList.add("fa-brands");
    footerI.classList.add("fa-github");
    footerP.textContent = `||Ping|| @ ${new Date().getFullYear()} `;
    footer.classList.add("footer");

    footerA.appendChild(footerI);
    footerP.appendChild(footerA);
    footer.appendChild(footerP);
    content.appendChild(footer);
}

// Export seperate funcions this way

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQSxzSEFBc0g7QUFDdEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDBCQUEwQjtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RlbXBsYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gQ2FjaGVcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4vLyBIZWFkZXJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5jb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbi8vIE1haW5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbmNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBieVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmNvbnN0IGJ5QTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbmNvbnN0IGJ5QTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbi8vIEZvb3RlclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbmNvbnN0IGZvb3RlclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmNvbnN0IGZvb3RlckEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbmNvbnN0IGZvb3RlckkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcblxuZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUoKSB7XG4gICAgLy8gQnVpbGQgaGVhZGVyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQnVyZ2VyUGFsYWNlXCI7XG5cbiAgICBjb25zdCBidG5UZXh0ID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdO1xuICAgIGJ0blRleHQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gZWxlbWVudDtcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgfSk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5cbiAgICAvLyBCdWlsZCBtYWluXG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIik7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKHRhYik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcblxuXG4gICAgLy8gQnVpbGQgYmFja2dyb3VuZCBpbWcgcGhvdG8gY3JlZGl0XG4gICAgYnlBMS5ocmVmID0gXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AMW5jcmVhc2VkP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiOyAvLyBMaW5rIG5lZWRzIHRvIGJlIHJlc29sdmVkXG4gICAgYnlBMS50ZXh0Q29udGVudCA9IFwiTGlkeWVcIjtcbiAgICBieUEyLmhyZWYgPSBcImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy8xU2hrX1BrTmtOdz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIjtcbiAgICBieUEyLnRleHRDb250ZW50ID0gXCJVbnNwbGFzaFwiO1xuICAgIGJ5UC5pZCA9IFwicGhvdG9CeVwiO1xuICAgIGJ5UC50ZXh0Q29udGVudCArPSBcIlBob3RvIGJ5IFwiO1xuICAgIGJ5UC5hcHBlbmRDaGlsZChieUExKTtcbiAgICBieVAudGV4dENvbnRlbnQgKz0gXCIgb24gXCI7XG4gICAgYnlQLmFwcGVuZENoaWxkKGJ5QTIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnlQKTtcblxuXG4gICAgLy8gQnVpbGQgZm9vdGVyXG4gICAgZm9vdGVyQS5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vbGxwaW5nbGxcIjtcbiAgICBmb290ZXJBLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgZm9vdGVySS5jbGFzc0xpc3QuYWRkKFwiZmEtYnJhbmRzXCIpO1xuICAgIGZvb3RlckkuY2xhc3NMaXN0LmFkZChcImZhLWdpdGh1YlwiKTtcbiAgICBmb290ZXJQLnRleHRDb250ZW50ID0gYHx8UGluZ3x8IEAgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IGA7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cbiAgICBmb290ZXJBLmFwcGVuZENoaWxkKGZvb3RlckkpO1xuICAgIGZvb3RlclAuYXBwZW5kQ2hpbGQoZm9vdGVyQSk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclApO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuLy8gRXhwb3J0IHNlcGVyYXRlIGZ1bmNpb25zIHRoaXMgd2F5XG5leHBvcnQge1xuICAgIGNyZWF0ZVRlbXBsYXRlLFxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
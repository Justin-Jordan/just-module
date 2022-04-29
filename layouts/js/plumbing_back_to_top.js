/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../wbu-atomique/scss/organisme/sections/theme_builder/plumbing/bac-top.scss":
/*!**************************************************************************************************!*\
  !*** ../../../../../../wbu-atomique/scss/organisme/sections/theme_builder/plumbing/bac-top.scss ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************************************!*\
  !*** ./src/js/footer/plumbing_back_to_top.js ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stephane888_wbu_atomique_scss_organisme_sections_theme_builder_plumbing_bac_top_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stephane888/wbu-atomique/scss/organisme/sections/theme_builder/plumbing/bac-top.scss */ "../../../../../../wbu-atomique/scss/organisme/sections/theme_builder/plumbing/bac-top.scss");

let bacTop = document.querySelector(".bac-top-plumbing");
bacTop.addEventListener("click", scrollUp);

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    bacTop.style.visibility = "visible";
    bacTop.style.opacity = "1";
  } else {
    bacTop.style = "";
  }
}

function scrollUp() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXRzL2pzL3BsdW1iaW5nX2JhY2tfdG9fdG9wLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBRUEsSUFBSUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWI7QUFDQUYsTUFBTSxDQUFDRyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0MsUUFBakM7O0FBRUFDLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQixNQUFNO0FBQ3RCQyxFQUFBQSxjQUFjO0FBQ2YsQ0FGRDs7QUFJQSxTQUFTQSxjQUFULEdBQTBCO0FBQ3hCLE1BQ0VOLFFBQVEsQ0FBQ08sSUFBVCxDQUFjQyxTQUFkLEdBQTBCLEdBQTFCLElBQ0FSLFFBQVEsQ0FBQ1MsZUFBVCxDQUF5QkQsU0FBekIsR0FBcUMsR0FGdkMsRUFHRTtBQUNBVCxJQUFBQSxNQUFNLENBQUNXLEtBQVAsQ0FBYUMsVUFBYixHQUEwQixTQUExQjtBQUNBWixJQUFBQSxNQUFNLENBQUNXLEtBQVAsQ0FBYUUsT0FBYixHQUF1QixHQUF2QjtBQUNELEdBTkQsTUFNTztBQUNMYixJQUFBQSxNQUFNLENBQUNXLEtBQVAsR0FBZSxFQUFmO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTUCxRQUFULEdBQW9CO0FBQ2xCQyxFQUFBQSxNQUFNLENBQUNTLE1BQVAsQ0FBYztBQUNaQyxJQUFBQSxHQUFHLEVBQUUsQ0FETztBQUVaQyxJQUFBQSxJQUFJLEVBQUUsQ0FGTTtBQUdaQyxJQUFBQSxRQUFRLEVBQUU7QUFIRSxHQUFkO0FBS0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vLi4vLi4vLi4vLi4vLi4vd2J1LWF0b21pcXVlL3Njc3Mvb3JnYW5pc21lL3NlY3Rpb25zL3RoZW1lX2J1aWxkZXIvcGx1bWJpbmcvYmFjLXRvcC5zY3NzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9zcmMvanMvZm9vdGVyL3BsdW1iaW5nX2JhY2tfdG9fdG9wLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIkBzdGVwaGFuZTg4OC93YnUtYXRvbWlxdWUvc2Nzcy9vcmdhbmlzbWUvc2VjdGlvbnMvdGhlbWVfYnVpbGRlci9wbHVtYmluZy9iYWMtdG9wLnNjc3NcIjtcblxubGV0IGJhY1RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFjLXRvcC1wbHVtYmluZ1wiKTtcbmJhY1RvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2Nyb2xsVXApO1xuXG53aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gIHNjcm9sbEZ1bmN0aW9uKCk7XG59O1xuXG5mdW5jdGlvbiBzY3JvbGxGdW5jdGlvbigpIHtcbiAgaWYgKFxuICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gNTAwIHx8XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDUwMFxuICApIHtcbiAgICBiYWNUb3Auc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIGJhY1RvcC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gIH0gZWxzZSB7XG4gICAgYmFjVG9wLnN0eWxlID0gXCJcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzY3JvbGxVcCgpIHtcbiAgd2luZG93LnNjcm9sbCh7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiYmFjVG9wIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFVwIiwid2luZG93Iiwib25zY3JvbGwiLCJzY3JvbGxGdW5jdGlvbiIsImJvZHkiLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJvcGFjaXR5Iiwic2Nyb2xsIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIl0sInNvdXJjZVJvb3QiOiIifQ==
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../wbu-atomique/scss/organisme/sections/theme_builder/plumbing/navbar.scss":
/*!*************************************************************************************************!*\
  !*** ../../../../../../wbu-atomique/scss/organisme/sections/theme_builder/plumbing/navbar.scss ***!
  \*************************************************************************************************/
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
/*!******************************************!*\
  !*** ./src/js/header/plumbing_navbar.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stephane888_wbu_atomique_scss_organisme_sections_theme_builder_plumbing_navbar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stephane888/wbu-atomique/scss/organisme/sections/theme_builder/plumbing/navbar.scss */ "../../../../../../wbu-atomique/scss/organisme/sections/theme_builder/plumbing/navbar.scss");


let select = element => document.querySelector(element);

let header = select(".plumbing-navbar");
var ul = header.querySelectorAll("nav .nav-list > li");

const toggleNav = () => {
  var count = 0;
  select(".bar").addEventListener("click", () => {
    header.classList.toggle("active");
    var ul = select(".nav-list");
    ul.classList.add("nav-list-mobile");
    hideScrollBar();
    ul.classList.remove("nav-list");

    while (count < 1) {
      setToggleUl();
      count++;
    }
  });
  select(".hide").addEventListener("click", () => {
    header.classList.toggle("active");
    var ul = select(".nav-list-mobile");
    hideScrollBar(false);
    ul.classList.remove("nav-list-mobile");
    ul.classList.add("nav-list"); //setToggleUl();
  });
  /* breakpoint */

  let small = window.matchMedia("(max-width :768px)");
  small.addEventListener("change", hideMenuSM); //
};
/*Gère l'affichage du menu sur petit écran*/


function hideMenuSM(bp) {
  if (!bp.matches) {
    select(".plumbing-navbar").classList.remove("active");
    select(".plumbing-navbar nav > ul").classList.remove("nav-list-mobile");
    select(".plumbing-navbar nav > ul").classList.add("nav-list");
    hideScrollBar(false);
    rebuildNav();
  } else {
    rebuildNav();
  } //setToggleUl();

}
/* cache la scroll bar du body */


function hideScrollBar() {
  let hide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (hide) {
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style = "";
  }
}

toggleNav();
/* cacher les nav lorsque besoin s'impose */

/* breakpoint */

let first = window.matchMedia("(max-width :1200px)");
first.addEventListener("change", copyNode);
let second = window.matchMedia("(max-width :992px)");
second.addEventListener("change", copyNode2);
let subuild = header.querySelector(".sub-build");
let navLi = Array.from(header.querySelectorAll("nav .nav-list > li"));

if (navLi && navLi.length) {}
/* permet de reduire les nav en dessous des breakpoint egale 1200px */


function copyNode2(bp) {
  let child = Array.from(document.querySelectorAll(".sub-build > ul > li "));
  let navLi2 = Array.from(header.querySelectorAll("nav .nav-list > li"));

  if (bp.matches) {
    subuild.style.display = "block";

    if (navLi.length) {
      for (let i = navLi2.length - 3; i > 1; i--) {
        (function (rs) {
          subuild.querySelector("ul").appendChild(rs);
        })(navLi2[i]);
      }
    }
  } else {
    for (let i = child.length - 1; i > child.length - 3; i--) {
      (function (rs) {
        if (rs) {
          subuild.parentElement.insertBefore(rs, subuild);
        }
      })(child[i]);
    }
  }
}
/* permet de reduire les nav en dessous des breakpoint egale 1200px */


function copyNode(bp) {
  let child = document.querySelectorAll(".sub-build > ul > li ");
  let navLi = Array.from(header.querySelectorAll("nav .nav-list > li"));

  if (bp.matches) {
    subuild.style.display = "block";

    if (navLi.length) {
      for (let i = navLi.length - 3; i > 3; i--) {
        (function (rs) {
          subuild.querySelector("ul").appendChild(rs);
        })(navLi[i]);
      }
    }
  } else {
    for (let ch of child) {
      (function (rs) {
        subuild.parentElement.insertBefore(rs, subuild);
      })(ch);
    }

    subuild.style.display = "";
  }
}

function rebuildNav() {
  let windowWidth = window.innerWidth;

  if (windowWidth > 992 && windowWidth < 1201) {
    copyNode({
      matches: true
    });
  }

  if (windowWidth < 992 && windowWidth >= 768) {
    copyNode2({
      matches: true
    });
  }

  if (windowWidth <= 768) {
    copyNode({
      matches: false
    });
  }
}
/* gestion de la navigation après le chargement de la page */


window.addEventListener("DOMContentLoaded", event => {
  rebuildNav();
});
/* permet de gérer les menu deroulant sur petit écran au click du burger*/

function setToggleUl() {
  var subMenu = header.querySelectorAll(".nav-list-mobile .sub-alt > a");

  if (subMenu) {
    for (let sub of subMenu) {
      sub.addEventListener("click", () => {
        var all = sub.parentElement.parentElement.querySelectorAll(sub.parentElement.parentElement.tagName + " > .sub-alt--open > a");

        if (all && all.length) {
          for (let li of all) {
            (function (gr) {
              if (gr === sub) {//console.log("same", li);
              } else {
                trueHeight(gr);
                gr.parentElement.classList.toggle("sub-alt--open");
                let list = gr.parentElement.querySelectorAll(".sub-alt--open > a"); // console.log("sub", gr);

                if (list && list.length) {
                  for (let sous of list) {
                    trueHeight(sous);
                    sous.parentElement.classList.toggle("sub-alt--open");
                  }
                }
              }
            })(li);
          }
        }

        trueHeight(sub);
        sub.parentElement.classList.toggle("sub-alt--open");
      });
    }
  }
}
/* gere le max-height des ul au click pour les transition de fermeture et d'ouverture des accordeon*/


function trueHeight(a) {
  var parent = header.querySelectorAll(".nav-list-mobile");
  var ulNext = a.nextElementSibling;

  if (ulNext && parent) {
    if (ulNext) {
      if (ulNext.style.maxHeight) {
        ulNext.style.maxHeight = null;
      } else {
        ulNext.style.maxHeight = ulNext.scrollHeight + "px";
      }
    }
  } else {
    console.error("ulnext n'existe pas");
  }
}
/* fixe le menu au dessus */


const onscroll = (el, listener) => {
  el.addEventListener("scroll", listener);
};

var nav = document.querySelector(".plumbing-navbar");

if (nav) {
  let header = nav.offsetTop;

  const fixedTop = () => {
    if (window.pageYOffset > header) {
      nav.classList.add("plumbing-navbar--fixed");
    } else {
      nav.classList.remove("plumbing-navbar--fixed");
    }
  };

  window.addEventListener("load", fixedTop);
  onscroll(document, fixedTop);
}
/* pop up recherche */


let search = document.querySelector(".search-link");
let fermer = document.querySelector(".hide-search");
let blocSearch = document.querySelector(".search-pop-up");
search.addEventListener("click", activeSearch);
fermer.addEventListener("click", activeSearch);

function activeSearch() {
  blocSearch.classList.toggle("search-pop-up--show");
}
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLEdBQUduRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQVY7O0FBRUEsSUFBSWtFLEdBQUosRUFBUztBQUNQLE1BQUlqRSxNQUFNLEdBQUdpRSxHQUFHLENBQUNDLFNBQWpCOztBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFFBQUl0RCxNQUFNLENBQUN1RCxXQUFQLEdBQXFCcEUsTUFBekIsRUFBaUM7QUFDL0JpRSxNQUFBQSxHQUFHLENBQUMzRCxTQUFKLENBQWNFLEdBQWQsQ0FBa0Isd0JBQWxCO0FBQ0QsS0FGRCxNQUVPO0FBQ0x5RCxNQUFBQSxHQUFHLENBQUMzRCxTQUFKLENBQWNJLE1BQWQsQ0FBcUIsd0JBQXJCO0FBQ0Q7QUFDRixHQU5EOztBQU9BRyxFQUFBQSxNQUFNLENBQUNSLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDOEQsUUFBaEM7QUFDQUwsRUFBQUEsUUFBUSxDQUFDaEUsUUFBRCxFQUFXcUUsUUFBWCxDQUFSO0FBQ0Q7QUFFRDs7O0FBQ0EsSUFBSUUsTUFBTSxHQUFHdkUsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWI7QUFDQSxJQUFJdUUsTUFBTSxHQUFHeEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWI7QUFDQSxJQUFJd0UsVUFBVSxHQUFHekUsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixDQUFqQjtBQUNBc0UsTUFBTSxDQUFDaEUsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNtRSxZQUFqQztBQUNBRixNQUFNLENBQUNqRSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ21FLFlBQWpDOztBQUVBLFNBQVNBLFlBQVQsR0FBd0I7QUFDdEJELEVBQUFBLFVBQVUsQ0FBQ2pFLFNBQVgsQ0FBcUJDLE1BQXJCLENBQTRCLHFCQUE1QjtBQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uLy4uLy4uLy4uLy4uLy4uL3didS1hdG9taXF1ZS9zY3NzL29yZ2FuaXNtZS9zZWN0aW9ucy90aGVtZV9idWlsZGVyL3BsdW1iaW5nL25hdmJhci5zY3NzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9zcmMvanMvaGVhZGVyL3BsdW1iaW5nX25hdmJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCJAc3RlcGhhbmU4ODgvd2J1LWF0b21pcXVlL3Njc3Mvb3JnYW5pc21lL3NlY3Rpb25zL3RoZW1lX2J1aWxkZXIvcGx1bWJpbmcvbmF2YmFyLnNjc3NcIjtcblxubGV0IHNlbGVjdCA9IChlbGVtZW50KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xubGV0IGhlYWRlciA9IHNlbGVjdChcIi5wbHVtYmluZy1uYXZiYXJcIik7XG52YXIgdWwgPSBoZWFkZXIucXVlcnlTZWxlY3RvckFsbChcIm5hdiAubmF2LWxpc3QgPiBsaVwiKTtcbmNvbnN0IHRvZ2dsZU5hdiA9ICgpID0+IHtcbiAgdmFyIGNvdW50ID0gMDtcblxuICBzZWxlY3QoXCIuYmFyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgdmFyIHVsID0gc2VsZWN0KFwiLm5hdi1saXN0XCIpO1xuXG4gICAgdWwuY2xhc3NMaXN0LmFkZChcIm5hdi1saXN0LW1vYmlsZVwiKTtcbiAgICBoaWRlU2Nyb2xsQmFyKCk7XG4gICAgdWwuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1saXN0XCIpO1xuICAgIHdoaWxlIChjb3VudCA8IDEpIHtcbiAgICAgIHNldFRvZ2dsZVVsKCk7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgfSk7XG4gIHNlbGVjdChcIi5oaWRlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgdmFyIHVsID0gc2VsZWN0KFwiLm5hdi1saXN0LW1vYmlsZVwiKTtcbiAgICBoaWRlU2Nyb2xsQmFyKGZhbHNlKTtcbiAgICB1bC5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LWxpc3QtbW9iaWxlXCIpO1xuICAgIHVsLmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlzdFwiKTtcbiAgICAvL3NldFRvZ2dsZVVsKCk7XG4gIH0pO1xuXG4gIC8qIGJyZWFrcG9pbnQgKi9cbiAgbGV0IHNtYWxsID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoIDo3NjhweClcIik7XG4gIHNtYWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGlkZU1lbnVTTSk7XG5cbiAgLy9cbn07XG4vKkfDqHJlIGwnYWZmaWNoYWdlIGR1IG1lbnUgc3VyIHBldGl0IMOpY3JhbiovXG5mdW5jdGlvbiBoaWRlTWVudVNNKGJwKSB7XG4gIGlmICghYnAubWF0Y2hlcykge1xuICAgIHNlbGVjdChcIi5wbHVtYmluZy1uYXZiYXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBzZWxlY3QoXCIucGx1bWJpbmctbmF2YmFyIG5hdiA+IHVsXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtbGlzdC1tb2JpbGVcIik7XG4gICAgc2VsZWN0KFwiLnBsdW1iaW5nLW5hdmJhciBuYXYgPiB1bFwiKS5jbGFzc0xpc3QuYWRkKFwibmF2LWxpc3RcIik7XG4gICAgaGlkZVNjcm9sbEJhcihmYWxzZSk7XG4gICAgcmVidWlsZE5hdigpO1xuICB9IGVsc2Uge1xuICAgIHJlYnVpbGROYXYoKTtcbiAgfVxuICAvL3NldFRvZ2dsZVVsKCk7XG59XG4vKiBjYWNoZSBsYSBzY3JvbGwgYmFyIGR1IGJvZHkgKi9cbmZ1bmN0aW9uIGhpZGVTY3JvbGxCYXIoaGlkZSA9IHRydWUpIHtcbiAgaWYgKGhpZGUpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUgPSBcIlwiO1xuICB9XG59XG50b2dnbGVOYXYoKTtcblxuLyogY2FjaGVyIGxlcyBuYXYgbG9yc3F1ZSBiZXNvaW4gcydpbXBvc2UgKi9cblxuLyogYnJlYWtwb2ludCAqL1xubGV0IGZpcnN0ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoIDoxMjAwcHgpXCIpO1xuXG5maXJzdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNvcHlOb2RlKTtcbmxldCBzZWNvbmQgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGggOjk5MnB4KVwiKTtcbnNlY29uZC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNvcHlOb2RlMik7XG5cbmxldCBzdWJ1aWxkID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoXCIuc3ViLWJ1aWxkXCIpO1xubGV0IG5hdkxpID0gQXJyYXkuZnJvbShoZWFkZXIucXVlcnlTZWxlY3RvckFsbChcIm5hdiAubmF2LWxpc3QgPiBsaVwiKSk7XG5cbmlmIChuYXZMaSAmJiBuYXZMaS5sZW5ndGgpIHtcbn1cbi8qIHBlcm1ldCBkZSByZWR1aXJlIGxlcyBuYXYgZW4gZGVzc291cyBkZXMgYnJlYWtwb2ludCBlZ2FsZSAxMjAwcHggKi9cbmZ1bmN0aW9uIGNvcHlOb2RlMihicCkge1xuICBsZXQgY2hpbGQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3ViLWJ1aWxkID4gdWwgPiBsaSBcIikpO1xuICBsZXQgbmF2TGkyID0gQXJyYXkuZnJvbShoZWFkZXIucXVlcnlTZWxlY3RvckFsbChcIm5hdiAubmF2LWxpc3QgPiBsaVwiKSk7XG4gIGlmIChicC5tYXRjaGVzKSB7XG4gICAgc3VidWlsZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGlmIChuYXZMaS5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGkgPSBuYXZMaTIubGVuZ3RoIC0gMzsgaSA+IDE7IGktLSkge1xuICAgICAgICAoZnVuY3Rpb24gKHJzKSB7XG4gICAgICAgICAgc3VidWlsZC5xdWVyeVNlbGVjdG9yKFwidWxcIikuYXBwZW5kQ2hpbGQocnMpO1xuICAgICAgICB9KShuYXZMaTJbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gY2hpbGQubGVuZ3RoIC0gMTsgaSA+IGNoaWxkLmxlbmd0aCAtIDM7IGktLSkge1xuICAgICAgKGZ1bmN0aW9uIChycykge1xuICAgICAgICBpZiAocnMpIHtcbiAgICAgICAgICBzdWJ1aWxkLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHJzLCBzdWJ1aWxkKTtcbiAgICAgICAgfVxuICAgICAgfSkoY2hpbGRbaV0pO1xuICAgIH1cbiAgfVxufVxuLyogcGVybWV0IGRlIHJlZHVpcmUgbGVzIG5hdiBlbiBkZXNzb3VzIGRlcyBicmVha3BvaW50IGVnYWxlIDEyMDBweCAqL1xuZnVuY3Rpb24gY29weU5vZGUoYnApIHtcbiAgbGV0IGNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdWItYnVpbGQgPiB1bCA+IGxpIFwiKTtcbiAgbGV0IG5hdkxpID0gQXJyYXkuZnJvbShoZWFkZXIucXVlcnlTZWxlY3RvckFsbChcIm5hdiAubmF2LWxpc3QgPiBsaVwiKSk7XG4gIGlmIChicC5tYXRjaGVzKSB7XG4gICAgc3VidWlsZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGlmIChuYXZMaS5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGkgPSBuYXZMaS5sZW5ndGggLSAzOyBpID4gMzsgaS0tKSB7XG4gICAgICAgIChmdW5jdGlvbiAocnMpIHtcbiAgICAgICAgICBzdWJ1aWxkLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5hcHBlbmRDaGlsZChycyk7XG4gICAgICAgIH0pKG5hdkxpW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgY2ggb2YgY2hpbGQpIHtcbiAgICAgIChmdW5jdGlvbiAocnMpIHtcbiAgICAgICAgc3VidWlsZC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShycywgc3VidWlsZCk7XG4gICAgICB9KShjaCk7XG4gICAgfVxuICAgIHN1YnVpbGQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlYnVpbGROYXYoKSB7XG4gIGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBpZiAod2luZG93V2lkdGggPiA5OTIgJiYgd2luZG93V2lkdGggPCAxMjAxKSB7XG4gICAgY29weU5vZGUoeyBtYXRjaGVzOiB0cnVlIH0pO1xuICB9XG4gIGlmICh3aW5kb3dXaWR0aCA8IDk5MiAmJiB3aW5kb3dXaWR0aCA+PSA3NjgpIHtcbiAgICBjb3B5Tm9kZTIoeyBtYXRjaGVzOiB0cnVlIH0pO1xuICB9XG4gIGlmICh3aW5kb3dXaWR0aCA8PSA3NjgpIHtcbiAgICBjb3B5Tm9kZSh7IG1hdGNoZXM6IGZhbHNlIH0pO1xuICB9XG59XG4vKiBnZXN0aW9uIGRlIGxhIG5hdmlnYXRpb24gYXByw6hzIGxlIGNoYXJnZW1lbnQgZGUgbGEgcGFnZSAqL1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChldmVudCkgPT4ge1xuICByZWJ1aWxkTmF2KCk7XG59KTtcblxuLyogcGVybWV0IGRlIGfDqXJlciBsZXMgbWVudSBkZXJvdWxhbnQgc3VyIHBldGl0IMOpY3JhbiBhdSBjbGljayBkdSBidXJnZXIqL1xuZnVuY3Rpb24gc2V0VG9nZ2xlVWwoKSB7XG4gIHZhciBzdWJNZW51ID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpc3QtbW9iaWxlIC5zdWItYWx0ID4gYVwiKTtcbiAgaWYgKHN1Yk1lbnUpIHtcbiAgICBmb3IgKGxldCBzdWIgb2Ygc3ViTWVudSkge1xuICAgICAgc3ViLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHZhciBhbGwgPSBzdWIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgc3ViLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC50YWdOYW1lICsgXCIgPiAuc3ViLWFsdC0tb3BlbiA+IGFcIlxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChhbGwgJiYgYWxsLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAobGV0IGxpIG9mIGFsbCkge1xuICAgICAgICAgICAgKGZ1bmN0aW9uIChncikge1xuICAgICAgICAgICAgICBpZiAoZ3IgPT09IHN1Yikge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzYW1lXCIsIGxpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cnVlSGVpZ2h0KGdyKTtcbiAgICAgICAgICAgICAgICBnci5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJzdWItYWx0LS1vcGVuXCIpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGxpc3QgPVxuICAgICAgICAgICAgICAgICAgZ3IucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN1Yi1hbHQtLW9wZW4gPiBhXCIpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3ViXCIsIGdyKTtcbiAgICAgICAgICAgICAgICBpZiAobGlzdCAmJiBsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgc291cyBvZiBsaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRydWVIZWlnaHQoc291cyk7XG4gICAgICAgICAgICAgICAgICAgIHNvdXMucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwic3ViLWFsdC0tb3BlblwiKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKGxpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdHJ1ZUhlaWdodChzdWIpO1xuICAgICAgICBzdWIucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwic3ViLWFsdC0tb3BlblwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuLyogZ2VyZSBsZSBtYXgtaGVpZ2h0IGRlcyB1bCBhdSBjbGljayBwb3VyIGxlcyB0cmFuc2l0aW9uIGRlIGZlcm1ldHVyZSBldCBkJ291dmVydHVyZSBkZXMgYWNjb3JkZW9uKi9cbmZ1bmN0aW9uIHRydWVIZWlnaHQoYSkge1xuICB2YXIgcGFyZW50ID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpc3QtbW9iaWxlXCIpO1xuICB2YXIgdWxOZXh0ID0gYS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmICh1bE5leHQgJiYgcGFyZW50KSB7XG4gICAgaWYgKHVsTmV4dCkge1xuICAgICAgaWYgKHVsTmV4dC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICAgICAgdWxOZXh0LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1bE5leHQuc3R5bGUubWF4SGVpZ2h0ID0gdWxOZXh0LnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcInVsbmV4dCBuJ2V4aXN0ZSBwYXNcIik7XG4gIH1cbn1cblxuLyogZml4ZSBsZSBtZW51IGF1IGRlc3N1cyAqL1xuY29uc3Qgb25zY3JvbGwgPSAoZWwsIGxpc3RlbmVyKSA9PiB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGlzdGVuZXIpO1xufTtcbnZhciBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsdW1iaW5nLW5hdmJhclwiKTtcblxuaWYgKG5hdikge1xuICBsZXQgaGVhZGVyID0gbmF2Lm9mZnNldFRvcDtcbiAgY29uc3QgZml4ZWRUb3AgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IGhlYWRlcikge1xuICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJwbHVtYmluZy1uYXZiYXItLWZpeGVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcInBsdW1iaW5nLW5hdmJhci0tZml4ZWRcIik7XG4gICAgfVxuICB9O1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZml4ZWRUb3ApO1xuICBvbnNjcm9sbChkb2N1bWVudCwgZml4ZWRUb3ApO1xufVxuXG4vKiBwb3AgdXAgcmVjaGVyY2hlICovXG5sZXQgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtbGlua1wiKTtcbmxldCBmZXJtZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZGUtc2VhcmNoXCIpO1xubGV0IGJsb2NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1wb3AtdXBcIik7XG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2ZVNlYXJjaCk7XG5mZXJtZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2ZVNlYXJjaCk7XG5cbmZ1bmN0aW9uIGFjdGl2ZVNlYXJjaCgpIHtcbiAgYmxvY1NlYXJjaC5jbGFzc0xpc3QudG9nZ2xlKFwic2VhcmNoLXBvcC11cC0tc2hvd1wiKTtcbn1cbiJdLCJuYW1lcyI6WyJzZWxlY3QiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyIiwidWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9nZ2xlTmF2IiwiY291bnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYWRkIiwiaGlkZVNjcm9sbEJhciIsInJlbW92ZSIsInNldFRvZ2dsZVVsIiwic21hbGwiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiaGlkZU1lbnVTTSIsImJwIiwibWF0Y2hlcyIsInJlYnVpbGROYXYiLCJoaWRlIiwiYm9keSIsInN0eWxlIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJmaXJzdCIsImNvcHlOb2RlIiwic2Vjb25kIiwiY29weU5vZGUyIiwic3VidWlsZCIsIm5hdkxpIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiY2hpbGQiLCJuYXZMaTIiLCJkaXNwbGF5IiwiaSIsInJzIiwiYXBwZW5kQ2hpbGQiLCJwYXJlbnRFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiY2giLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJldmVudCIsInN1Yk1lbnUiLCJzdWIiLCJhbGwiLCJ0YWdOYW1lIiwibGkiLCJnciIsInRydWVIZWlnaHQiLCJsaXN0Iiwic291cyIsImEiLCJwYXJlbnQiLCJ1bE5leHQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJtYXhIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjb25zb2xlIiwiZXJyb3IiLCJvbnNjcm9sbCIsImVsIiwibGlzdGVuZXIiLCJuYXYiLCJvZmZzZXRUb3AiLCJmaXhlZFRvcCIsInBhZ2VZT2Zmc2V0Iiwic2VhcmNoIiwiZmVybWVyIiwiYmxvY1NlYXJjaCIsImFjdGl2ZVNlYXJjaCJdLCJzb3VyY2VSb290IjoiIn0=
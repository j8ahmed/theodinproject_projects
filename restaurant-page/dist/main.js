/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./restaurant-page/src/main.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./restaurant-page/src/main.scss ***!
  \********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Globals */\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  background: #E2E8F0;\n  color: #000;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  min-height: 100vh;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nheader {\n  padding: 1rem;\n  background: #198754;\n}\nheader h1 {\n  margin: 0;\n  padding: 0;\n  color: #FFF;\n}\n\nmain {\n  height: min(600px, 80vh);\n  display: grid;\n  justify-content: center;\n  align-content: center;\n}\nmain #display {\n  height: 2rem;\n}\nmain #btn-cont {\n  margin-top: 1rem;\n  display: flex;\n  justify-content: flex-end;\n}\n\ntable {\n  margin: 2rem;\n  border-collapse: collapse;\n  border: 3px solid #000;\n}\ntable td {\n  height: 5rem;\n  width: 5rem;\n  justify-content: center;\n  align-self: center;\n  border: 3px solid #000;\n  font-size: 4rem;\n  line-height: 5rem;\n  text-align: center;\n  padding: 0;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./restaurant-page/src/main.scss"],"names":[],"mappings":"AAgBA,YAAA;AAEA;EACE,sBAAA;AAhBF;;AAmBA;EACE,UAAA;EACA,SAAA;EACA,mBArBiB;EAsBjB,WAxBY;EAyBZ,0JAAA;EAEA,iBAAA;AAjBF;;AAoBA;EACE,eAAA;AAjBF;;AAoBA;EACE,aAAA;EACA,mBAjCW;AAgBb;AAmBE;EACE,SAAA;EACA,UAAA;EACA,WA1CU;AAyBd;;AAqBA;EACE,wBAAA;EACA,aAAA;EACA,uBAAA;EACA,qBAAA;AAlBF;AAoBE;EACE,YAAA;AAlBJ;AAqBE;EACE,gBAAA;EACA,aAAA;EACA,yBAAA;AAnBJ;;AAuBA;EACE,YAAA;EACA,yBAAA;EACA,sBAAA;AApBF;AAsBE;EACE,YAAA;EACA,WAAA;EACA,uBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,eAAA;AApBJ","sourcesContent":["\r\n$theme-white: #FFF;\r\n$theme-black: #000;\r\n$theme-grey: #636363;\r\n$theme-grey-light: #E2E8F0;\r\n$theme-main: #198754;\r\n$theme-accent: #f0b429;\r\n\r\n$text-black: $theme-black;\r\n$text-white: $theme-white;\r\n$text-grey:  $theme-grey;\r\n$text-link-hover:  $theme-accent;\r\n\r\n$theme-btn-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3);\r\n$theme-shadow: 0px 10px 10px 0px rgba(0,0,0,0.2);\r\n\r\n/* Globals */\r\n\r\n*{\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody{\r\n  padding: 0;\r\n  margin: 0;\r\n  background: $theme-grey-light;\r\n  color: $theme-black;\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n\r\n  min-height: 100vh;\r\n}\r\n\r\nbutton{\r\n  cursor: pointer;\r\n}\r\n\r\nheader{\r\n  padding: 1rem;\r\n  background: $theme-main;\r\n\r\n  h1{\r\n    margin: 0;\r\n    padding: 0;\r\n    color: $text-white;\r\n  }\r\n}\r\n\r\nmain{\r\n  height: min(600px, 80vh);\r\n  display: grid;\r\n  justify-content: center;\r\n  align-content: center;\r\n\r\n  #display{\r\n    height: 2rem;\r\n  }\r\n\r\n  #btn-cont{\r\n    margin-top: 1rem;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n  }\r\n}\r\n\r\ntable{\r\n  margin: 2rem;\r\n  border-collapse: collapse;\r\n  border: 3px solid $theme-black;\r\n\r\n  td{\r\n    height: 5rem;\r\n    width: 5rem;\r\n    justify-content: center;\r\n    align-self: center;\r\n    border: 3px solid $theme-black;\r\n    font-size: 4rem;\r\n    line-height: 5rem;\r\n    text-align: center;\r\n    padding: 0;\r\n    cursor: pointer;\r\n  }\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./restaurant-page/src/main.scss":
/*!***************************************!*\
  !*** ./restaurant-page/src/main.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./restaurant-page/src/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./restaurant-page/src/style.js":
/*!**************************************!*\
  !*** ./restaurant-page/src/style.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./restaurant-page/src/main.scss");






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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./restaurant-page/src/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./restaurant-page/src/style.js");

/* 
 * Code Outline:
 * 
 *   
  */

(function initGameboard(){
  const gameboard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]

  const gameState = {
    turn: '&times;',
    result: '',
    message: '',
    complete: false,
  }


  /* ----- Core Functionality ----- */

  const player1 = player('Player 1', '&times;')
  const player2 = player('Player 2', '&#9675;')

  addInputEventListeners()
  addStartEventListener()
  addResetEventListener()

  /* ------------------------------ */

  /* ----- Utilities ----- */

  function player(name, value){
    return {name, value}
  }

  function checkForWinner(gameboard){

    const checkRow = (function checkRows(){
      let val, win = false;

      for(let i=0; i < gameboard.length; ++i){
	val = gameboard[i][0]
	if(!val) continue

	let result = true
	for(let j=0; j < gameboard[i].length; ++j){
	  if(gameboard[i][j] !== val){
	    result = false
	    break
	  }
	}

	if(result){
	  win = true
	  break
	} 
      }
      if(win){
	const winner = val === player1.value ? player1.name : player2.name
	return {
	  result: true,
	  value: winner,
	  message: "Winner: " + winner,
	}
      }
      return {result: false}
    })()

    const checkCol = (function checkCols(){
      let val, win= false;

      for(let i=0; i < gameboard[0].length; ++i){
	val = gameboard[0][i]
	if(!val) continue

	let result = true
	for(let j=0; j < gameboard.length; ++j){
	  if(gameboard[j][i] !== val){
	    result = false
	    break
	  }
	}

	if(result){
	  win = true
	  break
	} 
      }
      if(win){
	const winner = val === player1.value ? player1.name : player2.name
	return {
	  result: true, 
	  value: winner,
	  message: "Winner: " + winner,
	}
      }
      return {result: false}
    })()

    const checkDiag = (function checkDiags(){
      const len = gameboard.length
      let winner = false
      let valTL = gameboard[0][0]
      let valTR = gameboard[0][2]
      let resultTL = true
      let resultTR = true

      for(let i=1; i < len; ++i){
	if(!valTL) resultTL = false
	if(!valTR) resultTR = false
	if(!valTL && !valTR) break

	if(gameboard[i][i] !== valTL){
	  resultTL = false
	}

	if(gameboard[i][(len - 1) - i] !== valTR){
	  resultTR = false
	}
      }

      if(resultTL){
	const winner = player1.value === valTL ? player1.name : player2.name
	return {
	  result: true, 
	  value: winner,
	  message: "Winner: " + winner,
	}
      }
      if(resultTR){
	const winner = player1.value === valTR ? player1.name : player2.name
	return {
	  result: true, 
	  value: winner,
	  message: "Winner: " + winner,
	}
      }
      return {result: false}
    })()

    const checkFull = (function checkFull(){
      let blankSpace = false

      main:
      for(let i=0; i < gameboard.length; ++i){
	for(let j=0; j < gameboard.length; ++j){
	  if(!gameboard[i][j]){
	    blankSpace = true
	    break main
	  }
	}
      }
      if(blankSpace) return false
      return true
    })()

    if(checkRow.result) return checkRow
    if(checkCol.result) return checkCol
    if(checkDiag.result) return checkDiag
    if(checkFull) return {result: true, value: 'Tie', message: 'Tie Game'}
    return {result: false}
  }

  // Add display messages based on results.
  function updateDisplay(){
    const display = document.getElementById('display')
    display.innerHTML = gameState.message
  }

  function updateState(newState){
    for(const key in gameState){
      if(newState[key] !== undefined){
	gameState[key] = newState[key]
      }
    }

    // Game Over
    if(gameState.complete){
      removeGameboardEventListeners()
    }

    updateDisplay()
  }

  /* Event Listeners */

  function addStartEventListener(){
    const startBtn = document.getElementById('start-btn')
    startBtn.addEventListener('click', startGame)
  }

  function addResetEventListener(){
    const resetBtn = document.getElementById('reset-btn')
    resetBtn.addEventListener('click', resetGame)
  }

  function addInputEventListeners(){
    const inputs = document.querySelectorAll('input')

    inputs.forEach(input => {
      input.addEventListener('change', changePlayerName)
    })
    
  }
  function addGameboardEventListeners(){
    const cellElements = document.querySelectorAll('td')
    cellElements.forEach(element => {
      element.addEventListener('click', clickGameCell)
    })
  }

  function removeGameboardEventListeners(){
    const cellElements = document.querySelectorAll('td')
    cellElements.forEach(element => {
      element.removeEventListener('click', clickGameCell)
    })
  }

  function clickGameCell(e){
    const {row, col} = e.target.dataset

    gameboard[row][col] = gameState.turn === player1.value ? 
      player1.value : player2.value

    e.target.innerHTML = gameboard[row][col]
    e.target.removeEventListener('click', clickGameCell)

    const nextTurn = gameState.turn === player1.value ? player2.value : player1.value
    const message = (nextTurn === player1.value ? player1.name : player2.name) + "'s Turn"
    const gameResult = checkForWinner(gameboard)
    if(gameResult.result){
      updateState({turn: '', complete: true, message: gameResult.message})
    }
    else
      updateState({turn: nextTurn, complete: gameResult.result, message})
  }

  function changePlayerName(e){
    console.log('input change handle called')
    const p = e.target.dataset.player
    const name = e.target.value

    if(p == 1) player1.name = name
    else player2.name = name
  }

  function startGame(e){
    e.target.removeEventListener('click', startGame)
    addGameboardEventListeners()
  }

  function resetGame(){
    for(let i=0; i < gameboard.length; ++i)
      for(let j=0; j < gameboard.length; ++j)
	gameboard[i][j] = ''

    console.log(gameboard)
    const cellElements = document.querySelectorAll('td')
    const inputs = document.querySelectorAll('input')

    cellElements.forEach(element => {
      element.innerHTML = ''
      element.removeEventListener('click', clickGameCell)
    })
    
    cellElements.forEach(element => {
      element.addEventListener('click', clickGameCell)
    })

    inputs.forEach(input => {
      input.value = ''
    })

    updateState({turn: '&times;', result: '', message: '', complete: false })
  }

  /* --------------------- */
  
})()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpQkFBaUIsY0FBYyw2Q0FBNkM7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdHNfdGhlb2RpbnByb2plY3QvLi9yZXN0YXVyYW50LXBhZ2Uvc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly9wcm9qZWN0c190aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHNfdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0c190aGVvZGlucHJvamVjdC8uL3Jlc3RhdXJhbnQtcGFnZS9zcmMvbWFpbi5zY3NzP2FkNDEiLCJ3ZWJwYWNrOi8vcHJvamVjdHNfdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHNfdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3RzX3RoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3RzX3RoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3RzX3RoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHNfdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0c190aGVvZGlucHJvamVjdC8uL3Jlc3RhdXJhbnQtcGFnZS9zcmMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHNfdGhlb2RpbnByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdHNfdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdHNfdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3RzX3RoZW9kaW5wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdHNfdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0c190aGVvZGlucHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdHNfdGhlb2RpbnByb2plY3QvLi9yZXN0YXVyYW50LXBhZ2Uvc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR2xvYmFscyAqL1xcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZDogI0UyRThGMDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQ6ICMxOTg3NTQ7XFxufVxcbmhlYWRlciBoMSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6ICNGRkY7XFxufVxcblxcbm1haW4ge1xcbiAgaGVpZ2h0OiBtaW4oNjAwcHgsIDgwdmgpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5tYWluICNkaXNwbGF5IHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxubWFpbiAjYnRuLWNvbnQge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG50YWJsZSB7XFxuICBtYXJnaW46IDJyZW07XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwMDtcXG59XFxudGFibGUgdGQge1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgd2lkdGg6IDVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBsaW5lLWhlaWdodDogNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc3RhdXJhbnQtcGFnZS9zcmMvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWdCQSxZQUFBO0FBRUE7RUFDRSxzQkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQXJCaUI7RUFzQmpCLFdBeEJZO0VBeUJaLDBKQUFBO0VBRUEsaUJBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsZUFBQTtBQWpCRjs7QUFvQkE7RUFDRSxhQUFBO0VBQ0EsbUJBakNXO0FBZ0JiO0FBbUJFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQTFDVTtBQXlCZDs7QUFxQkE7RUFDRSx3QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBbEJGO0FBb0JFO0VBQ0UsWUFBQTtBQWxCSjtBQXFCRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBbkJKOztBQXVCQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBcEJGO0FBc0JFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBcEJKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbiR0aGVtZS13aGl0ZTogI0ZGRjtcXHJcXG4kdGhlbWUtYmxhY2s6ICMwMDA7XFxyXFxuJHRoZW1lLWdyZXk6ICM2MzYzNjM7XFxyXFxuJHRoZW1lLWdyZXktbGlnaHQ6ICNFMkU4RjA7XFxyXFxuJHRoZW1lLW1haW46ICMxOTg3NTQ7XFxyXFxuJHRoZW1lLWFjY2VudDogI2YwYjQyOTtcXHJcXG5cXHJcXG4kdGV4dC1ibGFjazogJHRoZW1lLWJsYWNrO1xcclxcbiR0ZXh0LXdoaXRlOiAkdGhlbWUtd2hpdGU7XFxyXFxuJHRleHQtZ3JleTogICR0aGVtZS1ncmV5O1xcclxcbiR0ZXh0LWxpbmstaG92ZXI6ICAkdGhlbWUtYWNjZW50O1xcclxcblxcclxcbiR0aGVtZS1idG4tc2hhZG93OiAycHggMnB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjMpO1xcclxcbiR0aGVtZS1zaGFkb3c6IDBweCAxMHB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG5cXHJcXG4vKiBHbG9iYWxzICovXFxyXFxuXFxyXFxuKntcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYmFja2dyb3VuZDogJHRoZW1lLWdyZXktbGlnaHQ7XFxyXFxuICBjb2xvcjogJHRoZW1lLWJsYWNrO1xcclxcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXHJcXG5cXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b257XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlcntcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiAkdGhlbWUtbWFpbjtcXHJcXG5cXHJcXG4gIGgxe1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGNvbG9yOiAkdGV4dC13aGl0ZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxubWFpbntcXHJcXG4gIGhlaWdodDogbWluKDYwMHB4LCA4MHZoKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICNkaXNwbGF5e1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjYnRuLWNvbnR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbnRhYmxle1xcclxcbiAgbWFyZ2luOiAycmVtO1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICR0aGVtZS1ibGFjaztcXHJcXG5cXHJcXG4gIHRke1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIHdpZHRoOiA1cmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkdGhlbWUtYmxhY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL21haW4uc2NzcydcblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJ1xyXG4vKiBcclxuICogQ29kZSBPdXRsaW5lOlxyXG4gKiBcclxuICogICBcclxuICAqL1xyXG5cclxuKGZ1bmN0aW9uIGluaXRHYW1lYm9hcmQoKXtcclxuICBjb25zdCBnYW1lYm9hcmQgPSBbXHJcbiAgICBbJycsICcnLCAnJ10sXHJcbiAgICBbJycsICcnLCAnJ10sXHJcbiAgICBbJycsICcnLCAnJ10sXHJcbiAgXVxyXG5cclxuICBjb25zdCBnYW1lU3RhdGUgPSB7XHJcbiAgICB0dXJuOiAnJnRpbWVzOycsXHJcbiAgICByZXN1bHQ6ICcnLFxyXG4gICAgbWVzc2FnZTogJycsXHJcbiAgICBjb21wbGV0ZTogZmFsc2UsXHJcbiAgfVxyXG5cclxuXHJcbiAgLyogLS0tLS0gQ29yZSBGdW5jdGlvbmFsaXR5IC0tLS0tICovXHJcblxyXG4gIGNvbnN0IHBsYXllcjEgPSBwbGF5ZXIoJ1BsYXllciAxJywgJyZ0aW1lczsnKVxyXG4gIGNvbnN0IHBsYXllcjIgPSBwbGF5ZXIoJ1BsYXllciAyJywgJyYjOTY3NTsnKVxyXG5cclxuICBhZGRJbnB1dEV2ZW50TGlzdGVuZXJzKClcclxuICBhZGRTdGFydEV2ZW50TGlzdGVuZXIoKVxyXG4gIGFkZFJlc2V0RXZlbnRMaXN0ZW5lcigpXHJcblxyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuICAvKiAtLS0tLSBVdGlsaXRpZXMgLS0tLS0gKi9cclxuXHJcbiAgZnVuY3Rpb24gcGxheWVyKG5hbWUsIHZhbHVlKXtcclxuICAgIHJldHVybiB7bmFtZSwgdmFsdWV9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja0Zvcldpbm5lcihnYW1lYm9hcmQpe1xyXG5cclxuICAgIGNvbnN0IGNoZWNrUm93ID0gKGZ1bmN0aW9uIGNoZWNrUm93cygpe1xyXG4gICAgICBsZXQgdmFsLCB3aW4gPSBmYWxzZTtcclxuXHJcbiAgICAgIGZvcihsZXQgaT0wOyBpIDwgZ2FtZWJvYXJkLmxlbmd0aDsgKytpKXtcclxuXHR2YWwgPSBnYW1lYm9hcmRbaV1bMF1cclxuXHRpZighdmFsKSBjb250aW51ZVxyXG5cclxuXHRsZXQgcmVzdWx0ID0gdHJ1ZVxyXG5cdGZvcihsZXQgaj0wOyBqIDwgZ2FtZWJvYXJkW2ldLmxlbmd0aDsgKytqKXtcclxuXHQgIGlmKGdhbWVib2FyZFtpXVtqXSAhPT0gdmFsKXtcclxuXHQgICAgcmVzdWx0ID0gZmFsc2VcclxuXHQgICAgYnJlYWtcclxuXHQgIH1cclxuXHR9XHJcblxyXG5cdGlmKHJlc3VsdCl7XHJcblx0ICB3aW4gPSB0cnVlXHJcblx0ICBicmVha1xyXG5cdH0gXHJcbiAgICAgIH1cclxuICAgICAgaWYod2luKXtcclxuXHRjb25zdCB3aW5uZXIgPSB2YWwgPT09IHBsYXllcjEudmFsdWUgPyBwbGF5ZXIxLm5hbWUgOiBwbGF5ZXIyLm5hbWVcclxuXHRyZXR1cm4ge1xyXG5cdCAgcmVzdWx0OiB0cnVlLFxyXG5cdCAgdmFsdWU6IHdpbm5lcixcclxuXHQgIG1lc3NhZ2U6IFwiV2lubmVyOiBcIiArIHdpbm5lcixcclxuXHR9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtyZXN1bHQ6IGZhbHNlfVxyXG4gICAgfSkoKVxyXG5cclxuICAgIGNvbnN0IGNoZWNrQ29sID0gKGZ1bmN0aW9uIGNoZWNrQ29scygpe1xyXG4gICAgICBsZXQgdmFsLCB3aW49IGZhbHNlO1xyXG5cclxuICAgICAgZm9yKGxldCBpPTA7IGkgPCBnYW1lYm9hcmRbMF0ubGVuZ3RoOyArK2kpe1xyXG5cdHZhbCA9IGdhbWVib2FyZFswXVtpXVxyXG5cdGlmKCF2YWwpIGNvbnRpbnVlXHJcblxyXG5cdGxldCByZXN1bHQgPSB0cnVlXHJcblx0Zm9yKGxldCBqPTA7IGogPCBnYW1lYm9hcmQubGVuZ3RoOyArK2ope1xyXG5cdCAgaWYoZ2FtZWJvYXJkW2pdW2ldICE9PSB2YWwpe1xyXG5cdCAgICByZXN1bHQgPSBmYWxzZVxyXG5cdCAgICBicmVha1xyXG5cdCAgfVxyXG5cdH1cclxuXHJcblx0aWYocmVzdWx0KXtcclxuXHQgIHdpbiA9IHRydWVcclxuXHQgIGJyZWFrXHJcblx0fSBcclxuICAgICAgfVxyXG4gICAgICBpZih3aW4pe1xyXG5cdGNvbnN0IHdpbm5lciA9IHZhbCA9PT0gcGxheWVyMS52YWx1ZSA/IHBsYXllcjEubmFtZSA6IHBsYXllcjIubmFtZVxyXG5cdHJldHVybiB7XHJcblx0ICByZXN1bHQ6IHRydWUsIFxyXG5cdCAgdmFsdWU6IHdpbm5lcixcclxuXHQgIG1lc3NhZ2U6IFwiV2lubmVyOiBcIiArIHdpbm5lcixcclxuXHR9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtyZXN1bHQ6IGZhbHNlfVxyXG4gICAgfSkoKVxyXG5cclxuICAgIGNvbnN0IGNoZWNrRGlhZyA9IChmdW5jdGlvbiBjaGVja0RpYWdzKCl7XHJcbiAgICAgIGNvbnN0IGxlbiA9IGdhbWVib2FyZC5sZW5ndGhcclxuICAgICAgbGV0IHdpbm5lciA9IGZhbHNlXHJcbiAgICAgIGxldCB2YWxUTCA9IGdhbWVib2FyZFswXVswXVxyXG4gICAgICBsZXQgdmFsVFIgPSBnYW1lYm9hcmRbMF1bMl1cclxuICAgICAgbGV0IHJlc3VsdFRMID0gdHJ1ZVxyXG4gICAgICBsZXQgcmVzdWx0VFIgPSB0cnVlXHJcblxyXG4gICAgICBmb3IobGV0IGk9MTsgaSA8IGxlbjsgKytpKXtcclxuXHRpZighdmFsVEwpIHJlc3VsdFRMID0gZmFsc2VcclxuXHRpZighdmFsVFIpIHJlc3VsdFRSID0gZmFsc2VcclxuXHRpZighdmFsVEwgJiYgIXZhbFRSKSBicmVha1xyXG5cclxuXHRpZihnYW1lYm9hcmRbaV1baV0gIT09IHZhbFRMKXtcclxuXHQgIHJlc3VsdFRMID0gZmFsc2VcclxuXHR9XHJcblxyXG5cdGlmKGdhbWVib2FyZFtpXVsobGVuIC0gMSkgLSBpXSAhPT0gdmFsVFIpe1xyXG5cdCAgcmVzdWx0VFIgPSBmYWxzZVxyXG5cdH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYocmVzdWx0VEwpe1xyXG5cdGNvbnN0IHdpbm5lciA9IHBsYXllcjEudmFsdWUgPT09IHZhbFRMID8gcGxheWVyMS5uYW1lIDogcGxheWVyMi5uYW1lXHJcblx0cmV0dXJuIHtcclxuXHQgIHJlc3VsdDogdHJ1ZSwgXHJcblx0ICB2YWx1ZTogd2lubmVyLFxyXG5cdCAgbWVzc2FnZTogXCJXaW5uZXI6IFwiICsgd2lubmVyLFxyXG5cdH1cclxuICAgICAgfVxyXG4gICAgICBpZihyZXN1bHRUUil7XHJcblx0Y29uc3Qgd2lubmVyID0gcGxheWVyMS52YWx1ZSA9PT0gdmFsVFIgPyBwbGF5ZXIxLm5hbWUgOiBwbGF5ZXIyLm5hbWVcclxuXHRyZXR1cm4ge1xyXG5cdCAgcmVzdWx0OiB0cnVlLCBcclxuXHQgIHZhbHVlOiB3aW5uZXIsXHJcblx0ICBtZXNzYWdlOiBcIldpbm5lcjogXCIgKyB3aW5uZXIsXHJcblx0fVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7cmVzdWx0OiBmYWxzZX1cclxuICAgIH0pKClcclxuXHJcbiAgICBjb25zdCBjaGVja0Z1bGwgPSAoZnVuY3Rpb24gY2hlY2tGdWxsKCl7XHJcbiAgICAgIGxldCBibGFua1NwYWNlID0gZmFsc2VcclxuXHJcbiAgICAgIG1haW46XHJcbiAgICAgIGZvcihsZXQgaT0wOyBpIDwgZ2FtZWJvYXJkLmxlbmd0aDsgKytpKXtcclxuXHRmb3IobGV0IGo9MDsgaiA8IGdhbWVib2FyZC5sZW5ndGg7ICsrail7XHJcblx0ICBpZighZ2FtZWJvYXJkW2ldW2pdKXtcclxuXHQgICAgYmxhbmtTcGFjZSA9IHRydWVcclxuXHQgICAgYnJlYWsgbWFpblxyXG5cdCAgfVxyXG5cdH1cclxuICAgICAgfVxyXG4gICAgICBpZihibGFua1NwYWNlKSByZXR1cm4gZmFsc2VcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0pKClcclxuXHJcbiAgICBpZihjaGVja1Jvdy5yZXN1bHQpIHJldHVybiBjaGVja1Jvd1xyXG4gICAgaWYoY2hlY2tDb2wucmVzdWx0KSByZXR1cm4gY2hlY2tDb2xcclxuICAgIGlmKGNoZWNrRGlhZy5yZXN1bHQpIHJldHVybiBjaGVja0RpYWdcclxuICAgIGlmKGNoZWNrRnVsbCkgcmV0dXJuIHtyZXN1bHQ6IHRydWUsIHZhbHVlOiAnVGllJywgbWVzc2FnZTogJ1RpZSBHYW1lJ31cclxuICAgIHJldHVybiB7cmVzdWx0OiBmYWxzZX1cclxuICB9XHJcblxyXG4gIC8vIEFkZCBkaXNwbGF5IG1lc3NhZ2VzIGJhc2VkIG9uIHJlc3VsdHMuXHJcbiAgZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpe1xyXG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5JylcclxuICAgIGRpc3BsYXkuaW5uZXJIVE1MID0gZ2FtZVN0YXRlLm1lc3NhZ2VcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKG5ld1N0YXRlKXtcclxuICAgIGZvcihjb25zdCBrZXkgaW4gZ2FtZVN0YXRlKXtcclxuICAgICAgaWYobmV3U3RhdGVba2V5XSAhPT0gdW5kZWZpbmVkKXtcclxuXHRnYW1lU3RhdGVba2V5XSA9IG5ld1N0YXRlW2tleV1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdhbWUgT3ZlclxyXG4gICAgaWYoZ2FtZVN0YXRlLmNvbXBsZXRlKXtcclxuICAgICAgcmVtb3ZlR2FtZWJvYXJkRXZlbnRMaXN0ZW5lcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURpc3BsYXkoKVxyXG4gIH1cclxuXHJcbiAgLyogRXZlbnQgTGlzdGVuZXJzICovXHJcblxyXG4gIGZ1bmN0aW9uIGFkZFN0YXJ0RXZlbnRMaXN0ZW5lcigpe1xyXG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnRuJylcclxuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkUmVzZXRFdmVudExpc3RlbmVyKCl7XHJcbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldC1idG4nKVxyXG4gICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEdhbWUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRJbnB1dEV2ZW50TGlzdGVuZXJzKCl7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXHJcblxyXG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VQbGF5ZXJOYW1lKVxyXG4gICAgfSlcclxuICAgIFxyXG4gIH1cclxuICBmdW5jdGlvbiBhZGRHYW1lYm9hcmRFdmVudExpc3RlbmVycygpe1xyXG4gICAgY29uc3QgY2VsbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGQnKVxyXG4gICAgY2VsbEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0dhbWVDZWxsKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUdhbWVib2FyZEV2ZW50TGlzdGVuZXJzKCl7XHJcbiAgICBjb25zdCBjZWxsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpXHJcbiAgICBjZWxsRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrR2FtZUNlbGwpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xpY2tHYW1lQ2VsbChlKXtcclxuICAgIGNvbnN0IHtyb3csIGNvbH0gPSBlLnRhcmdldC5kYXRhc2V0XHJcblxyXG4gICAgZ2FtZWJvYXJkW3Jvd11bY29sXSA9IGdhbWVTdGF0ZS50dXJuID09PSBwbGF5ZXIxLnZhbHVlID8gXHJcbiAgICAgIHBsYXllcjEudmFsdWUgOiBwbGF5ZXIyLnZhbHVlXHJcblxyXG4gICAgZS50YXJnZXQuaW5uZXJIVE1MID0gZ2FtZWJvYXJkW3Jvd11bY29sXVxyXG4gICAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0dhbWVDZWxsKVxyXG5cclxuICAgIGNvbnN0IG5leHRUdXJuID0gZ2FtZVN0YXRlLnR1cm4gPT09IHBsYXllcjEudmFsdWUgPyBwbGF5ZXIyLnZhbHVlIDogcGxheWVyMS52YWx1ZVxyXG4gICAgY29uc3QgbWVzc2FnZSA9IChuZXh0VHVybiA9PT0gcGxheWVyMS52YWx1ZSA/IHBsYXllcjEubmFtZSA6IHBsYXllcjIubmFtZSkgKyBcIidzIFR1cm5cIlxyXG4gICAgY29uc3QgZ2FtZVJlc3VsdCA9IGNoZWNrRm9yV2lubmVyKGdhbWVib2FyZClcclxuICAgIGlmKGdhbWVSZXN1bHQucmVzdWx0KXtcclxuICAgICAgdXBkYXRlU3RhdGUoe3R1cm46ICcnLCBjb21wbGV0ZTogdHJ1ZSwgbWVzc2FnZTogZ2FtZVJlc3VsdC5tZXNzYWdlfSlcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgdXBkYXRlU3RhdGUoe3R1cm46IG5leHRUdXJuLCBjb21wbGV0ZTogZ2FtZVJlc3VsdC5yZXN1bHQsIG1lc3NhZ2V9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlUGxheWVyTmFtZShlKXtcclxuICAgIGNvbnNvbGUubG9nKCdpbnB1dCBjaGFuZ2UgaGFuZGxlIGNhbGxlZCcpXHJcbiAgICBjb25zdCBwID0gZS50YXJnZXQuZGF0YXNldC5wbGF5ZXJcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC52YWx1ZVxyXG5cclxuICAgIGlmKHAgPT0gMSkgcGxheWVyMS5uYW1lID0gbmFtZVxyXG4gICAgZWxzZSBwbGF5ZXIyLm5hbWUgPSBuYW1lXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzdGFydEdhbWUoZSl7XHJcbiAgICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSlcclxuICAgIGFkZEdhbWVib2FyZEV2ZW50TGlzdGVuZXJzKClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0R2FtZSgpe1xyXG4gICAgZm9yKGxldCBpPTA7IGkgPCBnYW1lYm9hcmQubGVuZ3RoOyArK2kpXHJcbiAgICAgIGZvcihsZXQgaj0wOyBqIDwgZ2FtZWJvYXJkLmxlbmd0aDsgKytqKVxyXG5cdGdhbWVib2FyZFtpXVtqXSA9ICcnXHJcblxyXG4gICAgY29uc29sZS5sb2coZ2FtZWJvYXJkKVxyXG4gICAgY29uc3QgY2VsbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGQnKVxyXG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVxyXG5cclxuICAgIGNlbGxFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnXHJcbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0dhbWVDZWxsKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY2VsbEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0dhbWVDZWxsKVxyXG4gICAgfSlcclxuXHJcbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gJydcclxuICAgIH0pXHJcblxyXG4gICAgdXBkYXRlU3RhdGUoe3R1cm46ICcmdGltZXM7JywgcmVzdWx0OiAnJywgbWVzc2FnZTogJycsIGNvbXBsZXRlOiBmYWxzZSB9KVxyXG4gIH1cclxuXHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbn0pKClcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
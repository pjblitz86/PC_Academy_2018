/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./task2_loan_calc/src/credit.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./task2_loan_calc/src/AbstractCredit.ts":
/*!***********************************************!*\
  !*** ./task2_loan_calc/src/AbstractCredit.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var AbstractCredit = /** @class */ (function () {
    function AbstractCredit(loanAmount, loanPeriod, interestRate) {
        this.loanAmount = loanAmount;
        this.loanPeriod = loanPeriod;
        this.interestRate = interestRate;
    }
    return AbstractCredit;
}());
/* harmony default export */ __webpack_exports__["default"] = (AbstractCredit);


/***/ }),

/***/ "./task2_loan_calc/src/ConsumerCredit.ts":
/*!***********************************************!*\
  !*** ./task2_loan_calc/src/ConsumerCredit.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AbstractCredit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractCredit */ "./task2_loan_calc/src/AbstractCredit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ConsumerCredit = /** @class */ (function (_super) {
    __extends(ConsumerCredit, _super);
    function ConsumerCredit(loanAmount, loanPeriod, interestRate) {
        return _super.call(this, loanAmount, loanPeriod, interestRate) || this;
    }
    ConsumerCredit.prototype.calculateLoanPerMonth = function () {
        switch (this.interestRate) {
            case "Automobile:9%":
                this.interestRate = (9 / 12).toString();
                break;
            case "Computer:6%":
                this.interestRate = (6 / 12).toString();
                break;
            default:
                this.interestRate = (3 / 12).toString();
                break;
        }
        return "1";
    };
    return ConsumerCredit;
}(_AbstractCredit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ConsumerCredit);


/***/ }),

/***/ "./task2_loan_calc/src/FastCredit.ts":
/*!*******************************************!*\
  !*** ./task2_loan_calc/src/FastCredit.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AbstractCredit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractCredit */ "./task2_loan_calc/src/AbstractCredit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FastCredit = /** @class */ (function (_super) {
    __extends(FastCredit, _super);
    function FastCredit(loanAmount, loanPeriod, interestRate) {
        return _super.call(this, loanAmount, loanPeriod, interestRate) || this;
    }
    FastCredit.prototype.calculateLoanPerMonth = function () {
        return "2";
    };
    return FastCredit;
}(_AbstractCredit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (FastCredit);


/***/ }),

/***/ "./task2_loan_calc/src/MortgageCredit.ts":
/*!***********************************************!*\
  !*** ./task2_loan_calc/src/MortgageCredit.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AbstractCredit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractCredit */ "./task2_loan_calc/src/AbstractCredit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MortgageCredit = /** @class */ (function (_super) {
    __extends(MortgageCredit, _super);
    function MortgageCredit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MortgageCredit.prototype.calculateLoanPerMonth = function () {
        console.log('implementation');
        return "3";
    };
    return MortgageCredit;
}(_AbstractCredit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (MortgageCredit);


/***/ }),

/***/ "./task2_loan_calc/src/credit.ts":
/*!***************************************!*\
  !*** ./task2_loan_calc/src/credit.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConsumerCredit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsumerCredit */ "./task2_loan_calc/src/ConsumerCredit.ts");
/* harmony import */ var _FastCredit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FastCredit */ "./task2_loan_calc/src/FastCredit.ts");
/* harmony import */ var _MortgageCredit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MortgageCredit */ "./task2_loan_calc/src/MortgageCredit.ts");



// form selectors
var consumerCreditForm = document.querySelector('#formCC');
var fastCreditForm = document.querySelector('#formFC');
var mortgageCreditForm = document.querySelector('#formMC');
// forms validation
window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (e) {
            if (form.checkValidity() === false) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}, false);
// Consumer Credit
if (consumerCreditForm) {
    consumerCreditForm.addEventListener('submit', function (e) {
        var loanAmount = document.querySelector('#inputAmountCC').value;
        var loanPeriod = document.querySelector('#inputPeriodCC').value;
        var interestRate = document.querySelector('#selectItemCC').value;
        var payPerMonth = document.querySelector('#loanPaymentCC');
        var consumerCredit = new _ConsumerCredit__WEBPACK_IMPORTED_MODULE_0__["default"](loanAmount, loanPeriod, interestRate);
        payPerMonth.value = consumerCredit.calculateLoanPerMonth();
        console.log(e);
        e.preventDefault();
    });
}
// Fast Credit
if (fastCreditForm) {
    fastCreditForm.addEventListener('submit', function (e) {
        var loanAmount = document.querySelector('#inputAmountFC').value;
        var loanPeriod = document.querySelector('#inputPeriodFC').value;
        var interestRate = document.querySelector('#inputPercFC').value;
        var payPerMonth = document.querySelector('#loanPaymentFC');
        var fastCredit = new _FastCredit__WEBPACK_IMPORTED_MODULE_1__["default"](loanAmount, loanPeriod, interestRate);
        payPerMonth.value = fastCredit.calculateLoanPerMonth();
        console.log(e);
        e.preventDefault();
    });
}
// Mortgage Credit
if (mortgageCreditForm) {
    mortgageCreditForm.addEventListener('submit', function (e) {
        var loanAmount = document.querySelector('#inputAmountMC').value;
        var loanPeriod = document.querySelector('#inputPeriodMC').value;
        var interestRate = document.querySelector('#inputPercMC').value;
        var payPerMonth = document.querySelector('#loanPaymentMC');
        var mortgageCredit = new _MortgageCredit__WEBPACK_IMPORTED_MODULE_2__["default"](loanAmount, loanPeriod, interestRate);
        payPerMonth.value = mortgageCredit.calculateLoanPerMonth();
        console.log(e);
        e.preventDefault();
    });
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdGFzazJfbG9hbl9jYWxjL3NyYy9BYnN0cmFjdENyZWRpdC50cyIsIndlYnBhY2s6Ly8vLi90YXNrMl9sb2FuX2NhbGMvc3JjL0NvbnN1bWVyQ3JlZGl0LnRzIiwid2VicGFjazovLy8uL3Rhc2syX2xvYW5fY2FsYy9zcmMvRmFzdENyZWRpdC50cyIsIndlYnBhY2s6Ly8vLi90YXNrMl9sb2FuX2NhbGMvc3JjL01vcnRnYWdlQ3JlZGl0LnRzIiwid2VicGFjazovLy8uL3Rhc2syX2xvYW5fY2FsYy9zcmMvY3JlZGl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtJQUtFLHdCQUFZLFVBQWtCLEVBQUUsVUFBa0IsRUFBRSxZQUFvQjtRQUN0RSxJQUFJLENBQUMsVUFBVSxHQUFHLFVB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cmFuc3BpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90YXNrMl9sb2FuX2NhbGMvc3JjL2NyZWRpdC50c1wiKTtcbiIsImFic3RyYWN0IGNsYXNzIEFic3RyYWN0Q3JlZGl0IHtcclxuICBsb2FuQW1vdW50OiBzdHJpbmc7XHJcbiAgbG9hblBlcmlvZDogc3RyaW5nXHJcbiAgaW50ZXJlc3RSYXRlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxvYW5BbW91bnQ6IHN0cmluZywgbG9hblBlcmlvZDogc3RyaW5nLCBpbnRlcmVzdFJhdGU6IHN0cmluZykge1xyXG4gICAgdGhpcy5sb2FuQW1vdW50ID0gbG9hbkFtb3VudDtcclxuICAgIHRoaXMubG9hblBlcmlvZCA9IGxvYW5QZXJpb2Q7XHJcbiAgICB0aGlzLmludGVyZXN0UmF0ZSA9IGludGVyZXN0UmF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFic3RyYWN0Q3JlZGl0OyIsImltcG9ydCBBYnN0cmFjdENyZWRpdCBmcm9tICcuL0Fic3RyYWN0Q3JlZGl0JztcclxuaW1wb3J0IElDcmVkaXQgZnJvbSAnLi9JQ3JlZGl0JztcclxuXHJcbmNsYXNzIENvbnN1bWVyQ3JlZGl0IGV4dGVuZHMgQWJzdHJhY3RDcmVkaXQgaW1wbGVtZW50cyBJQ3JlZGl0IHtcclxuXHJcbiAgY29uc3RydWN0b3IobG9hbkFtb3VudDogc3RyaW5nLCBsb2FuUGVyaW9kOiBzdHJpbmcsIGludGVyZXN0UmF0ZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihsb2FuQW1vdW50LCBsb2FuUGVyaW9kLCBpbnRlcmVzdFJhdGUpO1xyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlTG9hblBlck1vbnRoKCk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuaW50ZXJlc3RSYXRlKSB7XHJcbiAgICAgIGNhc2UgXCJBdXRvbW9iaWxlOjklXCI6XHJcbiAgICAgICAgdGhpcy5pbnRlcmVzdFJhdGUgPSAoOSAvIDEyKS50b1N0cmluZygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiQ29tcHV0ZXI6NiVcIjpcclxuICAgICAgICB0aGlzLmludGVyZXN0UmF0ZSA9ICg2IC8gMTIpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhpcy5pbnRlcmVzdFJhdGUgPSAoMyAvIDEyKS50b1N0cmluZygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gXCIxXCI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25zdW1lckNyZWRpdDsiLCJpbXBvcnQgQWJzdHJhY3RDcmVkaXQgZnJvbSAnLi9BYnN0cmFjdENyZWRpdCc7XHJcbmltcG9ydCBJQ3JlZGl0IGZyb20gJy4vSUNyZWRpdCc7XHJcblxyXG5jbGFzcyBGYXN0Q3JlZGl0IGV4dGVuZHMgQWJzdHJhY3RDcmVkaXQgaW1wbGVtZW50cyBJQ3JlZGl0IHtcclxuICBjb25zdHJ1Y3Rvcihsb2FuQW1vdW50OiBzdHJpbmcsIGxvYW5QZXJpb2Q6IHN0cmluZywgaW50ZXJlc3RSYXRlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGxvYW5BbW91bnQsIGxvYW5QZXJpb2QsIGludGVyZXN0UmF0ZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlTG9hblBlck1vbnRoKCk6IHN0cmluZyB7XHJcblxyXG4gICAgcmV0dXJuIFwiMlwiO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFzdENyZWRpdDsiLCJpbXBvcnQgQWJzdHJhY3RDcmVkaXQgZnJvbSAnLi9BYnN0cmFjdENyZWRpdCc7XHJcbmltcG9ydCBJQ3JlZGl0IGZyb20gJy4vSUNyZWRpdCc7XHJcblxyXG5jbGFzcyBNb3J0Z2FnZUNyZWRpdCBleHRlbmRzIEFic3RyYWN0Q3JlZGl0IGltcGxlbWVudHMgSUNyZWRpdCB7XHJcblxyXG5cclxuICBjYWxjdWxhdGVMb2FuUGVyTW9udGgoKTogc3RyaW5nIHtcclxuICAgIGNvbnNvbGUubG9nKCdpbXBsZW1lbnRhdGlvbicpO1xyXG4gICAgcmV0dXJuIFwiM1wiO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9ydGdhZ2VDcmVkaXQ7IiwiaW1wb3J0IENvbnN1bWVyQ3JlZGl0IGZyb20gXCIuL0NvbnN1bWVyQ3JlZGl0XCI7XHJcbmltcG9ydCBGYXN0Q3JlZGl0IGZyb20gXCIuL0Zhc3RDcmVkaXRcIjtcclxuaW1wb3J0IE1vcnRnYWdlQ3JlZGl0IGZyb20gXCIuL01vcnRnYWdlQ3JlZGl0XCI7XHJcblxyXG4vLyBmb3JtIHNlbGVjdG9yc1xyXG5sZXQgY29uc3VtZXJDcmVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1DQycpO1xyXG5sZXQgZmFzdENyZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybUZDJyk7XHJcbmxldCBtb3J0Z2FnZUNyZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybU1DJyk7XHJcblxyXG4vLyBmb3JtcyB2YWxpZGF0aW9uXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gIGxldCBmb3JtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25lZWRzLXZhbGlkYXRpb24nKTtcclxuICBsZXQgdmFsaWRhdGlvbiA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChmb3JtcywgKGZvcm06IGFueSkgPT4ge1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZTogYW55KSA9PiB7XHJcbiAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3dhcy12YWxpZGF0ZWQnKTtcclxuICAgIH0sIGZhbHNlKTtcclxuICB9KTtcclxufSwgZmFsc2UpO1xyXG5cclxuLy8gQ29uc3VtZXIgQ3JlZGl0XHJcbmlmIChjb25zdW1lckNyZWRpdEZvcm0pIHtcclxuICBjb25zdW1lckNyZWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGNvbnN0IGxvYW5BbW91bnQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0QW1vdW50Q0MnKSkudmFsdWU7XHJcbiAgICBjb25zdCBsb2FuUGVyaW9kID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFBlcmlvZENDJykpLnZhbHVlO1xyXG4gICAgY29uc3QgaW50ZXJlc3RSYXRlID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RJdGVtQ0MnKSkudmFsdWU7XHJcbiAgICBsZXQgcGF5UGVyTW9udGggPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvYW5QYXltZW50Q0MnKSk7XHJcblxyXG4gICAgY29uc3QgY29uc3VtZXJDcmVkaXQgPSBuZXcgQ29uc3VtZXJDcmVkaXQobG9hbkFtb3VudCwgbG9hblBlcmlvZCwgaW50ZXJlc3RSYXRlKTtcclxuICAgIHBheVBlck1vbnRoLnZhbHVlID0gY29uc3VtZXJDcmVkaXQuY2FsY3VsYXRlTG9hblBlck1vbnRoKCk7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gRmFzdCBDcmVkaXRcclxuaWYgKGZhc3RDcmVkaXRGb3JtKSB7XHJcbiAgZmFzdENyZWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGNvbnN0IGxvYW5BbW91bnQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0QW1vdW50RkMnKSkudmFsdWU7XHJcbiAgICBjb25zdCBsb2FuUGVyaW9kID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFBlcmlvZEZDJykpLnZhbHVlO1xyXG4gICAgY29uc3QgaW50ZXJlc3RSYXRlID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFBlcmNGQycpKS52YWx1ZTtcclxuICAgIGxldCBwYXlQZXJNb250aCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hblBheW1lbnRGQycpKTtcclxuXHJcbiAgICBjb25zdCBmYXN0Q3JlZGl0ID0gbmV3IEZhc3RDcmVkaXQobG9hbkFtb3VudCwgbG9hblBlcmlvZCwgaW50ZXJlc3RSYXRlKTtcclxuICAgIHBheVBlck1vbnRoLnZhbHVlID0gZmFzdENyZWRpdC5jYWxjdWxhdGVMb2FuUGVyTW9udGgoKTtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBNb3J0Z2FnZSBDcmVkaXRcclxuaWYgKG1vcnRnYWdlQ3JlZGl0Rm9ybSkge1xyXG4gIG1vcnRnYWdlQ3JlZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgbG9hbkFtb3VudCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRBbW91bnRNQycpKS52YWx1ZTtcclxuICAgIGNvbnN0IGxvYW5QZXJpb2QgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0UGVyaW9kTUMnKSkudmFsdWU7XHJcbiAgICBjb25zdCBpbnRlcmVzdFJhdGUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0UGVyY01DJykpLnZhbHVlO1xyXG4gICAgbGV0IHBheVBlck1vbnRoID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FuUGF5bWVudE1DJykpO1xyXG5cclxuICAgIGNvbnN0IG1vcnRnYWdlQ3JlZGl0ID0gbmV3IE1vcnRnYWdlQ3JlZGl0KGxvYW5BbW91bnQsIGxvYW5QZXJpb2QsIGludGVyZXN0UmF0ZSk7XHJcbiAgICBwYXlQZXJNb250aC52YWx1ZSA9IG1vcnRnYWdlQ3JlZGl0LmNhbGN1bGF0ZUxvYW5QZXJNb250aCgpO1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
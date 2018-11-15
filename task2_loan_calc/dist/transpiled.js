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
                Number(this.interestRate = 9 / 12 / 100);
                break;
            case "Computer:6%":
                Number(this.interestRate = 6 / 12 / 100);
                break;
            default:
                Number(this.interestRate = 3 / 12 / 100);
                break;
        }
        return (this.loanAmount * (this.interestRate * Math.pow((1 + this.interestRate), this.loanPeriod) / (Math.pow((1 + this.interestRate), this.loanPeriod) - 1)));
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
        Number(this.interestRate = 20 / 12 / 100);
        return (this.loanAmount * (this.interestRate * Math.pow((1 + this.interestRate), this.loanPeriod) / (Math.pow((1 + this.interestRate), this.loanPeriod) - 1)));
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
    function MortgageCredit(loanAmount, loanPeriod, interestRate, salaryPerMonth, kidsNumber) {
        var _this = _super.call(this, loanAmount, loanPeriod, interestRate) || this;
        _this.salaryPerMonth = salaryPerMonth;
        _this.kidsNumber = kidsNumber;
        return _this;
    }
    MortgageCredit.prototype.calculateMaxLoanAmount = function () {
        if (this.salaryPerMonth <= 1000) {
            this.loanAmount = 100000;
        }
        else if (this.salaryPerMonth <= 2000) {
            this.loanAmount = 150000;
        }
        else {
            this.loanAmount = 200000;
        }
        if (this.kidsNumber === 0) {
            this.loanAmount += 50000;
        }
        else if (this.kidsNumber > 0 && this.kidsNumber <= 2) {
            this.loanAmount += 0;
        }
        else {
            this.loanAmount -= 50000;
        }
        return this.loanAmount;
    };
    MortgageCredit.prototype.calculateLoanPerMonth = function () {
        Number(this.interestRate = 2 / 12 / 100);
        this.loanPeriod *= 12;
        return (this.loanAmount * (this.interestRate * Math.pow((1 + this.interestRate), this.loanPeriod) / (Math.pow((1 + this.interestRate), this.loanPeriod) - 1)));
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
var form = document.querySelector('form');
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
        var loanAmount = parseInt(document.querySelector('#inputAmountCC').value);
        var loanPeriod = parseInt(document.querySelector('#inputPeriodCC').value);
        var interestRate = document.querySelector('#selectItemCC').value;
        var payPerMonth = document.querySelector('#loanPaymentCC');
        var consumerCredit = new _ConsumerCredit__WEBPACK_IMPORTED_MODULE_0__["default"](loanAmount, loanPeriod, interestRate);
        payPerMonth.value = consumerCredit.calculateLoanPerMonth().toFixed(2).toString();
        e.preventDefault();
    });
}
// Fast Credit
if (fastCreditForm) {
    fastCreditForm.addEventListener('submit', function (e) {
        var loanAmount = parseInt(document.querySelector('#inputAmountFC').value);
        var loanPeriod = parseInt(document.querySelector('#inputPeriodFC').value);
        var interestRate = document.querySelector('#inputPercFC').value;
        var payPerMonth = document.querySelector('#loanPaymentFC');
        var fastCredit = new _FastCredit__WEBPACK_IMPORTED_MODULE_1__["default"](loanAmount, loanPeriod, interestRate);
        payPerMonth.value = fastCredit.calculateLoanPerMonth().toFixed(2).toString();
        e.preventDefault();
    });
}
// Mortgage Credit
if (mortgageCreditForm) {
    mortgageCreditForm.addEventListener('submit', function (e) {
        var loanAmount = document.querySelector('#inputAmountMC');
        var loanPeriod = parseInt(document.querySelector('#inputPeriodMC').value);
        var interestRate = document.querySelector('#inputPercMC').value;
        var salaryPerMonth = parseInt(document.querySelector('#inputSalaryMC').value);
        var kidsNumber = parseInt(document.querySelector('#inputKidsMC').value);
        var payPerMonth = document.querySelector('#loanPaymentMC');
        var mortgageCredit = new _MortgageCredit__WEBPACK_IMPORTED_MODULE_2__["default"](0, loanPeriod, interestRate, salaryPerMonth, kidsNumber);
        loanAmount.value = mortgageCredit.calculateMaxLoanAmount().toFixed(2).toString();
        payPerMonth.value = mortgageCredit.calculateLoanPerMonth().toFixed(2).toString();
        e.preventDefault();
    });
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdGFzazJfbG9hbl9jYWxjL3NyYy9BYnN0cmFjdENyZWRpdC50cyIsIndlYnBhY2s6Ly8vLi90YXNrMl9sb2FuX2NhbGMvc3JjL0NvbnN1bWVyQ3JlZGl0LnRzIiwid2VicGFjazovLy8uL3Rhc2syX2xvYW5fY2FsYy9zcmMvRmFzdENyZWRpdC50cyIsIndlYnBhY2s6Ly8vLi90YXNrMl9sb2FuX2NhbGMvc3JjL01vcnRnYWdlQ3JlZGl0LnRzIiwid2VicGFjazovLy8uL3Rhc2syX2xvYW5fY2FsYy9zcmMvY3JlZGl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtJQUtFLHdCQUFZLFVBQWtCLEVBQUUsVUFBa0IsRUFBRSxZQUFpQjtRQUNuRSxJQUFJLENBQUMsVUFBVSxHQUFHLFVB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Y0FBYyxDQUFDLHFCQUFxQixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pGLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6Ii4vdHJhbnNwaWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdGFzazJfbG9hbl9jYWxjL3NyYy9jcmVkaXQudHNcIik7XG4iLCJhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdENyZWRpdCB7XHJcbiAgbG9hbkFtb3VudDogbnVtYmVyO1xyXG4gIGxvYW5QZXJpb2Q6IG51bWJlclxyXG4gIGludGVyZXN0UmF0ZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihsb2FuQW1vdW50OiBudW1iZXIsIGxvYW5QZXJpb2Q6IG51bWJlciwgaW50ZXJlc3RSYXRlOiBhbnkpIHtcclxuICAgIHRoaXMubG9hbkFtb3VudCA9IGxvYW5BbW91bnQ7XHJcbiAgICB0aGlzLmxvYW5QZXJpb2QgPSBsb2FuUGVyaW9kO1xyXG4gICAgdGhpcy5pbnRlcmVzdFJhdGUgPSBpbnRlcmVzdFJhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYnN0cmFjdENyZWRpdDsiLCJpbXBvcnQgQWJzdHJhY3RDcmVkaXQgZnJvbSAnLi9BYnN0cmFjdENyZWRpdCc7XHJcbmltcG9ydCBJQ3JlZGl0IGZyb20gJy4vSUNyZWRpdCc7XHJcblxyXG5jbGFzcyBDb25zdW1lckNyZWRpdCBleHRlbmRzIEFic3RyYWN0Q3JlZGl0IGltcGxlbWVudHMgSUNyZWRpdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxvYW5BbW91bnQ6IG51bWJlciwgbG9hblBlcmlvZDogbnVtYmVyLCBpbnRlcmVzdFJhdGU6IGFueSkge1xyXG4gICAgc3VwZXIobG9hbkFtb3VudCwgbG9hblBlcmlvZCwgaW50ZXJlc3RSYXRlKTtcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZUxvYW5QZXJNb250aCgpOiBudW1iZXIge1xyXG4gICAgc3dpdGNoICh0aGlzLmludGVyZXN0UmF0ZSkge1xyXG4gICAgICBjYXNlIFwiQXV0b21vYmlsZTo5JVwiOlxyXG4gICAgICAgIE51bWJlcih0aGlzLmludGVyZXN0UmF0ZSA9IDkgLyAxMiAvIDEwMCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiQ29tcHV0ZXI6NiVcIjpcclxuICAgICAgICBOdW1iZXIodGhpcy5pbnRlcmVzdFJhdGUgPSA2IC8gMTIgLyAxMDApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIE51bWJlcih0aGlzLmludGVyZXN0UmF0ZSA9IDMgLyAxMiAvIDEwMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICh0aGlzLmxvYW5BbW91bnQgKiAodGhpcy5pbnRlcmVzdFJhdGUgKiBNYXRoLnBvdygoMSArIHRoaXMuaW50ZXJlc3RSYXRlKSwgdGhpcy5sb2FuUGVyaW9kKSAvIChNYXRoLnBvdygoMSArIHRoaXMuaW50ZXJlc3RSYXRlKSwgdGhpcy5sb2FuUGVyaW9kKSAtIDEpKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25zdW1lckNyZWRpdDsiLCJpbXBvcnQgQWJzdHJhY3RDcmVkaXQgZnJvbSAnLi9BYnN0cmFjdENyZWRpdCc7XHJcbmltcG9ydCBJQ3JlZGl0IGZyb20gJy4vSUNyZWRpdCc7XHJcblxyXG5jbGFzcyBGYXN0Q3JlZGl0IGV4dGVuZHMgQWJzdHJhY3RDcmVkaXQgaW1wbGVtZW50cyBJQ3JlZGl0IHtcclxuICBjb25zdHJ1Y3Rvcihsb2FuQW1vdW50OiBudW1iZXIsIGxvYW5QZXJpb2Q6IG51bWJlciwgaW50ZXJlc3RSYXRlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGxvYW5BbW91bnQsIGxvYW5QZXJpb2QsIGludGVyZXN0UmF0ZSk7XHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVMb2FuUGVyTW9udGgoKTogbnVtYmVyIHtcclxuICAgIE51bWJlcih0aGlzLmludGVyZXN0UmF0ZSA9IDIwIC8gMTIgLyAxMDApO1xyXG4gICAgcmV0dXJuICh0aGlzLmxvYW5BbW91bnQgKiAodGhpcy5pbnRlcmVzdFJhdGUgKiBNYXRoLnBvdygoMSArIHRoaXMuaW50ZXJlc3RSYXRlKSwgdGhpcy5sb2FuUGVyaW9kKSAvIChNYXRoLnBvdygoMSArIHRoaXMuaW50ZXJlc3RSYXRlKSwgdGhpcy5sb2FuUGVyaW9kKSAtIDEpKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXN0Q3JlZGl0OyIsImltcG9ydCBBYnN0cmFjdENyZWRpdCBmcm9tICcuL0Fic3RyYWN0Q3JlZGl0JztcclxuaW1wb3J0IElDcmVkaXQgZnJvbSAnLi9JQ3JlZGl0JztcclxuXHJcbmNsYXNzIE1vcnRnYWdlQ3JlZGl0IGV4dGVuZHMgQWJzdHJhY3RDcmVkaXQgaW1wbGVtZW50cyBJQ3JlZGl0IHtcclxuICBzYWxhcnlQZXJNb250aDogbnVtYmVyO1xyXG4gIGtpZHNOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IobG9hbkFtb3VudDogbnVtYmVyLCBsb2FuUGVyaW9kOiBudW1iZXIsIGludGVyZXN0UmF0ZTogc3RyaW5nLCBzYWxhcnlQZXJNb250aDogbnVtYmVyLCBraWRzTnVtYmVyOiBudW1iZXIpIHtcclxuICAgIHN1cGVyKGxvYW5BbW91bnQsIGxvYW5QZXJpb2QsIGludGVyZXN0UmF0ZSk7XHJcbiAgICB0aGlzLnNhbGFyeVBlck1vbnRoID0gc2FsYXJ5UGVyTW9udGg7XHJcbiAgICB0aGlzLmtpZHNOdW1iZXIgPSBraWRzTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlTWF4TG9hbkFtb3VudCgpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuc2FsYXJ5UGVyTW9udGggPD0gMTAwMCkge1xyXG4gICAgICB0aGlzLmxvYW5BbW91bnQgPSAxMDAwMDA7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2FsYXJ5UGVyTW9udGggPD0gMjAwMCkge1xyXG4gICAgICB0aGlzLmxvYW5BbW91bnQgPSAxNTAwMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxvYW5BbW91bnQgPSAyMDAwMDA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5raWRzTnVtYmVyID09PSAwKSB7XHJcbiAgICAgIHRoaXMubG9hbkFtb3VudCArPSA1MDAwMFxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmtpZHNOdW1iZXIgPiAwICYmIHRoaXMua2lkc051bWJlciA8PSAyKSB7XHJcbiAgICAgIHRoaXMubG9hbkFtb3VudCArPSAwXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxvYW5BbW91bnQgLT0gNTAwMDBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5sb2FuQW1vdW50O1xyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlTG9hblBlck1vbnRoKCk6IG51bWJlciB7XHJcbiAgICBOdW1iZXIodGhpcy5pbnRlcmVzdFJhdGUgPSAyIC8gMTIgLyAxMDApO1xyXG4gICAgdGhpcy5sb2FuUGVyaW9kICo9IDEyO1xyXG4gICAgcmV0dXJuICh0aGlzLmxvYW5BbW91bnQgKiAodGhpcy5pbnRlcmVzdFJhdGUgKiBNYXRoLnBvdygoMSArIHRoaXMuaW50ZXJlc3RSYXRlKSwgdGhpcy5sb2FuUGVyaW9kKSAvIChNYXRoLnBvdygoMSArIHRoaXMuaW50ZXJlc3RSYXRlKSwgdGhpcy5sb2FuUGVyaW9kKSAtIDEpKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3J0Z2FnZUNyZWRpdDsiLCJpbXBvcnQgQ29uc3VtZXJDcmVkaXQgZnJvbSBcIi4vQ29uc3VtZXJDcmVkaXRcIjtcclxuaW1wb3J0IEZhc3RDcmVkaXQgZnJvbSBcIi4vRmFzdENyZWRpdFwiO1xyXG5pbXBvcnQgTW9ydGdhZ2VDcmVkaXQgZnJvbSBcIi4vTW9ydGdhZ2VDcmVkaXRcIjtcclxuXHJcbi8vIGZvcm0gc2VsZWN0b3JzXHJcbmxldCBjb25zdW1lckNyZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybUNDJyk7XHJcbmxldCBmYXN0Q3JlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtRkMnKTtcclxubGV0IG1vcnRnYWdlQ3JlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtTUMnKTtcclxubGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcblxyXG4vLyBmb3JtcyB2YWxpZGF0aW9uXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gIGxldCBmb3JtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25lZWRzLXZhbGlkYXRpb24nKTtcclxuICBsZXQgdmFsaWRhdGlvbiA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChmb3JtcywgKGZvcm06IGFueSkgPT4ge1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZTogYW55KSA9PiB7XHJcbiAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3dhcy12YWxpZGF0ZWQnKTtcclxuICAgIH0sIGZhbHNlKTtcclxuICB9KTtcclxufSwgZmFsc2UpO1xyXG5cclxuLy8gQ29uc3VtZXIgQ3JlZGl0XHJcbmlmIChjb25zdW1lckNyZWRpdEZvcm0pIHtcclxuICBjb25zdW1lckNyZWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGNvbnN0IGxvYW5BbW91bnQgPSBwYXJzZUludCgoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0QW1vdW50Q0MnKSkudmFsdWUpO1xyXG4gICAgY29uc3QgbG9hblBlcmlvZCA9IHBhcnNlSW50KCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRQZXJpb2RDQycpKS52YWx1ZSk7XHJcbiAgICBjb25zdCBpbnRlcmVzdFJhdGUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdEl0ZW1DQycpKS52YWx1ZTtcclxuICAgIGxldCBwYXlQZXJNb250aCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hblBheW1lbnRDQycpKTtcclxuXHJcbiAgICBjb25zdCBjb25zdW1lckNyZWRpdCA9IG5ldyBDb25zdW1lckNyZWRpdChsb2FuQW1vdW50LCBsb2FuUGVyaW9kLCBpbnRlcmVzdFJhdGUpO1xyXG4gICAgcGF5UGVyTW9udGgudmFsdWUgPSBjb25zdW1lckNyZWRpdC5jYWxjdWxhdGVMb2FuUGVyTW9udGgoKS50b0ZpeGVkKDIpLnRvU3RyaW5nKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIEZhc3QgQ3JlZGl0XHJcbmlmIChmYXN0Q3JlZGl0Rm9ybSkge1xyXG4gIGZhc3RDcmVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBjb25zdCBsb2FuQW1vdW50ID0gcGFyc2VJbnQoKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dEFtb3VudEZDJykpLnZhbHVlKTtcclxuICAgIGNvbnN0IGxvYW5QZXJpb2QgPSBwYXJzZUludCgoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0UGVyaW9kRkMnKSkudmFsdWUpO1xyXG4gICAgY29uc3QgaW50ZXJlc3RSYXRlID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFBlcmNGQycpKS52YWx1ZTtcclxuICAgIGxldCBwYXlQZXJNb250aCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hblBheW1lbnRGQycpKTtcclxuXHJcbiAgICBjb25zdCBmYXN0Q3JlZGl0ID0gbmV3IEZhc3RDcmVkaXQobG9hbkFtb3VudCwgbG9hblBlcmlvZCwgaW50ZXJlc3RSYXRlKTtcclxuICAgIHBheVBlck1vbnRoLnZhbHVlID0gZmFzdENyZWRpdC5jYWxjdWxhdGVMb2FuUGVyTW9udGgoKS50b0ZpeGVkKDIpLnRvU3RyaW5nKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIE1vcnRnYWdlIENyZWRpdFxyXG5pZiAobW9ydGdhZ2VDcmVkaXRGb3JtKSB7XHJcbiAgbW9ydGdhZ2VDcmVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBsZXQgbG9hbkFtb3VudCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRBbW91bnRNQycpKTtcclxuICAgIGNvbnN0IGxvYW5QZXJpb2QgPSBwYXJzZUludCgoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0UGVyaW9kTUMnKSkudmFsdWUpO1xyXG4gICAgY29uc3QgaW50ZXJlc3RSYXRlID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFBlcmNNQycpKS52YWx1ZTtcclxuICAgIGNvbnN0IHNhbGFyeVBlck1vbnRoID0gcGFyc2VJbnQoKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFNhbGFyeU1DJykpLnZhbHVlKTtcclxuICAgIGNvbnN0IGtpZHNOdW1iZXIgPSBwYXJzZUludCgoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0S2lkc01DJykpLnZhbHVlKTtcclxuICAgIGxldCBwYXlQZXJNb250aCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hblBheW1lbnRNQycpKTtcclxuXHJcbiAgICBjb25zdCBtb3J0Z2FnZUNyZWRpdCA9IG5ldyBNb3J0Z2FnZUNyZWRpdCgwLCBsb2FuUGVyaW9kLCBpbnRlcmVzdFJhdGUsIHNhbGFyeVBlck1vbnRoLCBraWRzTnVtYmVyKTtcclxuICAgIGxvYW5BbW91bnQudmFsdWUgPSBtb3J0Z2FnZUNyZWRpdC5jYWxjdWxhdGVNYXhMb2FuQW1vdW50KCkudG9GaXhlZCgyKS50b1N0cmluZygpO1xyXG4gICAgcGF5UGVyTW9udGgudmFsdWUgPSBtb3J0Z2FnZUNyZWRpdC5jYWxjdWxhdGVMb2FuUGVyTW9udGgoKS50b0ZpeGVkKDIpLnRvU3RyaW5nKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
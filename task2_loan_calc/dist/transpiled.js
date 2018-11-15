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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdGFzazJfbG9hbl9jYWxjL3NyYy9BYnN0cmFjdENyZWRpdC50cyIsIndlYnBhY2s6Ly8vLi90YXNrMl9sb2FuX2NhbGMvc3JjL0NvbnN1bWVyQ3JlZGl0LnRzIiwid2VicGFjazovLy8uL3Rhc2syX2xvYW5fY2FsYy9zcmMvRmFzdENyZWRpdC50cyIsIndlYnBhY2s6Ly8vLi90YXNrMl9sb2FuX2NhbGMvc3JjL01vcnRnYWdlQ3JlZGl0LnRzIiwid2VicGFjazovLy8uL3Rhc2syX2xvYW5fY2FsYy9zcmMvY3JlZGl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtJQUtFLHdCQUFZLFVBQWtCLEVBQUUsVUFBa0IsRUFBRSxZQUFpQjtRQUNuRSxJQUFJLENBQUMsVUFBVSxHQUFHLFVB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LENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiIuL3RyYW5zcGlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3Rhc2syX2xvYW5fY2FsYy9zcmMvY3JlZGl0LnRzXCIpO1xuIiwiYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RDcmVkaXQge1xyXG4gIGxvYW5BbW91bnQ6IG51bWJlcjtcclxuICBsb2FuUGVyaW9kOiBudW1iZXJcclxuICBpbnRlcmVzdFJhdGU6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IobG9hbkFtb3VudDogbnVtYmVyLCBsb2FuUGVyaW9kOiBudW1iZXIsIGludGVyZXN0UmF0ZTogYW55KSB7XHJcbiAgICB0aGlzLmxvYW5BbW91bnQgPSBsb2FuQW1vdW50O1xyXG4gICAgdGhpcy5sb2FuUGVyaW9kID0gbG9hblBlcmlvZDtcclxuICAgIHRoaXMuaW50ZXJlc3RSYXRlID0gaW50ZXJlc3RSYXRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RDcmVkaXQ7IiwiaW1wb3J0IEFic3RyYWN0Q3JlZGl0IGZyb20gJy4vQWJzdHJhY3RDcmVkaXQnO1xyXG5pbXBvcnQgSUNyZWRpdCBmcm9tICcuL0lDcmVkaXQnO1xyXG5cclxuY2xhc3MgQ29uc3VtZXJDcmVkaXQgZXh0ZW5kcyBBYnN0cmFjdENyZWRpdCBpbXBsZW1lbnRzIElDcmVkaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihsb2FuQW1vdW50OiBudW1iZXIsIGxvYW5QZXJpb2Q6IG51bWJlciwgaW50ZXJlc3RSYXRlOiBhbnkpIHtcclxuICAgIHN1cGVyKGxvYW5BbW91bnQsIGxvYW5QZXJpb2QsIGludGVyZXN0UmF0ZSk7XHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVMb2FuUGVyTW9udGgoKTogbnVtYmVyIHtcclxuICAgIHN3aXRjaCAodGhpcy5pbnRlcmVzdFJhdGUpIHtcclxuICAgICAgY2FzZSBcIkF1dG9tb2JpbGU6OSVcIjpcclxuICAgICAgICBOdW1iZXIodGhpcy5pbnRlcmVzdFJhdGUgPSA5IC8gMTIgLyAxMDApO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIkNvbXB1dGVyOjYlXCI6XHJcbiAgICAgICAgTnVtYmVyKHRoaXMuaW50ZXJlc3RSYXRlID0gNiAvIDEyIC8gMTAwKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBOdW1iZXIodGhpcy5pbnRlcmVzdFJhdGUgPSAzIC8gMTIgLyAxMDApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAodGhpcy5sb2FuQW1vdW50ICogKHRoaXMuaW50ZXJlc3RSYXRlICogTWF0aC5wb3coKDEgKyB0aGlzLmludGVyZXN0UmF0ZSksIHRoaXMubG9hblBlcmlvZCkgLyAoTWF0aC5wb3coKDEgKyB0aGlzLmludGVyZXN0UmF0ZSksIHRoaXMubG9hblBlcmlvZCkgLSAxKSkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uc3VtZXJDcmVkaXQ7IiwiaW1wb3J0IEFic3RyYWN0Q3JlZGl0IGZyb20gJy4vQWJzdHJhY3RDcmVkaXQnO1xyXG5pbXBvcnQgSUNyZWRpdCBmcm9tICcuL0lDcmVkaXQnO1xyXG5cclxuY2xhc3MgRmFzdENyZWRpdCBleHRlbmRzIEFic3RyYWN0Q3JlZGl0IGltcGxlbWVudHMgSUNyZWRpdCB7XHJcbiAgY29uc3RydWN0b3IobG9hbkFtb3VudDogbnVtYmVyLCBsb2FuUGVyaW9kOiBudW1iZXIsIGludGVyZXN0UmF0ZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihsb2FuQW1vdW50LCBsb2FuUGVyaW9kLCBpbnRlcmVzdFJhdGUpO1xyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlTG9hblBlck1vbnRoKCk6IG51bWJlciB7XHJcbiAgICBOdW1iZXIodGhpcy5pbnRlcmVzdFJhdGUgPSAyMCAvIDEyIC8gMTAwKTtcclxuICAgIHJldHVybiAodGhpcy5sb2FuQW1vdW50ICogKHRoaXMuaW50ZXJlc3RSYXRlICogTWF0aC5wb3coKDEgKyB0aGlzLmludGVyZXN0UmF0ZSksIHRoaXMubG9hblBlcmlvZCkgLyAoTWF0aC5wb3coKDEgKyB0aGlzLmludGVyZXN0UmF0ZSksIHRoaXMubG9hblBlcmlvZCkgLSAxKSkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFzdENyZWRpdDsiLCJpbXBvcnQgQWJzdHJhY3RDcmVkaXQgZnJvbSAnLi9BYnN0cmFjdENyZWRpdCc7XHJcbmltcG9ydCBJQ3JlZGl0IGZyb20gJy4vSUNyZWRpdCc7XHJcblxyXG5jbGFzcyBNb3J0Z2FnZUNyZWRpdCBleHRlbmRzIEFic3RyYWN0Q3JlZGl0IGltcGxlbWVudHMgSUNyZWRpdCB7XHJcbiAgc2FsYXJ5UGVyTW9udGg6IG51bWJlcjtcclxuICBraWRzTnVtYmVyOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxvYW5BbW91bnQ6IG51bWJlciwgbG9hblBlcmlvZDogbnVtYmVyLCBpbnRlcmVzdFJhdGU6IHN0cmluZywgc2FsYXJ5UGVyTW9udGg6IG51bWJlciwga2lkc051bWJlcjogbnVtYmVyKSB7XHJcbiAgICBzdXBlcihsb2FuQW1vdW50LCBsb2FuUGVyaW9kLCBpbnRlcmVzdFJhdGUpO1xyXG4gICAgdGhpcy5zYWxhcnlQZXJNb250aCA9IHNhbGFyeVBlck1vbnRoO1xyXG4gICAgdGhpcy5raWRzTnVtYmVyID0ga2lkc051bWJlcjtcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZU1heExvYW5BbW91bnQoKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLnNhbGFyeVBlck1vbnRoIDw9IDEwMDApIHtcclxuICAgICAgdGhpcy5sb2FuQW1vdW50ID0gMTAwMDAwO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNhbGFyeVBlck1vbnRoIDw9IDIwMDApIHtcclxuICAgICAgdGhpcy5sb2FuQW1vdW50ID0gMTUwMDAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2FuQW1vdW50ID0gMjAwMDAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMua2lkc051bWJlciA9PT0gMCkge1xyXG4gICAgICB0aGlzLmxvYW5BbW91bnQgKz0gNTAwMDBcclxuICAgIH0gZWxzZSBpZiAodGhpcy5raWRzTnVtYmVyID4gMCAmJiB0aGlzLmtpZHNOdW1iZXIgPD0gMikge1xyXG4gICAgICB0aGlzLmxvYW5BbW91bnQgKz0gMFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2FuQW1vdW50IC09IDUwMDAwXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubG9hbkFtb3VudDtcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZUxvYW5QZXJNb250aCgpOiBudW1iZXIge1xyXG4gICAgTnVtYmVyKHRoaXMuaW50ZXJlc3RSYXRlID0gMiAvIDEyIC8gMTAwKTtcclxuICAgIHJldHVybiAodGhpcy5sb2FuQW1vdW50ICogKHRoaXMuaW50ZXJlc3RSYXRlICogTWF0aC5wb3coKDEgKyB0aGlzLmludGVyZXN0UmF0ZSksIHRoaXMubG9hblBlcmlvZCkgLyAoTWF0aC5wb3coKDEgKyB0aGlzLmludGVyZXN0UmF0ZSksIHRoaXMubG9hblBlcmlvZCkgLSAxKSkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9ydGdhZ2VDcmVkaXQ7IiwiaW1wb3J0IENvbnN1bWVyQ3JlZGl0IGZyb20gXCIuL0NvbnN1bWVyQ3JlZGl0XCI7XHJcbmltcG9ydCBGYXN0Q3JlZGl0IGZyb20gXCIuL0Zhc3RDcmVkaXRcIjtcclxuaW1wb3J0IE1vcnRnYWdlQ3JlZGl0IGZyb20gXCIuL01vcnRnYWdlQ3JlZGl0XCI7XHJcblxyXG4vLyBmb3JtIHNlbGVjdG9yc1xyXG5sZXQgY29uc3VtZXJDcmVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1DQycpO1xyXG5sZXQgZmFzdENyZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybUZDJyk7XHJcbmxldCBtb3J0Z2FnZUNyZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybU1DJyk7XHJcblxyXG4vLyBmb3JtcyB2YWxpZGF0aW9uXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gIGxldCBmb3JtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25lZWRzLXZhbGlkYXRpb24nKTtcclxuICBsZXQgdmFsaWRhdGlvbiA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChmb3JtcywgKGZvcm06IGFueSkgPT4ge1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZTogYW55KSA9PiB7XHJcbiAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3dhcy12YWxpZGF0ZWQnKTtcclxuICAgIH0sIGZhbHNlKTtcclxuICB9KTtcclxufSwgZmFsc2UpO1xyXG5cclxuLy8gQ29uc3VtZXIgQ3JlZGl0XHJcbmlmIChjb25zdW1lckNyZWRpdEZvcm0pIHtcclxuICBjb25zdW1lckNyZWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGNvbnN0IGxvYW5BbW91bnQgPSBwYXJzZUludCgoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0QW1vdW50Q0MnKSkudmFsdWUpO1xyXG4gICAgY29uc3QgbG9hblBlcmlvZCA9IHBhcnNlSW50KCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRQZXJpb2RDQycpKS52YWx1ZSk7XHJcbiAgICBjb25zdCBpbnRlcmVzdFJhdGUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdEl0ZW1DQycpKS52YWx1ZTtcclxuICAgIGxldCBwYXlQZXJNb250aCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hblBheW1lbnRDQycpKTtcclxuXHJcbiAgICBjb25zdCBjb25zdW1lckNyZWRpdCA9IG5ldyBDb25zdW1lckNyZWRpdChsb2FuQW1vdW50LCBsb2FuUGVyaW9kLCBpbnRlcmVzdFJhdGUpO1xyXG4gICAgcGF5UGVyTW9udGgudmFsdWUgPSBjb25zdW1lckNyZWRpdC5jYWxjdWxhdGVMb2FuUGVyTW9udGgoKS50b0ZpeGVkKDIpLnRvU3RyaW5nKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIEZhc3QgQ3JlZGl0XHJcbmlmIChmYXN0Q3JlZGl0Rm9ybSkge1xyXG4gIGZhc3RDcmVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBjb25zdCBsb2FuQW1vdW50ID0gcGFyc2VJbnQoKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dEFtb3VudEZDJykpLnZhbHVlKTtcclxuICAgIGNvbnN0IGxvYW5QZXJpb2QgPSBwYXJzZUludCgoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0UGVyaW9kRkMnKSkudmFsdWUpO1xyXG4gICAgY29uc3QgaW50ZXJlc3RSYXRlID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFBlcmNGQycpKS52YWx1ZTtcclxuICAgIGxldCBwYXlQZXJNb250aCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hblBheW1lbnRGQycpKTtcclxuXHJcbiAgICBjb25zdCBmYXN0Q3JlZGl0ID0gbmV3IEZhc3RDcmVkaXQobG9hbkFtb3VudCwgbG9hblBlcmlvZCwgaW50ZXJlc3RSYXRlKTtcclxuICAgIHBheVBlck1vbnRoLnZhbHVlID0gZmFzdENyZWRpdC5jYWxjdWxhdGVMb2FuUGVyTW9udGgoKS50b0ZpeGVkKDIpLnRvU3RyaW5nKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIE1vcnRnYWdlIENyZWRpdFxyXG5pZiAobW9ydGdhZ2VDcmVkaXRGb3JtKSB7XHJcbiAgbW9ydGdhZ2VDcmVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBsZXQgbG9hbkFtb3VudCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRBbW91bnRNQycpKTtcclxuICAgIGNvbnN0IGxvYW5QZXJpb2QgPSBwYXJzZUludCgoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0UGVyaW9kTUMnKSkudmFsdWUpO1xyXG4gICAgY29uc3QgaW50ZXJlc3RSYXRlID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFBlcmNNQycpKS52YWx1ZTtcclxuICAgIGNvbnN0IHNhbGFyeVBlck1vbnRoID0gcGFyc2VJbnQoKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFNhbGFyeU1DJykpLnZhbHVlKTtcclxuICAgIGNvbnN0IGtpZHNOdW1iZXIgPSBwYXJzZUludCgoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0S2lkc01DJykpLnZhbHVlKTtcclxuICAgIGxldCBwYXlQZXJNb250aCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hblBheW1lbnRNQycpKTtcclxuXHJcbiAgICBjb25zdCBtb3J0Z2FnZUNyZWRpdCA9IG5ldyBNb3J0Z2FnZUNyZWRpdCgwLCBsb2FuUGVyaW9kLCBpbnRlcmVzdFJhdGUsIHNhbGFyeVBlck1vbnRoLCBraWRzTnVtYmVyKTtcclxuICAgIGxvYW5BbW91bnQudmFsdWUgPSBtb3J0Z2FnZUNyZWRpdC5jYWxjdWxhdGVNYXhMb2FuQW1vdW50KCkudG9GaXhlZCgyKS50b1N0cmluZygpO1xyXG4gICAgcGF5UGVyTW9udGgudmFsdWUgPSBtb3J0Z2FnZUNyZWRpdC5jYWxjdWxhdGVMb2FuUGVyTW9udGgoKS50b0ZpeGVkKDIpLnRvU3RyaW5nKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Testing ES6 transpilation to ES5
var test = 'Hello';
// debugger;
console.log(test);

var StartPCAcademy = function () {
  function StartPCAcademy() {
    _classCallCheck(this, StartPCAcademy);

    console.log('StartPCAcademy class created');
  }

  _createClass(StartPCAcademy, [{
    key: 'start',
    value: function start() {
      console.log('PC Academy started!');
    }
  }]);

  return StartPCAcademy;
}();

var startPCAcademy = new StartPCAcademy();
startPCAcademy.start();
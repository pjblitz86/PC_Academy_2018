'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var textArea = document.querySelector('#textArea');
var rows = parseInt(textArea.getAttribute('rows'));
var cols = parseInt(textArea.getAttribute('cols'));
// let minRows = 1;
var maxRows = 4;
var inputValue = void 0;
var inputArr = void 0;

var TextArea = function () {
  function TextArea() {
    _classCallCheck(this, TextArea);
  }

  _createClass(TextArea, [{
    key: 'resize',
    value: function resize(e) {
      textArea.classList.remove('no-resize');
      textArea.classList.add('allow-resize');
      inputValue = e.target.value;
      inputArr = inputValue.split('\n');
      rows = inputArr.length;
      for (var i = 0; i < inputArr.length; i++) {
        rows += parseInt(inputArr[i].length / cols);
      }
      if (rows > maxRows) {
        rows = maxRows;
        textArea.classList.add('add-scrollbar');
      } else {
        textArea.setAttribute('rows', rows);
        textArea.classList.remove('add-scrollbar');
      }
      textArea.classList.remove('allow-resize');
      textArea.classList.add('no-resize');
    }
  }]);

  return TextArea;
}();

var tA = new TextArea();
textArea.addEventListener('keyup', tA.resize);
// PROBLEMS
// scrollbar appearing lowers cols size and text from current row overflows to next line
// when reaching col length, cursor doesnt jump to next line - browser specific?
// cannot put let/const inside class cuz of eslint

const textArea = document.querySelector('#textArea');
let rows = parseInt(textArea.getAttribute('rows'));
let cols = parseInt(textArea.getAttribute('cols'));
let minRows = 2;
let maxRows = 4;
let inputValue;
let inputArr;

class TextArea {
  constructor() {

  }
  resize(e) {

    textArea.classList.remove('no-resize');
    textArea.classList.add('allow-resize');
    inputValue = e.target.value;
    inputArr = inputValue.split('\n');
    rows = inputArr.length;
    for (let i = 0; i < inputArr.length; i++) {
      rows += parseInt(inputArr[i].length / cols);
    }
    if (rows < minRows || inputValue === '') {
      rows = minRows;
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
}

const tA = new TextArea();
textArea.addEventListener('input', tA.resize);
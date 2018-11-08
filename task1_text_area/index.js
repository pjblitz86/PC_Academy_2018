// selectors
const textArea = document.querySelector('#textArea');
let rowCount = textArea.getAttribute('rows');
let colsCount = textArea.getAttribute('cols');
// let minRows = 1;
let maxRows = 4;
let inputValue;
let inputLength;

// event listeners
textArea.addEventListener('input', onInput);
  
function onInput(e) {
  textArea.classList.remove('no-resize');
  textArea.classList.add('allow-resize');
  inputValue = e.target.value;
  inputLength = inputValue.length;
  console.log('text value:', inputValue);
  console.log('text length:', inputLength);
  textArea.style.overflow = 'hidden';
  // logic
  // if (inputLength <= colsCount) {
  //   handleRowDecreaseToMin();
  // }
  if (inputLength > colsCount || e.which === 13 || e.keyCode === 13) {
    handleRowIncreaseToMax();
  }
  if (rowCount > maxRows) {
    handleScrollBar();
  }
  textArea.classList.remove('allow-resize');
  textArea.classList.add('no-resize');
}

// helper functions
// function handleRowDecreaseToMin() {
//   rowCount = minRows;
//   rowCount = textArea.setAttribute('rows', 1);
// }

function handleRowIncreaseToMax() {
  rowCount = maxRows;
  textArea.setAttribute('rows', rowCount);
  console.log('row count', rowCount);
  console.log('text value:', inputValue);
  console.log('text length:', inputLength);
}

function handleScrollBar() {

  textArea.style.overflow = 'auto';
}
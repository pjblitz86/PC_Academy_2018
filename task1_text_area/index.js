// selectors
const textArea = document.querySelector('#textArea');
let rowCount = Number(textArea.getAttribute('rows'));
let colsCount = textArea.getAttribute('cols');
// let minRows = 1;
let maxRows = 4;
let inputValue;
let inputLength;

// event listeners
textArea.addEventListener('keyup', onInput);
  
function onInput(e) {

  textArea.classList.remove('no-resize');
  textArea.classList.add('allow-resize');
  textArea.classList.add('remove-scrollbar');
  textArea.classList.remove('add-scrollbar');
  
  inputValue = e.target.value;
  inputLength = inputValue.length;
  textArea.classList.remove('scroll-bar');
  // logic
  // handleRowDecrease();

  if (inputLength % colsCount === 0 || e.keyCode === 13) {
    handleRowIncrease();
  }
  
  textArea.classList.remove('allow-resize');
  textArea.classList.add('no-resize');
}

// function handleRowDecrease() {
//   if ((rowCount < maxRows) && inputLength % colsCount === 0) {
//     textArea.classList.remove('add-scrollbar');
//   } else {
//     rowCount -= 1;
//     textArea.setAttribute('rows', rowCount);
//   }
// }

function handleRowIncrease() {
  if (rowCount > maxRows) {
    textArea.classList.add('add-scrollbar');
  } else {
    rowCount += 1;
    textArea.setAttribute('rows', rowCount);
  }
  
  console.log('********************');
  console.log('row count', rowCount);
  console.log('text value:', inputValue);
  console.log('text length:', inputLength);
  
}
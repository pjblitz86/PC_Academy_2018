const textArea = document.querySelector('#textArea');
console.log(textArea);
let rowAttributeValue = textArea.getAttribute('rows');
let colsAttributeValue = textArea.getAttribute('cols');
let currentTextValue;
let currentTextLength;

console.log(`row count: ${rowAttributeValue}`);
console.log(`row width: ${colsAttributeValue} chars`);

textArea.addEventListener('input', handleTextChange);

function handleTextChange(e) {
  currentTextValue = e.target.value;
  currentTextLength = currentTextValue.length;
  console.log(currentTextValue);
  console.log(currentTextLength);
  if (currentTextLength <= colsAttributeValue) {
    handleRowDecrease();
  }
  if (currentTextLength > colsAttributeValue) {
    rowAttributeValue += 1;
    currentTextLength = '0';
  }
}
function handleRowDecrease() {

  rowAttributeValue = textArea.setAttribute('rows', 1);
}
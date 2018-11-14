import ConsumerCredit from "./ConsumerCredit";

// form selectors
let consumerCreditForm = document.querySelector('#formCC');
let fastCreditButton = document.querySelector('#FCbutton');
let mortgageCreditButton = document.querySelector('#MCbutton');

// forms validation
window.addEventListener('load', () => {
  let forms = document.getElementsByClassName('needs-validation');
  let validation = Array.prototype.filter.call(forms, (form: any) => {
    form.addEventListener('submit', (e: any) => {
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
}, false);

// form submit event listeners
consumerCreditForm.addEventListener('submit', (e) => {
  let loanAmount = (<HTMLInputElement>document.querySelector('#inputAmountCC')).value;
  let loanPeriod = (<HTMLInputElement>document.querySelector('#inputPeriodCC')).value;
  let interestRate = (<HTMLInputElement>document.querySelector('#selectItemCC')).value;

  let consumerCredit = new ConsumerCredit(loanAmount, loanPeriod, interestRate);

  console.log(e);
  e.preventDefault();
});


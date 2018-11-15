import ConsumerCredit from "./ConsumerCredit";
import FastCredit from "./FastCredit";
import MortgageCredit from "./MortgageCredit";

// form selectors
let consumerCreditForm = document.querySelector('#formCC');
let fastCreditForm = document.querySelector('#formFC');
let mortgageCreditForm = document.querySelector('#formMC');
let form = document.querySelector('form');

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

// Consumer Credit
if (consumerCreditForm) {
  consumerCreditForm.addEventListener('submit', (e) => {
    const loanAmount = parseInt((<HTMLInputElement>document.querySelector('#inputAmountCC')).value);
    const loanPeriod = parseInt((<HTMLInputElement>document.querySelector('#inputPeriodCC')).value);
    const interestRate = (<HTMLInputElement>document.querySelector('#selectItemCC')).value;
    let payPerMonth = (<HTMLInputElement>document.querySelector('#loanPaymentCC'));

    const consumerCredit = new ConsumerCredit(loanAmount, loanPeriod, interestRate);
    payPerMonth.value = consumerCredit.calculateLoanPerMonth().toFixed(2).toString();
    e.preventDefault();
  });
}

// Fast Credit
if (fastCreditForm) {
  fastCreditForm.addEventListener('submit', (e) => {
    const loanAmount = parseInt((<HTMLInputElement>document.querySelector('#inputAmountFC')).value);
    const loanPeriod = parseInt((<HTMLInputElement>document.querySelector('#inputPeriodFC')).value);
    const interestRate = (<HTMLInputElement>document.querySelector('#inputPercFC')).value;
    let payPerMonth = (<HTMLInputElement>document.querySelector('#loanPaymentFC'));

    const fastCredit = new FastCredit(loanAmount, loanPeriod, interestRate);
    payPerMonth.value = fastCredit.calculateLoanPerMonth().toFixed(2).toString();
    e.preventDefault();
  });
}

// Mortgage Credit
if (mortgageCreditForm) {
  mortgageCreditForm.addEventListener('submit', (e) => {
    let loanAmount = (<HTMLInputElement>document.querySelector('#inputAmountMC'));
    const loanPeriod = parseInt((<HTMLInputElement>document.querySelector('#inputPeriodMC')).value);
    const interestRate = (<HTMLInputElement>document.querySelector('#inputPercMC')).value;
    const salaryPerMonth = parseInt((<HTMLInputElement>document.querySelector('#inputSalaryMC')).value);
    const kidsNumber = parseInt((<HTMLInputElement>document.querySelector('#inputKidsMC')).value);
    let payPerMonth = (<HTMLInputElement>document.querySelector('#loanPaymentMC'));

    const mortgageCredit = new MortgageCredit(0, loanPeriod, interestRate, salaryPerMonth, kidsNumber);
    loanAmount.value = mortgageCredit.calculateMaxLoanAmount().toFixed(2).toString();
    payPerMonth.value = mortgageCredit.calculateLoanPerMonth().toFixed(2).toString();
    e.preventDefault();
  });
}


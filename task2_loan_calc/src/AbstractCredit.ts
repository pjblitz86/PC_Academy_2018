abstract class AbstractCredit {
  loanAmount: number;
  loanPeriod: number
  interestRate: any;

  constructor(loanAmount: number, loanPeriod: number, interestRate: any) {
    this.loanAmount = loanAmount;
    this.loanPeriod = loanPeriod;
    this.interestRate = interestRate;
  }
}

export default AbstractCredit;
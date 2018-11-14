abstract class AbstractCredit {
  loanAmount: string;
  loanPeriod: string
  interestRate: string;

  constructor(loanAmount: string, loanPeriod: string, interestRate: string) {
    this.loanAmount = loanAmount;
    this.loanPeriod = loanPeriod;
    this.interestRate = interestRate;
  }
}

export default AbstractCredit;
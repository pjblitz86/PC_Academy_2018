import AbstractCredit from './AbstractCredit';
import ICredit from './ICredit';

class FastCredit extends AbstractCredit implements ICredit {
  constructor(loanAmount: number, loanPeriod: number, interestRate: string) {
    super(loanAmount, loanPeriod, interestRate);
  }

  calculateLoanPerMonth(): number {
    Number(this.interestRate = 20 / 12 / 100);
    return (this.loanAmount * (this.interestRate * Math.pow((1 + this.interestRate), this.loanPeriod) / (Math.pow((1 + this.interestRate), this.loanPeriod) - 1)));
  }
}

export default FastCredit;
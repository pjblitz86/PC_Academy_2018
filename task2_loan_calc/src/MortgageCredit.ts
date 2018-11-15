import AbstractCredit from './AbstractCredit';
import ICredit from './ICredit';

class MortgageCredit extends AbstractCredit implements ICredit {
  salaryPerMonth: number;
  kidsNumber: number;

  constructor(loanAmount: number, loanPeriod: number, interestRate: string, salaryPerMonth: number, kidsNumber: number) {
    super(loanAmount, loanPeriod, interestRate);
    this.salaryPerMonth = salaryPerMonth;
    this.kidsNumber = kidsNumber;
  }

  calculateMaxLoanAmount(): number {
    if (this.salaryPerMonth <= 1000) {
      this.loanAmount = 100000;
    } else if (this.salaryPerMonth <= 2000) {
      this.loanAmount = 150000;
    } else {
      this.loanAmount = 200000;
    }
    if (this.kidsNumber === 0) {
      this.loanAmount += 50000
    } else if (this.kidsNumber > 0 && this.kidsNumber <= 2) {
      this.loanAmount += 0
    } else {
      this.loanAmount -= 50000
    }

    return this.loanAmount;
  }

  calculateLoanPerMonth(): number {
    Number(this.interestRate = 2 / 12 / 100);
    return (this.loanAmount * (this.interestRate * Math.pow((1 + this.interestRate), this.loanPeriod) / (Math.pow((1 + this.interestRate), this.loanPeriod) - 1)));
  }
}

export default MortgageCredit;
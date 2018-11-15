import AbstractCredit from './AbstractCredit';
import ICredit from './ICredit';

class ConsumerCredit extends AbstractCredit implements ICredit {

  constructor(loanAmount: number, loanPeriod: number, interestRate: any) {
    super(loanAmount, loanPeriod, interestRate);
  }

  calculateLoanPerMonth(): number {
    switch (this.interestRate) {
      case "Automobile:9%":
        Number(this.interestRate = 9 / 12 / 100);

        break;
      case "Computer:6%":
        Number(this.interestRate = 6 / 12 / 100);
        break;
      default:
        Number(this.interestRate = 3 / 12 / 100);
        break;
    }

    return (this.loanAmount * (this.interestRate * Math.pow((1 + this.interestRate), this.loanPeriod) / (Math.pow((1 + this.interestRate), this.loanPeriod) - 1)));
  }
}

export default ConsumerCredit;
import AbstractCredit from './AbstractCredit';
import ICredit from './ICredit';

class ConsumerCredit extends AbstractCredit implements ICredit {

  constructor(loanAmount: string, loanPeriod: string, interestRate: string) {
    super(loanAmount, loanPeriod, interestRate);
  }

  calculateLoanPerMonth(): string {
    switch (this.interestRate) {
      case "Automobile:9%":
        this.interestRate = (9 / 12).toString();
        break;
      case "Computer:6%":
        this.interestRate = (6 / 12).toString();
        break;
      default:
        this.interestRate = (3 / 12).toString();
        break;
    }


    return "1";
  }
}

export default ConsumerCredit;
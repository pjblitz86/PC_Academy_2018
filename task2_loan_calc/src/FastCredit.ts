import AbstractCredit from './AbstractCredit';
import ICredit from './ICredit';

class FastCredit extends AbstractCredit implements ICredit {
  constructor(loanAmount: string, loanPeriod: string, interestRate: string) {
    super(loanAmount, loanPeriod, interestRate);

  }

  calculateLoanPerMonth(): string {

    return "2";
  }
}

export default FastCredit;
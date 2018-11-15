import AbstractCredit from './AbstractCredit';
import ICredit from './ICredit';

class FastCredit extends AbstractCredit implements ICredit {
  constructor(loanAmount: number, loanPeriod: number, interestRate: string) {
    super(loanAmount, loanPeriod, interestRate);

  }

  calculateLoanPerMonth(): number {

    return 3;
  }
}

export default FastCredit;
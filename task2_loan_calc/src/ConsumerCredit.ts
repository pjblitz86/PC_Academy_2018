import AbstractCredit from './AbstractCredit';
import ICredit from './ICredit';

class ConsumerCredit extends AbstractCredit implements ICredit {

  constructor(loanAmount: string, loanPeriod: string, interestRate: string) {
    super(loanAmount, loanPeriod, interestRate);
  }

  calculateLoanPerMonth(): number {
    console.log('implementation');
    return 1;
  }
}

export default ConsumerCredit;
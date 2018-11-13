import AbstractCredit from './AbstractCredit';
import ICredit from './ICredit';

class MortgageCredit extends AbstractCredit implements ICredit {


  calculateLoanPerMonth(): number {
    console.log('implementation');
    return 1;
  }
}

export default MortgageCredit;
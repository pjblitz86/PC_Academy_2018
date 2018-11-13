import AbstractCredit from './AbstractCredit';
import ICredit from './ICredit';

class FastCredit extends AbstractCredit implements ICredit {


  calculateLoanPerMonth(): number {
    console.log('implementation');
    return 1;
  }
}

export default FastCredit;
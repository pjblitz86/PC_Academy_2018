import AbstractCredit from './AbstractCredit';
import ICredit from './ICredit';

class MortgageCredit extends AbstractCredit implements ICredit {


  calculateLoanPerMonth(): string {
    console.log('implementation');
    return "3";
  }
}

export default MortgageCredit;
import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
console.log(peopleAccount);
peopleAccount.deposit(50);
peopleAccount.withdraw(20);

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
companyAccount.deposit(100);
companyAccount.getLoan(200);
console.log(companyAccount);

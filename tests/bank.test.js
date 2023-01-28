import Bank from '../bank.js';

// Deposit
test('depositing 1000 increases the balance by 1000', () => {
  let bank = new Bank();
  bank.deposit(1000);
  
  expect(bank.balance).toBe(1000);
});

test('depositing 1000 and then 2000 increases the balance by 3000', () => {
  let bank = new Bank();
  bank.deposit(1000);
  bank.deposit(2000);

  expect(bank.balance).toBe(3000);
});

// Withdraw
test('Withdrawing 1000 decreases the balance by 1000', () => {  
  let bank = new Bank();
  bank.deposit(1000);
  bank.withdraw(1000);

  expect(bank.balance).toBe(0);
});

// Record transaction
test("when record transiction is called it creates a transaction object with the expected properties", () => {
  let bank = new Bank();
  bank.recordTransaction(1000, 'credit');

  expect(bank.listOfTransactions[0].amount).toEqual(1000);
  expect(bank.listOfTransactions[0].type).toEqual('credit');
});

test("When withdrawing or depositing a record of the transaction is stored", () => {
  let bank = new Bank();
  bank.deposit(1000);
  bank.withdraw(1000);

  expect(bank.listOfTransactions.length).toEqual(2);
});

// Print statement
test("When print statement is called after a deposti it prints the correct statement", () => {
  let bank = new Bank();
  bank.deposit(1000);
  let expectedResponse = "date || credit || debit || balance\n25/10/2019 || 1000.00 ||  || 1000.00";

  expect(bank.printStatement()).toEqual(expectedResponse);
});

test("When print statement is called  after a withdrawal it prints the correct statement", () => {
  let bank = new Bank();
  // bank.deposit(1000);
  bank.withdraw(1000);
  let expectedResponse = "date || credit || debit || balance\n25/10/2019 ||  || 1000.00 || -1000.00";

  expect(bank.printStatement()).toEqual(expectedResponse);
});

test("When print statement is called after a deposit and a withdrawal it prints the correct statement", () => {
  let bank = new Bank();
  bank.deposit(1000);
  bank.deposit(2000);
  bank.withdraw(500);
  let expectedResponse = "date || credit || debit || balance\n25/10/2019 ||  || 500.00 || 2500.00\n25/10/2019 || 2000.00 ||  || 3000.00\n25/10/2019 || 1000.00 ||  || 1000.00";

  expect(bank.printStatement()).toEqual(expectedResponse);
});
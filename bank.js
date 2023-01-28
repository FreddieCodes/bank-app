export default class Bank {
  constructor() {
    this._balance = 0;
    this._listOfTransactions = [];
  }
  
  get balance() {
    return this._balance;
  }

  get listOfTransactions() {
    return this._listOfTransactions;
  }
  
  deposit(amount) {
    this._balance += amount;
    this.recordTransaction(amount, 'credit');
  }
  
  withdraw(amount){
    this._balance -= amount;
    this.recordTransaction(amount, 'debit');
  }

  recordTransaction(amount, type) {
    let transaction = {};
    transaction.date = "25/10/2019";
    transaction.amount = amount;
    transaction.balance = this.balance;
    transaction.type = type;

    this._listOfTransactions.push(transaction)
  }

  printStatement() {
    return `date || credit || debit || balance\n` + this.listOfTransactions.map(transaction => {
      return `${transaction.date} || ${transaction.type === 'credit' ? transaction.amount.toFixed(2) : ''} || ${transaction.type === 'debit' ? transaction.amount.toFixed(2) : ''} || ${transaction.balance.toFixed(2)}\n`;
    }).reverse().join("").slice(0, -1);
  }
}

let bank = new Bank();
bank.deposit(1000);
bank.deposit(2000);
bank.withdraw(500);
console.log(bank.printStatement());

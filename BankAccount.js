class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount){
    if (amount > 0) this.balance += amount
  }

  printBalance(){
    return this.balance;
  }

}

module.exports = BankAccount;

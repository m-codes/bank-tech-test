class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount){
    if (typeof(amount) === "number" && amount > 0){
      this.balance += amount
    } else {
      throw new Error("The amount to deposit must be a number greater than 0.")
    }
  }

  printBalance(){
    return this.balance;
  }

}

module.exports = BankAccount;

class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    if (typeof amount === "number" && amount > 0) {
      this.balance += amount;
    } else {
      throw new Error("Deposit amount must be a number greater than 0.");
    }
  }

  withdraw(amount) {
    if (typeof amount === "number" && amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    } else {
      throw new Error(
        "Withdrawal amount must be a positive number that do not exceed the balance."
      );
    }
  }

  printBalance() {
    return this.balance;
  }
}

module.exports = BankAccount;

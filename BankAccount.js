class BankAccount {
  constructor() {
    this.balance = 0;
    this.statement = [];
  }

  deposit(amount) {
    if (typeof amount === "number" && amount > 0) {
      this.balance += amount;
      this.statement.push(
        `${this.printDate()} || ${parseFloat(amount).toFixed(
          2
        )} || || ${parseFloat(this.balance)}`
      );
      // console.log(this.statement)
    } else {
      throw new Error("Deposit amount must be a number greater than 0.");
    }
  }

  withdraw(amount) {
    if (typeof amount === "number" && amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.statement.push(
        `${this.printDate()} || || ${parseFloat(amount).toFixed(
          2
        )} || ${parseFloat(this.balance)}`
      );
      // console.log(this.statement)
    } else {
      throw new Error(
        "Withdrawal amount must be a positive number that do not exceed the balance."
      );
    }
  }

  printBalance() {
    return parseFloat(parseFloat(this.balance).toFixed(2));
  }

  printHeader() {
    return "date || credit || debit || balance\n";
  }

  printDate() {
    return new Date().toLocaleDateString("en-GB");
  }

  printStatement() {
    const formattedStatement = this.statement.forEach( i => i.join("\n")).reverse()
    // return `${this.printHeader()}${this.statement.reverse()}`;
    return formattedStatement;
  }
}

module.exports = BankAccount;

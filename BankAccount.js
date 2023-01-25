class BankAccount {
  constructor() {
    this.balance = 0;
    // this.statement is just an array that will hold each deposit/withdrawal made
    this.statement = [];
  }

  deposit(amount) {
    // check if the amount is valid 
    if (typeof amount === "number" && amount > 0) {
      // make the transaction
      this.balance += amount;
      this.addDepositLine(amount);
    } else {
      throw new Error("Deposit amount must be a number greater than 0.");
    }
  }

  withdraw(amount) {
    // check if the amount is valid and does not exceed the balance
    if (typeof amount === "number" && amount > 0 && amount <= this.balance) {
      // make the transaction
      this.balance -= amount;
      this.addWithdrawLine(amount);
    } else {
      throw new Error(
        "Withdrawal amount must be a positive number that do not exceed the balance."
      );
    }
  }

  addWithdrawLine(amount) {
    // add the transaction to the statement array
    this.statement.push(
      `${this.printDate()} || || ${parseFloat(amount).toFixed(2)} || ${parseFloat(this.printBalance()).toFixed(2)}`
    );
  }

  addDepositLine(amount) {
    // add the transaction to the statement array
    this.statement.push(
      `${this.printDate()} || ${parseFloat(amount).toFixed(2)} || || ${parseFloat(this.printBalance()).toFixed(2)}`
    );
  }

  printBalance() {
    // parseFloat is used twice here as toFixed returns a string
    return parseFloat(parseFloat(this.balance).toFixed(2));
  }

  printHeader() {
    return "date || credit || debit || balance\n";
  }

  printDate() {
    // return today's date formatted properly
    return new Date().toLocaleDateString("en-GB");
  }

  printStatement() {
    // here I reverse the array and put each transaction on a new line
    const formattedStatement = this.statement.reverse().join("\n");
    // add the header to the stament and return it
    const fullStatement = this.printHeader().concat(formattedStatement);
    return fullStatement;
  }
}

module.exports = BankAccount;

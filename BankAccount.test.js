const BankAccount = require("./BankAccount");

describe("Bank Account", () => {
  // balance tests
  it("returns the initial balance", () => {
    const account = new BankAccount();
    expect(account.printBalance()).toEqual(0.00);
  });

  // deposit tests
  it("returns the balance after a single deposit", () => {
    const account = new BankAccount();
    account.deposit(10);
    expect(account.printBalance()).toEqual(10.00);
  });

  it("returns the balance after multiple deposits", () => {
    const account = new BankAccount();
    account.deposit(10);
    account.deposit(5);
    expect(account.printBalance()).toEqual(15.00);
  });

  it("throws an error when given invalid deposit amount", () => {
    const account = new BankAccount();
    expect(() => account.deposit(-2)).toThrow(
      "Deposit amount must be a number greater than 0."
    );
    expect(account.printBalance()).toEqual(0.00);
  });

  it("throws an error when given invalid deposit type", () => {
    const account = new BankAccount();
    expect(() => account.deposit("hello")).toThrow(
      "Deposit amount must be a number greater than 0."
    );
    expect(account.printBalance()).toEqual(0.00);
  });

  // withdraw tests
  it("returns the balance after a withdrawal", () => {
    const account = new BankAccount();
    account.deposit(10);
    account.withdraw(5);
    expect(account.printBalance()).toEqual(5.00);
  });

  it("returns the balance after mutiple withdrawals", () => {
    const account = new BankAccount();
    account.deposit(10);
    account.withdraw(5);
    account.withdraw(3);
    expect(account.printBalance()).toEqual(2.00);
  });

  it("throws an error when given invalid withdrawal amount", () => {
    const account = new BankAccount();
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be a positive number that do not exceed the balance."
    )
  });

  it("throws an error when given invalid withdrawal type", () => {
    const account = new BankAccount();
    expect(() => account.withdraw("hello")).toThrow(
      "Withdrawal amount must be a positive number that do not exceed the balance."
    )
  });

  it("throws an error when withdrawal is greater than the balance", () => {
    const account = new BankAccount();
    account.deposit(50);
    expect(() => account.withdraw(80)).toThrow(
      "Withdrawal amount must be a positive number that do not exceed the balance."
    )
  });

  it("returns the balance as 0 when the user withdraw the full amount on their account", () => {
    const account = new BankAccount();
    account.deposit(50);
    account.withdraw(50)
    expect(account.printBalance()).toEqual(0.00)
  });

  it("prints the statement header", () => {
    const account = new BankAccount();
    expect(account.printHeader()).toEqual("date || credit || debit || balance\n");
  });

  // it("prints the statement new line", () => {
  //   const account = new BankAccount();
  //   expect(account.printNewLine()).toEqual("date || credit || debit || balance\n");
  // });

  it("prints the full statement", () => {
    const account = new BankAccount();
    account.deposit(1000);
    account.deposit(2000);
    account.withdraw(500);
    expect(account.printStatement()).toEqual(
      "date || credit || debit || balance\n" +
      "25/01/2023 || || 500.00 || 2500.00\n" +
      "25/01/2023 || 2000.00 || || 3000.00\n" +
      "25/01/2023 || 1000.00 || || 1000.00"
      )
  });
});

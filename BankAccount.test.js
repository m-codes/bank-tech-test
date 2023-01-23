const BankAccount = require("./BankAccount");

describe("Bank Account", () => {
  it("does returns the initial balance", () => {
    const account = new BankAccount();
    expect(account.printBalance()).toEqual(0);
  });

  it("does returns balance after a deposit", () => {
    const account = new BankAccount();
    account.deposit(10)
    expect(account.printBalance()).toEqual(10);
  });
});

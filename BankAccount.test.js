const BankAccount = require("./BankAccount");

describe("Bank Account", () => {
  it("returns the initial balance", () => {
    const account = new BankAccount();
    expect(account.printBalance()).toEqual(0);
  });

  it("returns the balance after a single deposit", () => {
    const account = new BankAccount();
    account.deposit(10)
    expect(account.printBalance()).toEqual(10);
  });

  it("returns the balance after multiple deposits", () => {
    const account = new BankAccount();
    account.deposit(10)
    account.deposit(5)
    expect(account.printBalance()).toEqual(15);
  });

  it("returns the balance after an incorrect deposit", () => {
    const account = new BankAccount();
    account.deposit(-2)
    expect(account.printBalance()).toEqual(0);
  });
});

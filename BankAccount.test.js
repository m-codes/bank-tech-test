const BankAccount = require("./BankAccount");

describe("Bank Account", () => {
  
  it("does returns the initial balance", () => {
    const account = new BankAccount();
    expect(account.printBalance()).toEqual(0)
  })
  
});

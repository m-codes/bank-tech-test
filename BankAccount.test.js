const BankAccount = require("./BankAccount.js")

describe("Bank Account", () =>{

    beforeEach(() => {

    });

    it("creates a bank account object", () => {
        const account = new BankAccount();
        expect(account.statement()).toEqual(0)


    });

});
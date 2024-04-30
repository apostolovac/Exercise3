// Bank Account Management
let bankAccount = {
 name: "Cvetanka",
 accountNumber: 1234567890,
 balance: 200,
};

let deposit = function (account, amount) {
 account.balance = account.balance + amount;
};

deposit(bankAccount, 500);
console.log("bankAccount", bankAccount);

let withdraw = function (account, amount) {
 account.balance = account.balance - amount;
};
withdraw(bankAccount, 300);
console.log("bankAccount", bankAccount);

//ATM function example

function atmTransaction(balance, amount) {
    if (amount<= balance){
        return "Withdrawal successful. Remaining balance: " + (balance - amount);
    }
    return "Insufficient funds. Current balance: " + balance;
}
console.log(atmTransaction(1000, 500));
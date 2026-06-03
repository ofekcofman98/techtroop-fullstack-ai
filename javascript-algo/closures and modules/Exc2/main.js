const Bank = function() {
    let money = 500;

    const depositCash = function (cash) { money += cash; }
    const checkBalance = function () { console.log(money); }

    return {
        depositCash: depositCash,
        checkBalance: checkBalance
    };
}

const bank = Bank()
bank.depositCash(200)
bank.depositCash(250)
bank.checkBalance()

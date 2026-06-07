import PromptSync from "prompt-sync";
const prompt = PromptSync();

const bank = {
    balance: 100,

    checkBalance() {
        console.log(`Balance: $${this.balance}`);
    },

    deposit(amount) {
        this.balance += amount;
    },

    withdraw(amount) {
        this.balance -= amount;
    }
};

const options = [
    {
        option: "Check Balance",
        operation: () => bank.checkBalance()
    },
    {
        option: "Deposit Money",
        operation: () => {
            const amount = Number(prompt("Enter amount to deposit: "));

            if (Number.isNaN(amount) || amount <= 0) {
                console.log("Invalid amount");
                return;
            }
            
            bank.deposit(amount);
            console.log(`New balance: $${bank.balance}`);
        }
    },
    {
        option: "Withdraw Money",
        operation: () => {
            const amount = Number(prompt("Enter amount to withdraw: "));
            
            if (Number.isNaN(amount) || amount <= 0) {
                console.log("Invalid amount");
                return;
            }

            if (amount > bank.balance) {
                console.log("You don't have enough money!");
                return;
            }

            bank.withdraw(amount);
            console.log(`New balance: $${bank.balance}`);

        }
    },
    {
        option: "Exit",
        operation: () => false
    }
]

function showMenu() {
    console.log("======================");
    for (let i in options) {
        console.log(`${Number(i) + 1}) ${options[i].option}`);
    };
}

function startBank() {
    console.log("======================");
    console.log("=== Banking System ===");
    while (true) {
        showMenu();
        const input = prompt(`Choose option (1-${options.length}): `);
        const option = parseInt(input);

        if(isNaN(option) || option < 1 || option > options.length) {
            console.log("Invalid option");
            continue;
        }

        const result = options[option - 1].operation();

        if (result === false) {
            console.log("Goodbye!");
            break;
        }
    }
}

startBank();
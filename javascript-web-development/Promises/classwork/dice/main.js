function rollDice() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const fellOffTable = Math.random() < 0.1;

            if (fellOffTable) {
                reject("Oops! The dice fell off the table!");
            }
            else {
                const diceResult = Math.floor(Math.random() * 6) + 1;

                resolve(diceResult);
            }
        }, 500);
    })
}
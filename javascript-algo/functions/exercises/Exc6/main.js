function isArmstrong(num){
    const hundreds = Math.floor(num / 100);
    const tens = Math.floor((num % 100) / 10);
    const ones = num % 10;

    return hundreds**3 + tens**3 + ones**3 === num;
}

for (let num=100; num<=999; num++) {
    if (isArmstrong(num)) {
        console.log(num);
    }
}
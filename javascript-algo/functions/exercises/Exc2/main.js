function isEven(num) {
    return num % 2 == 0 ? true : false; 
}

function printOddNumbers(numbers) {
    for (let num of numbers) {
        if (!isEven(num)) {
            console.log(num)
        }
    }
}

printOddNumbers([0,2,7,10,3])
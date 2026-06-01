const numbers = [1,2,3,4,5,6,7,8,9,10]

// 1
numbers.splice(1,2);

// 2
numbers[3] = 1

// 3
numbers.splice(numbers.length-4,4)

// 4 
numbers.unshift(0);

// 5
console.log(numbers);
//#1
// Given an array of integers, return the largest number in the array.
// You may not use any built-in max functions.
//
// Constraints: the array will always have at least one element.
// Think about what variable you need to track as you loop through.
//
// Hint: start by assuming the first element is the max, then update
// your assumption as you go.
//
// Input:  [3, 7, 1, 9, 4]  →  Output: 9
// Input:  [-5, -1, -8, -3] →  Output: -1

function findMax(arr) {
    // your code here
    let res = arr[0];
    let len = arr.length;

    for (let i=1; i<len; i++) {
        if (arr[i] > res) {
            res = arr[i];
        }
    }

    return res;
} 

console.log(findMax([3, 7, 1, 9, 4]));
console.log(findMax([-5, -1, -8, -3]));
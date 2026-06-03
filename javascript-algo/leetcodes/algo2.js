//#2
// Given a string, return it reversed.
// You may not use any built-in reverse functions.
//
// Constraints: the string will only contain lowercase letters.
// Think about iterating from the end toward the beginning.
//
// Hint: you can build a new string character by character by iterating backwards.
//
// Input:  "hello"     →  Output: "olleh"
// Input:  "algorithm" →  Output: "mhtirogla"

function reverseString(str) {
    let arr = str.split('');

    let l = 0, r = arr.length-1; 
    while (l < r) {
        if (arr[l] !== arr[r]) {
            let tmp = arr[l];
            arr[l] = arr[r];
            arr[r] = tmp;
        }

        l++; r--;
    }

    return arr.join('');
}

console.log(reverseString("hello"));
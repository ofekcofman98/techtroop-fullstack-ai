// #7 
// Given two strings, return true if they are anagrams of each other,
// false otherwise. An anagram uses the same characters the same number
// of times, just in a different order.
//
// Constraints: strings will only contain lowercase letters, no spaces.
//
// Input:  "listen", "silent"  →  Output: true
// Input:  "hello",  "world"   →  Output: false
// Input:  "cat",    "car"     →  Output: false

function isAnagram(a, b) {

  const findIndex = (letter) => letter.charCodeAt(0) - 'a'.charCodeAt(0);

  if (a.length !== b.length) {
    return false;
  } 

  const count = new Array(26).fill(0);

  for (let letter of a) {
    count[findIndex(letter)]++;
  }

  for (let letter of b) {
    count[findIndex(letter)]--;
  }

  return count.every(x => x === 0);
}

console.log(isAnagram("listen","silent"));
console.log(isAnagram("cat","car"));
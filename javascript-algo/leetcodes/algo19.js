// #19
// Given a string, return the first character that appears only once.
// If no such character exists, return null.
//
// Constraints: the string will only contain lowercase letters.
// The string will always have at least one character.
//
// Input:  "leetcode"   →  Output: "l"
// Input:  "aabb"       →  Output: null
// Input:  "aabbc"      →  Output: "c"

function firstNonRepeating(str) {
  // your code here
  const findIndex = (letter) => letter.charCodeAt(0) - 'a'.charCodeAt(0);
  const count = new Array(26).fill(0);

  for (let letter of str) {
    count[findIndex(letter)]++;
  }

  for (let letter of str) {
    if (count[findIndex(letter)] === 1) {
        return letter;
    } 
  }

  return null;
}

// Tests
console.log(firstNonRepeating("leetcode")); // → "l"
console.log(firstNonRepeating("aabb"));     // → null
console.log(firstNonRepeating("aabbc"));    // → "c"
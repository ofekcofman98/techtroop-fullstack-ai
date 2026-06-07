// #6
// Given a string of words separated by spaces, return the longest word.
// If there is a tie, return the first one.
//
// Constraints: the string will always have at least one word.
// You may not use any built-in sort functions.
//
// Input:  "the quick brown fox"   →  Output: "quick"
// Input:  "cat elephant dog"      →  Output: "elephant"
// Input:  "one two six ten"       →  Output: "one"  (tie → first wins)

function longestWord(str) {
  // your code here
  const words = str.split(" ");

  let longest = "", longestLen = 0;

  for (let word of words) {
    if (longestLen < word.length) {
        longest = word;
        longestLen = word.length;
    }
  }

  return longest;
}

console.log(longestWord("one two six ten"))
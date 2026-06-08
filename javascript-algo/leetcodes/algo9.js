// #9
// Given a string of words separated by spaces, return the sentence
// with the word order reversed. The words themselves should stay intact.
//
// Constraints: the string will always have at least one word.
// You may not use any built-in reverse functions.
//
// Input:  "hello world"          →  Output: "world hello"
// Input:  "the quick brown fox"  →  Output: "fox brown quick the"
// Input:  "one"                  →  Output: "one"

function reverseWords(str) {
  // your code here
  const arr = str.split(" ");
  const len = arr.length-1;
  let l=0, r=len-1;
  
  while (l<r) {
    [arr[l],arr[r]] = [arr[r],arr[l]];

    l++;
    r--;
  }

  return arr.join(" ");
}

// Tests
console.log(reverseWords("hello world"));          // → "world hello"
console.log(reverseWords("the quick brown fox"));  // → "fox brown quick the"
console.log(reverseWords("one"));                  // → "one"
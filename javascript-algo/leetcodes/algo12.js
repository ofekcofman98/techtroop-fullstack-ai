// #13
// Given a string, return the length of the longest substring
// that contains no repeating characters.
//
// Constraints: the string may contain letters, digits, and spaces.
// An empty string should return 0.
//
// Input:  "abcabcbb"  →  Output: 3  ("abc")
// Input:  "bbbbb"     →  Output: 1  ("b")
// Input:  "pwwkew"    →  Output: 3  ("wke")
// Input:  ""          →  Output: 0

function lengthOfLongestSubstring(str) {
  // your code here
  const len = str.len;
  if (len === 1) return str;
  const seen = new Set(str[0]);
  
  let res = str[0];
  let resLen = 1;

  let l=0;
  for (let r=1; r<len; r++) {
    if (seen.has(str[r])) {
        seen.delete(str[l])
    }
  }
}

// Tests
console.log(lengthOfLongestSubstring("abcabcbb")); // → 3
console.log(lengthOfLongestSubstring("bbbbb"));    // → 1
console.log(lengthOfLongestSubstring("pwwkew"));   // → 3
console.log(lengthOfLongestSubstring(""));         // → 0
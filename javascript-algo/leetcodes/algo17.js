// #17
// Given a string and a number K, return the maximum number of vowels
// in any substring of length K.
// Vowels are: a, e, i, o, u (lowercase only).
//
// Constraints: K will always be less than or equal to the string length.
// The string will only contain lowercase letters.
// You may not use any built-in methods to count vowels.
//
// Hint: count vowels in the first K characters as your starting window.
// As the window slides forward, what character leaves and what enters?
//
// Input:  "abciiidef", K=3  →  Output: 3  ("iii")
// Input:  "aeiou",     K=2  →  Output: 2  ("ae", "ei", "io", "ou" all have 2)
// Input:  "leetcode",  K=3  →  Output: 2  ("lee", "eet", "ode")

function maxVowels(str, k) {
  // your code here
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let curVowelsNum = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.includes(str[i])) {
      curVowelsNum++;
    }
  }

  let max = curVowelsNum;

  for (let i=k; i < str.length; i++) {

    let next = str[i];
    if (vowels.includes(next)) {
      curVowelsNum++;
    }

    let prev = str[i - k];
    if (vowels.includes(prev)) {
      curVowelsNum--;
    }

    if (curVowelsNum > max) {
      max = curVowelsNum;
    }
  }

  return max;
}

// Tests
console.log(maxVowels("abciiidef", 3)); // → 3
console.log(maxVowels("aeiou", 2));     // → 2
console.log(maxVowels("leetcode", 3));  // → 2
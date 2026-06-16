// #16
// Given an array of positive integers and a target number, return
// how many contiguous subarrays have a sum equal to the target.
//
// Constraints: the array will only contain positive integers.
// A subarray must have at least one element.
//
// Think about when each pointer should move.
//
// Input:  [1, 2, 3, 4, 5], target 5  →  Output: 2  ([2,3] and [5])
// Input:  [1, 1, 1, 1, 1], target 2  →  Output: 4  ([1,1] appears 4 times)
// Input:  [2, 4, 6],        target 5  →  Output: 0  (no subarray sums to 5)

function countSubarrays(arr, target) {
  // your code here
  let res = 0;
  let l=0;
  let curSum = 0; 

  for(let r=0; r<arr.length; r++) {
    curSum += arr[r];

    while (l<r && curSum > target) {
      curSum -= arr[l];
      l++;
    }

    if (curSum === target) {
      res++;
    }
  }

  return res;
}

// Tests
console.log(countSubarrays([1, 2, 3, 4, 5], 5)); // → 2
console.log(countSubarrays([1, 1, 1, 1, 1], 2)); // → 4
console.log(countSubarrays([2, 4, 6], 5));        // → 0
console.log(countSubarrays([5], 3));        // → 0
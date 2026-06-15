// #15
// Given an array of integers and a number K, find the maximum sum
// of any K consecutive elements in the array.
//
// Constraints: K will always be less than or equal to the array length.
// The array will contain at least K elements.
//
// Input:  [2, 1, 5, 1, 3, 2], K=3  →  Output: 9   (5+1+3)
// Input:  [1, 2, 3, 4, 5],    K=2  →  Output: 9   (4+5)
// Input:  [4, 4, 4, 4],       K=1  →  Output: 4

function maxSumSubarray(arr, k) {
  const n=arr.length;

  let curSum = arr.slice(0,k).reduce((sum, num) => sum + num, 0);
  let maxSum = curSum;

  for(let i=k; i<n; i++){
    curSum -= arr[i-k];
    curSum += arr[i];
    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum;
}

// Tests
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // → 9
console.log(maxSumSubarray([1, 2, 3, 4, 5], 2));     // → 9
console.log(maxSumSubarray([4, 4, 4, 4], 1));        // → 4
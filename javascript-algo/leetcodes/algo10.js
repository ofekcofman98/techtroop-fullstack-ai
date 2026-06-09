// #10
// Given a sorted array of integers, remove the duplicates in-place
// so each element appears only once, and return the new length.
// The array is sorted, so duplicates will always be adjacent.
//
// Constraints: do not create a new array, modify the original in-place.
// The order of elements must stay the same.
//
// Input:  [1, 1, 2, 3, 3, 4]  →  Output: 4  (array becomes [1, 2, 3, 4])
// Input:  [1, 1, 1, 1]        →  Output: 1  (array becomes [1])
// Input:  [1, 2, 3]           →  Output: 3  (no duplicates, unchanged)

function removeDuplicates(arr) {
  // your code here
  const len=arr.length;
  if (len===1) return 1;

  let w=0;
  for (let r=1; r<len; r++) {
    if (arr[r] !== arr[w]) {
        w++;
        arr[w]=arr[r];
    } 
}
return w+1;
}

// Tests
console.log(removeDuplicates([1, 1, 2, 3, 3, 4])); // → 4
console.log(removeDuplicates([1, 1, 1, 1]));        // → 1
console.log(removeDuplicates([1, 2, 3]));           // → 3
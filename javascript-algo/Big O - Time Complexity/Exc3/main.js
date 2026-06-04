const allSides = [
  { a: 3, b: 4 },
  { a: 15, b: 21 },
  { a: 41, b: 8 },
  { a: 12, b: 6 }
]
    
const relevantSides = allSides.filter(s => s.a % 3 == 0)
// Single linear pass through the array: O(n)

for (let sides of relevantSides) {
  console.log(getHype(sides))
}
// Single linear pass through at most n: O(n)*O(1) = O(n) 
    
const getHype = function (sides) {
  let a = sides.a
  let b = sides.b
  let sumOfSquares = a * a + b * b
  return Math.sqrt(sumOfSquares)
}
// constant number of operations: O(1)

/*
    Time Complexity:

    O(n) + O(n) = 2O(n) = O(2n) = O(n) 
*/

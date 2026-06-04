const printSome = function (complaints) {
  for (let i = 1; i < complaints.length; i = i * 2)
    console.log(complaints[i].text);
}

/*
    Time Complexity:

    Single linear pass through the array,
    Index doubles every iteration => num of iterations: 2^k = n => k = log2(n)

    => O(log2(n))
*/

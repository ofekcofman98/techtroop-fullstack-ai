function twoSum(arr, target) {
    const len = arr.length;
    for (let i=0; i<len; i++){
        for (let j=i+1; j<len; j++){
            if (arr[i]+arr[j] === target) {
                return true;
            }
        }
    }

    return false;
}

console.log(twoSum([2,7,11,15], 16));
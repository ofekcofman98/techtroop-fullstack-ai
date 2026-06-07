function twoSumSet(arr, target) {
    const seen = new Set();

    for(let num of arr) {
        if (seen.has(target-num)) {
            return true;
        }

        seen.add(num);
    }

    return false;
}

function twoSumMap(arr, target) {
    const map = new Map();

    for(let num of arr) {
        if (map.has(target-num)) {
            return true;
        }

        seen.add(num);
    }

    return false;
}

console.log(twoSum([2,7,11,15], 17));
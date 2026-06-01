function checkExists(arr, num) {
    for (let element of arr) {
        if (element === num) return true;
    }

    return false;
}

console.log(checkExists([1, 2, 3], 2));
console.log(checkExists([1, 2, 3], 5));
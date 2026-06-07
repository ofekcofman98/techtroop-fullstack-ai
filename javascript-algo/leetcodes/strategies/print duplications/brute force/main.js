// O(n^2)

function printDuplicates(arr) {
    const len = arr.length;

    for (let i=0; i<len; i++) {
        for (let j=i+1; j<len; j++) {
            if (arr[i]===arr[j]) {
                console.log(arr[j]);
                break;
            }
        }
    }
}

printDuplicates([1,2,3,4,2,5,5,10,5]);
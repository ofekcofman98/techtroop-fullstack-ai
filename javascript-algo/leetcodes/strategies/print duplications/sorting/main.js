// O(n^2)

function printDuplicates(arr) {
    arr.sort((a,b)=> a-b);
    
    const len=arr.length;
    
    let cur=arr[0];
    for (let i=1; i<len;i++) {
        if (arr[i]===cur) {
            console.log(cur);
        }
        else {
            cur=arr[i];
        }
    }
}

printDuplicates([1,2,3,4,2,5,5,10,5]);
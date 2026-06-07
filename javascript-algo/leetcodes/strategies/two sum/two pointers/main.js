function twoSum(arr, target) {    
    let len=arr.length;

    arr.sort((a,b) => a-b);

    let left=0, right=len-1;
    while (left<right) {
        let sum = arr[left]+arr[right];

        if (sum === target) return true;
        else if (sum > target) right--;
        else left++;
    }

    return false;
}
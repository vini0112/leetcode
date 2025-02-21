
// Problem: Given an array and an integer k, find the maximum sum of any contiguous subarray of size k.

function maxSumSubarray(arr, k){
    //                      3
    let sum = 0
    for (let i = 0; i <= arr.length - k; i++){
        sum += arr[i]
    }
    return sum
}


//console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 2));  // Output: 9


function minSubarrayWithSum(arr, s){

}




console.log(minSubarrayWithSum([2, 1, 5, 2, 8], 7));  // Output: 1
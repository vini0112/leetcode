
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

let nums = [-1,0,3,5,9,12], target = 9
// Output: 4


function binary(nums, targ){

    let left = 0
    let right = nums.length - 1
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2)

        if(nums[mid] === targ){
            return mid
        }
        else if(nums[mid] < targ){
            left = mid + 1
        }
        else{
            right = mid - 1
        }
    }
    return -1

}

console.log(binary(nums, target))


// 485
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

let nums = [1,1,0,1,1,1]
// output 3


function maxConsecutive(nums){
    let maxLen = 0
    let maxOnesCount = 0 

    for(let end = 0; end < nums.length;end++){
        if(nums[end] === 1){ 
            maxOnesCount += 1 
        }else{
            maxLen = Math.max(maxLen, maxOnesCount)
            maxOnesCount = 0
        }
    }
    maxLen = Math.max(maxLen, maxOnesCount)
    return maxLen

}

// console.log(maxConsecutive(nums))


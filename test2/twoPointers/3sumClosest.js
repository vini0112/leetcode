
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers

let nums = [-1,2,1,-4], target = 1
// Output: 2
//-4 -1 1 2
// i  j   k

function sumClosest(nums, t){

    nums.sort((a,b) => a-b)

    let len = nums.length -1
    let closest = Infinity

    for(let i = 0;i < len;i++){

        if(i > 0 && nums[i] === nums[i-1]) continue

        let j = i+1
        let k = len

        while(j < k){
            let sum = nums[i] + nums[j] + nums[k]
            
            if(Math.abs(sum - t) < Math.abs(closest - t)){
                closest = sum
            }
            
            if(sum === t)
                return sum 

            else if(sum < t)j++

            else k--

        }
    }

    return closest
    
}

console.log(sumClosest(nums, target))

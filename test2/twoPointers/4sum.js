

// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]]

// nums[a] + nums[b] + nums[c] + nums[d] == target

let nums = [1,0,-1,0,-2,2], target = 0

// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]




function fourSum(nums, t){
    let res = []
    nums.sort((a,b) => a-b)

    for(let i = 0;i < nums.length;i++){ // loop at i

        if(i > 0 && nums[i] === nums[i-1]) continue //if crr == prev

        for(let j = i+1;j < nums.length;j++){ // loop at j
            
            if(j > i+1 && nums[j] === nums[j-1]) continue //if crr == prev

            let z = j + 1 // POINTER AFTER J POINTER
            let k = nums.length-1 // POINTER IN THE END OF THE LIST

            while(z < k){
                let sum = nums[i] + nums[j] + nums[z] + nums[k]

                if(sum === t){

                    res.push([nums[i], nums[j], nums[z], nums[k]])

                    while(nums[z] === nums[z+1])z++ //if crr == prev
                    while(nums[k] === nums[k+1])k-- //if crr == prev

                    z++
                    k--
                }
                else if(sum < t){
                    z++
                } 
                else k--
            }
        }
    }  

    return res
}


console.log(fourSum(nums, target))




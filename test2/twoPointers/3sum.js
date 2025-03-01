
// nums[i] + nums[j] + nums[k] == 0
// [[-1,-1,2],[-1,0,1]]

let nums = [-1,0,1,2,-1,-4]


function threeSum(nums){
    let res = []
    nums.sort((a, b) => a - b)

    // primeiro pointer nao vai ate o final
    for(let i = 0;i < nums.length-2;i++){
        // stop duplicates 
        if(i > 0 && nums[i] === nums[i-1]){
            continue
        }
        
        let j = i + 1 // pointer na frente do I
        let k = nums.length - 1  // pointer do final

        while(j < k){
            let sum = nums[i] + nums[j] + nums[k]
            if(sum === 0){
                res.push([nums[i], nums[j], nums[k]])

                // stop duplicates of J and K
                while(nums[j] === nums[j+1]) j++
                while(nums[k] === nums[k+1]) k--
                
                // if they're not iqual
                j++
                k--
            }else if(sum < 0){
                j++
            }else{
                k--
            }
        }

    }
    return res
}

console.log(threeSum(nums))

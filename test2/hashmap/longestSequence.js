
let nums = [100,4,200,1,3,2]

function longest(nums){
    let res = []
    let prev = nums[0]
    
    for(let i = 1;i < nums.length;i++){
        if(prev > nums[i]){
            prev = nums[i]
        }
    }
    
    res.push(prev)

    for(let i = 0;i < nums.length;i++){
        if(prev - nums[i] === 1){
            res.push(nums[i])
            prev = nums[i]
        }
    }

    return res

}

console.log(longest(nums))

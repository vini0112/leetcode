

function findMax(nums, k){
    let max = 0
    let sum = 0
    let windowStart = 0

    for(let i = 0;i < nums.length;i++){
        sum += nums[i]
        if(i - windowStart === k - 1){
            // return `${i} - ${windowStart} === ${k}`
            let average = sum / k
            max = Math.max(max, average)
            sum -= nums[windowStart]
            windowStart++
        }
    }
    return max
    
}

console.log(findMax([1, 12, -5, -6, 50, 3], 4))

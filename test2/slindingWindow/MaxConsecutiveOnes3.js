
// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's

let nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2 
// output -> 6 

function maxCon(nums, k){
    let max = 0
    let num_zeros = 0
    let l = 0

    for(let i = 0; i < nums.length;i++){
        if(nums[i] === 0){ // if iqual to 0 turns into 1
            num_zeros += 1
        }
        
        while(num_zeros > k){ // it's invalid when num_zeros bigger than k
            if(nums[l] === 0){
                num_zeros -= 1 // minus 1 to become valid again 
            }
            l += 1 //nums[l] === 0 so we turn 'l' into 1 again
        }

        max = Math.max(max, i-l+1) // taking the max of each iteration
        
    }
    return max
}

console.log(maxCon(nums, k))



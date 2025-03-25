

// RETURN THE TOTAL OF NUMBERS DIFFERENT OF VAL

let nums = [3,2,2,3], val = 3
// Output: 2

function removeElement(nums, val) {
    
    let k = 0
    let len = nums.length

    for(let i = 0;i < len;i++){
        if(nums[i] !== val){
            nums[k] = nums[i]
            
            k++
        }
    }

    return k
}

console.log(removeElement(nums, val))

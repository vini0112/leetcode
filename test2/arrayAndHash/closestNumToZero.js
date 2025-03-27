

// OBS -> TAKE THE FIRST VALUE AND INTERATE IN THE ARRAY COMPARING THE CURRENT TO THE PREV VALUE AND UPDATING PREV

let nums4 = [-4,-2,1,4,8]
// Output: 1

function findClosestNumber(nums) {
    let near = nums[0] // -4

    nums.forEach(n =>{
        
        if((n > near && Math.abs(near) === Math.abs(n)) ||  Math.abs(near) > Math.abs(n)){
            near = n 
        }
    })
    return near
};

console.log(findClosestNumber(nums4))


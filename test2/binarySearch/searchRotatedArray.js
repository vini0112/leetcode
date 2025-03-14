

let nums = [4,5,6,7,0,1,2], target = 0
//          l     m     r
// [4,5,6,7,0,1,2]
//          l m r  
// [4,5,6,7,0,1,2]
//           r  

// Output: 4

function search(nums, target){
    let left = 0
    let right = nums.length - 1
    //      4       4   
    while(left <= right){
        let mid = Math.floor((left+right) / 2) // 3/5/4

        if(nums[mid] === target) return mid

        else if(nums[mid] >= nums[left]){
            // se left menor q target e target menor que o do meio
            if(nums[left] <= target && target <= nums[mid]) right = mid - 1

            else left = mid + 1
        }

        else{
            // se meio menor q target e target menor que right
            if(nums[mid] <= target && target <= nums[right]) left = mid + 1
            else right = mid - 1
        }
    }
    
    return -1
    
};

console.log(search(nums, target))


let nums = [9,12,5,10,14,3,10], pivot = 10

// output -> [9,5,3,10,10,12,14]
function partition(nums, pivot){
    let result = new Array(nums.length).fill(0)
    let left = 0
    let right = nums.length - 1

    for(let i = 0, j = nums.length - 1;i < nums.length;i++, j--){
        if(nums[i] < pivot){
            result[left] = nums[i]
            left++
        }

        if(nums[j] > pivot){
            result[right] = nums[j]
            right--
        }

    }
    
    while(left <= right){
        result[left] = pivot
        left++
    }

    return result
}

console.log(partition(nums, pivot))

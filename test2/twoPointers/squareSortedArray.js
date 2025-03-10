// NORMAL INTERATION O(n2)

let nums = [-4,-1,0,3,10]

function squareSortedArray(nums){
    let res = []
    for(let i = 0;i < nums.length;i++){
        res.push(Math.pow(nums[i], 2))
    }
    // let num = Math.pow(-4, 2)
    return res.sort((a,b) => a - b )
}

// console.log(squareSortedArray(nums))

// WITH TWO POINTERS O(n)

function square(nums){
    let res = new Array(nums.length).fill(0)
    let left = 0 // first pointer in the beginning
    let right = nums.length - 1 // secund pointer in the end

    for(let i = nums.length - 1;i >= 0;i--){//começa a colocar valor do ultimo
        if(Math.abs(nums[left]) > Math.abs(nums[right])){
            res[i] = (nums[left] ** 2)
            left++
        }else{
            res[i] = (nums[right] ** 2)
            right--
        }
    }
    return res
}

console.log(square(nums))

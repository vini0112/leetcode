
// Finding the maximum value: Initialize with -Infinity so any real number replaces it.

// Finding the minimum value: Initialize with Infinity so any real number replaces it


// we need a sum, max, start and end pointers to solve this problem
// end pointer is the I -> the iterable variable from FOR

function findMax(nums, k){
    let max = -Infinity
    let sum = 0
    let windowStart = 0

    for(let i = 0;i < nums.length;i++){ // 0 1 2 3 4 5
        // 
        sum += nums[i] // 1/13/8/2 virou 1 -> 51, virou 39 -> 42
        // 5    2                3
        if(i - windowStart === k - 1){//isso que mantem os numeros dentro do padrao (a cada (k) numeros.. nesse caso a cada 4 faz a soma).
            
            let average = sum / k // 10.5
            max = Math.max(max, average) // 12.75
            sum -= nums[windowStart]// 1/39  // we decrement the fist element
            windowStart++// 1/2 // then the second element becomes the first
        }
    }
    return max   
}
console.log(findMax([1, 12, -5, -6, 50, 3], 4))

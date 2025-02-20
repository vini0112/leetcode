
let nums = [1,2,3,4]
// Output: [24,12,8,6]
// tem q multiplicar indo e voltando para chegar ao valor !

function product(nums){
    let res = []
    let start = 1

    for(let i = 0; i < nums.length;i++){ 
        res.push(start)
        start = start * nums[i]
    }
    
    let start2 = 1

    // res -> 1, 1, 2, 6
    // original [1,2,3,4]

    //                  3
    for(let i = nums.length-1;i >= 0;i--){ // i = 3/2/1/0
    //         1/4/12/24   6/2/1/1
        res[i] = start2 * res[i] // res = 24/12/8/6

    //           1/4/12/24     4/3/2/1
        start2 = start2 * nums[i] // start2 = 4/12/24
    }
    

    return res
}

console.log(product(nums))

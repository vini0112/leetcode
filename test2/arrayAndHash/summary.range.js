
let nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]

function summaryRanges(nums) {
    let start = 0
    let res = []

    for(let i = 0;i < nums.length;i++){// 0/1/2/3/4/5

        // check if is the last n of the array AND if the current n +1 is different of the next
        if(i === nums.length - 1 || nums[i] + 1 !== nums[i+1]){
            
            if(start === i) {res.push(`${nums[i]}`)} 

            else {res.push(`${nums[start]}->${nums[i]}`)}

            start = i + 1 // 5
        }
    }

    return res

};

console.log(summaryRanges(nums))
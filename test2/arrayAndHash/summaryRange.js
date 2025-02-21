
let nums = [0,1,2,4,5,7]
// slide window
function summaryRange(nums){
    let res = []

    for(let end = 0, start = 0;end < nums.length;end++, start = end){
        while(nums[end] === nums[end+1] - 1){
            end++
            if(end !== start){
                res.push(nums[start] + '->'+ nums[end])
            }else{
                res.push(""+nums[end])
            }
        }

    }
    return res
}

console.log(summaryRange(nums))

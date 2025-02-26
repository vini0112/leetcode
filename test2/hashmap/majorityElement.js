
let nums = [3,2,3]
let nums2 = [2,2,1,1,1,2,2]
function majority(nums){
    
    let candidate
    let count = 0

    for(let elem of nums){
        if(count === 0){
            candidate = elem // candidate =  2
        }

        count += elem === candidate ? 1 : -1
        //         2  === 2,  count == 2 , roda 2x
        //         1  === 2, count - 1 , count == 1
        //         1  === 2, count -1 , count == 0
        //         1  === 1, count == 1
        //         2  === 1, count == 0
        //         2  === 2 , count == 2, count == 1

    }

    return candidate
}

console.log(majority(nums2))


// You need to divide nums into n pairs such that:

// Each element belongs to exactly one pair.
// The elements present in a pair are equal.
// Return true if nums can be divided into n pairs, otherwise return false.

let nums = [3,2,3,2,2,2]
// Output: true


function divideArray (nums) {
    let counter = new Map()
    for(let num of nums){
        counter.set(num, (counter.get(num) || 0) + 1)// seta o numero e add one
        // console.log(counter)
    }
    for(let count of counter.values()){
        if(count % 2 !== 0) return false
    }

    return true
};

console.log(divideArray(nums))



// Return the length of the longest substring containing the same letter you can get after performing the above operations.

let s = "ABAB", k = 2
let s2 ='AABABBA', k2 = 1
// Output: 4


function longestRep(s, k){
    let map = {}
    let topFrequency = 0
    let longest = 0
    let left = 0
    let right = 0

    //   0/1/2/3
    while(right < s.length){
        let rightChar = s[right]
        map[rightChar] = map[rightChar]+1 || 1
        // receive the most common letter and take the max
        topFrequency = Math.max(topFrequency, map[rightChar])// a=2 b=2
        
        // 
        while((right-left+1) - topFrequency > k){
            //take the first letter to delete and walk one
            let leftChar = s[left]
            map[leftChar]--
            left++
        }

        longest = Math.max(longest, (right-left+1)) // 1/3/4
        right++
    }
    return longest
}

console.log(longestRep(s2, k2))

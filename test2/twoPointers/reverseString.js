
// REVERSE STRING WITH TIME COMPLEXITY O(1) 

// Output: ["o","l","l","e","h"]
let s = ["h","e","l","l","o"]

function reversing(s){
    
    let left = 0
    let right = s.length - 1
    while(left <= right){
        let first = s[left]
        s[left] = s[right]
        s[right] = first

        left++
        right--
    }
    return s
    
}

console.log(reversing(s))

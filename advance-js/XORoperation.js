
// The XOR operation compares two binary digits (bits) and returns:

// 1 if the bits are different.
// 0 if the bits are the same.



// FIND UNIQUE VALUE IN THE ARRAY

function unique(arr){
    let unique = 0
    for(let n of arr){
        unique ^= n  // XOR accumulates, canceling out duplicates
    }
    return unique
}

// Since A ^ A = 0, all duplicate numbers cancel each other out, leaving only the unique number

// console.log(unique([2, 3, 5, 3, 2])) // 5




// DETECTING IF IT'S EVEN OR ODD

// if n is even, n ^ 1 gives n + 1 (e.g., 4 ^ 1 = 5).
// If n is odd, n ^ 1 gives n - 1 (e.g., 7 ^ 1 = 6)


function even(n){
    return (n ^ 1) === (n + 1)
}

// console.log(even(4))




// FINDING THE MISSING NUMBER OF THE SEQUENCE 

function finding(nums, len){
    let xor = 0, xor2 = 0
    
    for(let i = 0;i <= len;i++){
        xor = xor ^ i ^ nums[i]
    }

    // for(let n of nums){
    //     xor2 ^= n
    // }

    return xor //^ xor2

}

// console.log(finding([1, 2, 4, 5, 6], 6))



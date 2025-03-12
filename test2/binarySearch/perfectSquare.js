// Given a positive integer num, return true if num is a perfect square or false otherwise.

// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itsel


function square(num) {
    if(num < 1) return false
    let left = 1, right = num

    while(left <= right){
        let mid = Math.floor((left + right) / 2) // 8/4
        
        let square = mid * mid // 64/16

        if(square === num) return true
        else if(square < num) left = mid + 1

        else right = mid - 1
    }
    return false
};

//console.log(square(16)) // true



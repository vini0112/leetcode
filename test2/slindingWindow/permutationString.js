
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false

    // Each position in the array represents a letter from 'a' to 'z'.
    let s1Count = Array(26).fill(0)
    let s2Count = Array(26).fill(0)


    // This converts each letter to a number between 0 and 25, which is perfect to use as an index in an array of size 26.

    // This line is counting the frequency of a letter
    for(let i = 0;i < s1.length;i++){
        // The ASCII code for 'a' is 97. So by subtracting 97, you're mapping
        // a=0, b=1, c=2 ... z=25
        s1Count[s1.charCodeAt(i) - 97]++ 
        s2Count[s2.charCodeAt(i) - 97]++
    }


    for(let i = 0;i < s2.length - s1.length;i++){
        if(matches(s1Count, s2Count)) return true

        s2Count[s2.charCodeAt(i) - 97]--
        s2Count[s2.charCodeAt(i + s1.length) - 97]++
    }

    return matches(s1Count, s2Count)

};


function matches(s1Count, s2Count){
    for(let i = 0;i < 26;i++){
        if(s1Count[i] !== s2Count[i]) return false
        
    }
    return true
}



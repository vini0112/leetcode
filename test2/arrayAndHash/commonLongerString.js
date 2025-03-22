

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

let strs = ["flower","catow","iggaht"]
// Output: "fl"

function common(strs){

    let prev = strs[0]

    for(let i = 1;i < strs.length;i++){
        while(strs[i].indexOf(prev) != 0){
            prev = prev.slice(0, prev.length-1)
            if(prev === "") return ""
        }
        
    }
    return prev
}


console.log(common(strs))

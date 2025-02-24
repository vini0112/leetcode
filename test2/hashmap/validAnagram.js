

let s = "anagram", t = "nagara"

function anagram(s, t){

    if(s.length !== t.length) return false
    let obj = {}

    for(let l of s){
        obj[l] = (obj[l] || 0) + 1
    }

    for(let l2 of t){
        if(!obj[l2]){
            return false
        }
        obj[l2]--
    }
    return true
}

console.log(anagram(s, t))
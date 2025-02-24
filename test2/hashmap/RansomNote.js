
let ransomNote = "a", magazine = "ba"

function random(rensomNote, magazine){
    let magaHash = {}
    
    for(let letra of magazine){ // b=1 a=1
        magaHash[letra] = (magaHash[letra] || 0) + 1
    }

    for(let letra2 of rensomNote){ // a
        if(!magaHash[letra2]  || magaHash[letra2] <= 0){ 
            return false
        }
        magaHash[letra2]--
    }

    return true
}

console.log(random(ransomNote, magazine))




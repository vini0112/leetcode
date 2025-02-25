let strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function grupingAnagram(strs){
    let obj = {}

    for(let s of strs){
        let key = s.split('').sort().join('') 
        
        if(!obj[key]){ 
    // se ainda nao existir passa o novo valor em um novo array
            obj[key] = []
        }
        

        obj[key].push(s) // se ja existir coloque dentro do array ja existente
    }

    return //Object.values(obj)
}

console.log(grupingAnagram(strs))

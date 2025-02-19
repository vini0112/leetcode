// USING TWO POINTERS

let s = "abc"
let t = "ahbgdc"

function newString(s, t){
    let Spointer = 0
    let Tpointer = 0

    //vai executar ate enxer a demanda aqui
    while(Spointer < s.length && Tpointer < t.length){ 
        if(s[Spointer] === t[Tpointer]){ 
            Spointer++
        }
        Tpointer++ 
        
    }
    
    return Spointer === s.length
}

console.log(newString(s, t))
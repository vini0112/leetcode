
let text = "nlaelbkoo"
function formBalloon(text){
    let map = {b: 0,a: 0,l: 0,o: 0,n: 0}

    for(let l of text){
        map[l]++
    }
    
    return Math.floor(Math.min(map.b,map.a,map.l / 2,map.o / 2,map.n))

    // obs: quando precisa de duas letras como (ll ou oo) dividimos por dois
    // se caso ouver apenas um aparecerá 0.5 mas com o MATH.FLOOR aparecerá 0
}

console.log(formBalloon(text))

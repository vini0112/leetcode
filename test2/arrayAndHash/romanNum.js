

function roman(s){
    const romanNum = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let total = 0
    for(let i = 0;i < s.length;i++){
        let atual = romanNum[s[i]]
        let proximo = romanNum[s[i+1]]
        
        if(atual < proximo){
            total -= atual
        }else{
            total += atual
        }
        
    }
    return total
}

console.log(roman('IV'))

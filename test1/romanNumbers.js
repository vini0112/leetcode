

function romanNum(n){
    // let stringNum = String(n)
    const valuesRoman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let total = 0
    for(let i = 0;i < n.length;i++){
        let atual = valuesRoman[n[i]]
        let proximo = valuesRoman[n[i+1]]

        if(atual < proximo){
            total -= atual
        }else{
            total += atual
        }
    }
    console.log(total)
}

romanNum('VI')
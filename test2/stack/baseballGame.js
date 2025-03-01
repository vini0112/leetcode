
// + -> Record a new score that is the sum of the previous two scores
// D -> Record a new score that is the double of the previous score
// C -> Invalidate the previous score, removing it from the record


let ops = ["5","2","C","D","+"]
function baseballgame(operations) {
    let scoresAdded = []

    for(let op of operations){
        // se for numero
        if(!isNaN(op) || (op[0] === '-' && !isNaN(op.slice(1)))){
            scoresAdded.push(parseInt(op)) // joga como number no array
        }else if(op === "C"){ // deleta o ultimo
            scoresAdded.pop()
        }else if(op === 'D'){ // multiplica o ultimo por 2
            scoresAdded.push(scoresAdded[scoresAdded.length - 1] * 2)
        }else if(op === "+"){ // soma os dois ultimos
            scoresAdded.push(scoresAdded[scoresAdded.length - 1] + scoresAdded[scoresAdded.length - 2])
        }
    }
    return scoresAdded.reduce((a, b) => a + b, 0) //faz a soma total
};

console.log(baseballgame(ops))



// FASTER APPROACH WITH REDUCE

function baseballgame2(operations) {
    
    return operations.reduce((score, op) =>{

        if(op === 'C') score.pop()

        else if(op === 'D') score.push(score[score.length - 1] * 2)

        else if(op === '+') score.push(score[score.length - 1] + score[score.length - 2])

        else score.push(+op)
        
        return score
    }, []).reduce((sum, n) => sum + n, 0)

}


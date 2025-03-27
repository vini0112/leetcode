
// apbqcr
function merging(word1, word2){

    let result = ''
    let n = Math.min(word1.length, word2.length) // pega o minimo multiplo
    
    for(let i = 0;i < n;i++){
        result += word1[i] + word2[i]
    }
    
    // return the result
    // if the length of these two aren't iqual we slice until (n) and automatically write the rest!!
    return result + word1.slice(n) + word2.slice(n)
}
console.log(merging('abc', 'pqk'))
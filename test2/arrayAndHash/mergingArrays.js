
// apbqcr
function merging(word1, word2){

    let result = ''
    let n = Math.min(word1.length, word2.length) // pega o minimo multiplo
    for(let i = 0;i < n;i++){
        result += word1[i] + word2[i]
    }
    
    // console.log(n)
    return result + word1.slice(n) + word2.slice(n)
}
console.log(merging('abc', 'pq'))
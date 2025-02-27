
// CHECK IF IT'S PALINDROME - JUNTE TUDO E TIRE OS ESPAÇOS E VIRGULAS E PONTOS
let s = "A man, a plan, a canal: Panama"

function palindrome(s){
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    let left = 0
    let right = s.length - 1
    while(left < right){
        if(s[left] !== s[right]){
            return false
        }

        left++
        right--
    }
    return true

}

console.log(palindrome(s))

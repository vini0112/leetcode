

let temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

function temp(tempe){
    
    let stack = []
    let result = new Array(tempe.length).fill(0)

    for(let i = 0;i < tempe.length;i++){
        while(stack.length && tempe[i] > tempe[stack[stack.length - 1]]){
            const idx = stack.pop()
            result[idx] = i - idx
        }
        
        stack.push(i)
    }
    return result
}

console.log(temp(temperatures))



let tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

function polish(tokens){
    let stack = []

    for(let c of tokens){
        
        if(c === '+'){
            stack.push(stack.pop() + stack.pop())
        }
        else if(c === '*'){
            stack.push(stack.pop() * stack.pop())
        }
        else if(c === '-'){
            const second = stack.pop()
            const first = stack.pop()
            stack.push( first - second)
        }
        else if(c === '/'){
            const second = stack.pop()
            const first = stack.pop()
            stack.push( first / second)
        }
        else{
            stack.push(parseInt(c))
        }
    }

    return stack[0]
}

console.log(polish(tokens))
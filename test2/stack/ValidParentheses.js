
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


let test = '{}'

function parenthe(s){
    
    let stack = []
    let mapping = {
        ')':"(",
        '}':'{',
        ']':'['
    }

    for(let l of s){
        if(Object.values(mapping).includes(l)){ // pega o value de acordo com mapping
            stack.push(l)
        }
        else if(mapping.hasOwnProperty(l)){ // this checkes if there's the (l) property (no value)
            
            if(!stack.length || mapping[l] !== stack.pop()) return false
        }
    }
    return stack.length === 0
}

// console.log(parenthe(test))

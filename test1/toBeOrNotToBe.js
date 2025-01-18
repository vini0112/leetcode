

let expect = function(val){
    return {
        toBe: (val2) =>{
            if(val !== val2) throw new Error('Not Equal')
            return true
        },
        notToBe: (val2) =>{
            if(val === val2) throw new Error('Equal')
            return true
        }
    }
}

const functionExpect = expect(5)
console.log(functionExpect.notToBe(5))



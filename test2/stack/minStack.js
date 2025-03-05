class MinStack{
    constructor(){
        this.stack = []
        this.minStack = []
    }

    push(val){
        if(!this.stack.length){
            this.stack.push(val)
            this.minStack.push(val)
        }else{
            this.stack.push(val)
        //comparing the last number of the minStack to the new with Math.min
            this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val)) 
        }
    }

    pop(){
        if(!this.stack.length){
            return null
        }
        this.minStack.pop()
        return this.stack.pop()
    }

    top(){
        if(!this.stack.length){
            return null
        }
        return this.stack[this.stack.length - 1]
    }

    getMin(){
        if(!this.stack.length){
            return null
        }
        return this.minStack[this.minStack.length - 1] // pega o ultimo
    }


    printStack(){
        return this.stack
    }

    printMinStack(){
        return this.minStack
    }

}


const ms = new MinStack()
ms.push(3)
ms.push(6)
ms.push(1)
ms.push(-3)
ms.push(-2)


console.log(ms.printStack())
console.log(ms.printMinStack())
console.log(ms.getMin())

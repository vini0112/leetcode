import linkedTailList from "./linkedListTail.js";


class linkedListStack {
    constructor(){
        this.list = new linkedTailList()
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
        return this.list.removeFromFront()
    }

    peek(){
        return this.list.head.value
    }

    empty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        return this.list.print()
    }
}

const queue = new linkedListStack()

queue.push(1)
console.log(queue.peek())

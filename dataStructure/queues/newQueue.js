import linkedTailList from "../likedLists.js/linkedListTail.js";

// we considering the tail as the rair of the queue

class LinkedQueue{
    constructor(){
        this.list = new linkedTailList()
        
    }

    enqueue(value){
        this.list.append(value)
    }

    dequeue(){
        return this.list.removeFromFront()
    }

    peek(){
        return this.list.head.value
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        return this.list.print()
    }
    isEmpty(){
        return this.list.isEmpty()
    }
}

const queue = new LinkedQueue()

queue.enqueue(2)
queue.dequeue()
console.log(queue.print())


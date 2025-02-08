

class Queue {
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length == 0
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString())
    }

}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(10)
// console.log(queue.isEmpty())
console.log(queue.print())


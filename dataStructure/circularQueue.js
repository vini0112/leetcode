
// Enqueue: Moves rear forward and inserts the value.
// Dequeue: Moves front forward and removes the value.
// Circular Nature: (index + 1) % size ensures wrap-around behavior.


class CircularQueue{

    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.rear = -1
        this.front = -1
    }

    isFull(){
        return this.currentLength === this.capacity
    }
    isEmpty(){
        return this.currentLength === 0
    }
    // enqueue happens in the rear of the queue
    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.currentLength += 1
            if(this.front === -1){
                this.front = this.rear
            }
        }
    }

    // dequeue happens in the front of the queue
    dequeue(){
        if(this.isEmpty()){
            return null
        }

        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength -= 1

        if(this.isEmpty()){
            this.front = -1
            this.rear = -1
        }
        return item
    }


    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
    }

    size(){
        return this.currentLength
    }

    print(){
        if(this.isEmpty()){
            return 'Queue is empty!'
        }else{
            let i 
            let str = ''
            for(i = this.front;i !== this.rear;i = (i+1) % this.capacity){
                str += this.items[i] + " "
            }
            str += this.items[i]
            return str
        }
    }

    

}

const queue = new CircularQueue(5)

queue.enqueue(1)
queue.enqueue(10)
queue.enqueue(30)
queue.enqueue(20)
queue.enqueue(40)
queue.dequeue()
queue.enqueue(60)

console.log(queue.print())


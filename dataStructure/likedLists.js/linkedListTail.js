
class Node{
    constructor(value){
        this.value = value
        this.next = 0
    }
}

class linkedTailList{

    constructor(){
        this.head = null 
        this.tail = null 
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head 
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }
        else{
            
            this.tail.next = node // no need to traverse the whole node
            this.tail = node
        }
        this.size++
    }


    print(){
        if(this.isEmpty()){
            return 'is empty'
        }else{
            let curr = this.head
            let listValue = ' '
            while(curr){
                listValue += `${curr.value}`
                curr = curr.next
            }
            return listValue
        }
    }

}

const queue = new linkedTailList()

queue.append(3)
queue.append(2)
console.log(queue.print())
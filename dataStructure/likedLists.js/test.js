
// node
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null // --> receptor of node!
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }
    
    prepend(value){
        const node = new Node(value) // receiving node
        if(this.isEmpty()){
            this.head = node // firts execution if isEmpty
        }else{ // secund execution
            node.next = this.head // Point the new node’s next to the current head of the list
            this.head = node // updates the head with the new node value 
        }
        this.size++
    }

    append(value){
        const node = new Node(value) // receiving node
        if(this.isEmpty()){
            this.head = node // pass knot to head
        }else{
            let prev = this.head 
            while(prev.next){ // traversing until the last node
                prev = prev.next
            }
            prev.next = node // after the last node be found pass it to the new node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            return 'is empty'
        }else{
            let curr = this.head // receiving node
            let listValue = ' '
            while(curr){ // while value..
                listValue += `${curr.value}`
                curr = curr.next
            }
            return listValue
        }
    }

    insert(value, index){
        if(index < 0 || index > this.size || index == null){
            return
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i = 0;i < index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }


}


const queue = new linkedList()
queue.append(2)
queue.append(20)
// queue.insert(1, 1)

console.log(queue.print())


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    // O(1)
    prepend(value){
        const node = new Node(value) // inicialize the a new NODE
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    // O(n)
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            return 'Empty'
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value}`
                curr = curr.next
            }
            return listValues
        }
    }

}

const list = new LinkedList()

list.prepend(20)
list.prepend(10)
list.append(1)
list.prepend(9)

console.log(list.print())


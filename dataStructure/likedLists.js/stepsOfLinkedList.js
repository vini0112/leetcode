
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
            for(let i = 0;i < index-1;i++){ // index-1 because we're taking the previous node of the index that we gonna insert and make it to point to next
                prev = prev.next
            }
            node.next = prev.next 
            prev.next = node
            this.size++
        }
    }

    removeFrom(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removeNode
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i = 0;i < index-1;i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value

    }

    removingValue(value){
        if(this.isEmpty()){
            return null
        }
        
        if(this.head.value === value){
            this.head = this.head.next
            // console.log(this.head)
            this.size--
            return value
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }

            if(prev.next){
                const removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null // if the pointer prev reaches the last node which is null, we return null
        }
    }

    // best use while when handling with value
    searchValue(value){
        if(this.isEmpty()){
            return 'Empty'
        }

        if(this.head.value === value){
            return value
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }

            if(prev.next){
                return value
            }

            return null
        }
        
        
    }

    // best use for when handling with index
    searchByIndex(index){
        if(this.isEmpty() || index < 0 || index == null || index >= this.size){
            return null
        }

        if(index === 0){
            return this.head.value
        }else{
            let prev = this.head
            for(let i = 0;i < index;i++){
                prev = prev.next
            }
            return prev.value
        }

    }

}


const queue = new linkedList()
queue.append(2)
queue.append(5)
// console.log(queue.removeFrom())
queue.removingValue(5)
console.log(queue.print())


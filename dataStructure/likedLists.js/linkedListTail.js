
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

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value  // taking the first value
        this.head = this.head.next  //passing the first node to secund, erasing the first
        this.size--
        return value
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }

        const value = this.tail
        
        if(this.size === 1){
            this.tail = null 
            this.head = null
        }else{
            let prev = this.head
            while(prev.next !== this.tail){ // takes the value before the tail
                prev = prev.next
            }
            prev.next = null // the last value
            this.tail = prev // passing the new last value to tail
        }
        this.size--
        return value
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

// const queue = new linkedTailList()

export default linkedTailList


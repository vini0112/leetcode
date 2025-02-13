
class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}

class BinarySearch{
    constructor(){
        this.root = null 
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            if(value < newNode.value){
                this.newNode.left = value
            }else{
                this.newNode.right = value
            }
        }
        return newNode
    }


}

const bst = new BinarySearch()
bst.insert(20)
console.log(bst.insert(19))
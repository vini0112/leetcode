
class nodeTree{
    constructor(value){
        this.value = value
        this.left = null 
        this.right = null
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
        const newNode = new nodeTree(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }


    insertNode(root, newNode){
        // console.log(root, ' ->',newNode)
        if(newNode.value < root.value){ // se new value menor que o root vai pra esquerda
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left, newNode)
            }
        }else{ // se new value maior que o root vai pra direita
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root)
            // this.preOrder(root.left)
            // this.preOrder(root.right)
        }
    }


    search(root, value){
        
    }


}

const tree = new BinarySearch()
tree.insert(15)
tree.insert(8)
tree.insert(20)
tree.insert(10)
tree.insert(9)
tree.insert(5)
tree.preOrder(tree.root)

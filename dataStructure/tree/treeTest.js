
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


    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    searchMax(){
        // console.log(this.root.right)
        if(this.root.right === null){
            console.log(this.root.value)
        }else{
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left) // taking the last value of left node
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right) // take the last value of right node
        }
    }

    

}

const tree = new BinarySearch()
// tree.insert(15)
// tree.insert(8)
tree.insert(20)
tree.insert(21)
tree.insert(25)
tree.insert(9)
tree.insert(5)
// tree.preOrder(tree.root)
// tree.levelOrder()
console.log(tree.max(tree.root))
// console.log(tree.min(tree.root))

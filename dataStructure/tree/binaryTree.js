
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
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                // this recursive call will find the approprite node to insert
                this.insertNode(root.left, newNode) 
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }



    search(root, value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value < root.value){ // se menor que root value
                return this.search(root.left, value)
            }else{
                return this.search(root.right, value)
            }
        }
    }

    // Depth First Search (DFS)
    preOrder(root){
        if(root){
            console.log(root)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    // Breadth First Search (BFS)
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

}

const bst = new BinarySearch()
bst.insert(10)
bst.insert(2)
bst.insert(5)
// console.log(bst.insert(20))
// console.log(bst.search(bst.root, 10))
// console.log(bst.search(bst.root, 2))

// bst.postOrder(bst.root)
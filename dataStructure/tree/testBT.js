
class nodeTree{
    constructor(value){
        this.value = value
        this.right = null 
        this.left = null
    }
}

class queueBina {
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new nodeTree(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.inserValue(this.root, newNode)
        }
    }

    inserValue(root, newNode){
        if(newNode.value < root.value){
            
            if(root.left === null){
                root.left = newNode
            }else{
                this.inserValue(root.left, newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.inserValue(root.right, newNode)
            }
        }
    }

    isEmpty(){
        return this.root === null
    }

    preOrder(root){
        if(root){
            console.log(root)
            // console.log(root.right.value)
            // console.log(root.left)
        }
    }

    levelOrder(){
        const arr = []
        arr.push(this.root)
        while(arr.length){
            let curr = arr.shift()
            console.log(curr.value)
            if(curr.right){
                arr.push(curr.right)
            }
            if(curr.left){
                arr.push(curr.left)
            }
        }
    }

}

const queue = new queueBina()
queue.insert(10)
queue.insert(1)
queue.insert(5)
// queue.preOrder(queue.root)
// queue.levelOrder()
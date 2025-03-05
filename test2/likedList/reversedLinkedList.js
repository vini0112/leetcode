
// let head = [1,2,3,4,5]
//          
// Output: [5,4,3,2,1]

function reversed(head){
    let prev = null

    while(head){

        const temp = head.next
        head.next = prev // elemento aponta para esquerda
        prev = head // receber current value
        head = temp 

    }
    return node
}

// console.log(reversed(head))


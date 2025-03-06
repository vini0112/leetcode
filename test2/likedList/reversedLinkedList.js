
// let head = [1,2,3,4,5]
//          
// Output: [5,4,3,2,1]


// CREATE PREV WITH NULL
// LOOP THROUGH THE LINKED LIST (WHILE HEAD !== NULL)
// a. CREATE NEXNODE VARIABLE AND ASSIGN IT TO HEAD.NEXT
// b. ASSIGN HEAD.NEXT TO PREV
// c. ASSIGN PREV TO HEAD
// d. ASSIGN HEAD TO NEXNODE
// RETURN PREV

function reversed(head){
    let prev = null
    let curr = head
    while(curr){

        const temp = curr.next
        curr.next = prev // elemento aponta para esquerda
        prev = curr // receber current value
        curr = temp 

    }
    return prev
}

// console.log(reversed(head))


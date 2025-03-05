

// FAST POINTER METHOD

// if it's cycle linked list return true -> else..

function cyclelist(head){
    if(!head) return false
    let fast = head
    let slow = head

    while(fast){
        if(!fast.next) return false // if fast.next == undefied

        else{
            fast = fast.next.next 
            slow = slow.next
        }

        if(fast === slow) return true
    }
    return false
}

// console.log(cyclelist([3, 2, 0, -4]))


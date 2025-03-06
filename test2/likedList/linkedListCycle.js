

// FAST POINTERS METHOD

// if it's cycle linked list return true -> else..
// HEADER [3, 2, 0, -4]
function cyclelist(head){
    if(!head) return false
    let fast = head // move twice fast -> fast.next.next
    let slow = head // move once fast -> slow.next

    while(fast){
        if(!fast.next) return false // if fast.next === undefied

        else{
            fast = fast.next.next 
            slow = slow.next
        }

        if(fast === slow) return true //if they meet again there's a cycle otherwise there's not
    }
    return false
}

// console.log(cyclelist([3, 2, 0, -4]))


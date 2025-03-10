
// return the middle value of the linked list

// FAST POINTERS METHOD
// WHEN THE FAST POINTER REACHES THE BOUND WE RETURN SLOW!  

var middleNode = function(head) {
    let fast = head, slow = head
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
    }
    return slow
};
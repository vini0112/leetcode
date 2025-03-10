
// remove the nTH node from the end of the list

// TWO STEPS TO SOLVE
// move right pointer (n) times
// move right pointer until null

let head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

var removeNthFromEnd = function(head, n) {

    let dummy = new ListNode(0) // dummy = 0 -> null
    dummy.next = head 
    
    let left = dummy // 0 
    let right = head // 1 2 3 4 5

    // Move the right pointer (N) times
    while(right && n > 0){ 
        right = right.next // 2 3
        n -= 1
    }

    // right = 3 4 5
    while(right){ // goes until right be null
        left = left.next  // 1 2 3
        right = right.next // 4 5 null
    }

    left.next = left.next.next 
    return dummy.next
}

// removeNthFromEnd(head, n)
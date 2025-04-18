
let head = [1,1,2]
// Output: [1,2]


//  RIGHT APPROACH

function sec(head){
    let res = head;

    while (head && head.next) {
        // se curr === to next value -> next value = next next value
        if (head.val === head.next.val) {
            head.next = head.next.next;
        } else {
            head = head.next;
        }
    }

    return res; 
}

console.log(sec(head))



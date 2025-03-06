

let list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]


function merging(list1, list2){
    let dummy = new ListNode(0)
    let head = dummy // head = 0 -> null

    // list1    list2
    //   1   <=   1 --> head -> 0 -> 1 -> null - list1
    //   2   <=   1 --> head -> 0 -> 1 -> 1 -> null - list2
    //   2   <=   3 --> head -> 0 -> 1 -> 1 -> 2 -> null - list1
    //   4   <=   3 --> head -> 0 -> 1 -> 1 -> 2 -> 3 -> null - list2
    //   4   <=   4 --> head -> 0 -> 1 -> 1 -> 2 -> 3 -> 4 -> null - list1
    while(list1 && list2){
        if(list1.val <= list2.val){
            head.next = list1
            list1 = list1.next
        }else{
            head.next = list2
            list2 = list2.next
        }
        head = head.next // moving onw forward every iteration
    }

    head.next = list1 || list2
    

    return dummy.next 


}

console.log(merging(list1, list2))
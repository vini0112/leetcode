
// RECURSIVE

var maxDepth = function(root) {
    
    if(!root) return 0

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};


// BFS
var maxDepth = function(root) {
    
    if(!root) return 0

    let depth = 0
    let queue = [root]

    while(queue.length){
        let len = queue.length

        for(let i = 0;i < len;i++){
            let curr = queue.shift()
            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
        depth++
    }
    return depth
};

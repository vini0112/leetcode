
var isBalanced = function(root) {
    if(!root) return 1

    let heightL = isBalanced(root.left) // take the max height of left
    let heightR = isBalanced(root.right)// take the max height of right

    if(heightL === false || heightR === false) return false // if exists only one side of the node

    if(Math.abs(heightL - heightR) > 1) return false //difference cant be more than one
    return Math.max(heightL, heightR) + 1


};

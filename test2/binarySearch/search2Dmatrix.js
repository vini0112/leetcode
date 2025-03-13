
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

let matrix = [[1,2,3,7],[10,11,16,20],[23,30,34,60]], target = 3

function twoD(matrix, target) {

    let search_row = []

    for(let i = 0;i < matrix.length;i++){
        // takes the last number of the row to compare to target
        let lastMatrixNumber = matrix[i].length - 1

        // if target greater than last number of the row, move to next row
        if(target > matrix[i][lastMatrixNumber]) continue

    // solution should satisfy the position on any one of the row
    //if target less than the last number of the row, copy the row! and break
        else if(target <= matrix[i][lastMatrixNumber]){
            search_row = [...matrix[i]]
            break
        }
    }
    // if the target is there in the search_row, we return true, else false
    if(search_row.includes(target)) return true; else return false
};

console.log(twoD(matrix, target))


function OverlappingRanges(arr) {
    let counter = 0; 

    for(var i = arr[0]; i < arr[1]; i++) {

        if (i >= arr[2] && i <= arr[3]) {
            counter ++;
        }
    }
    return (counter >= arr[4]) ? true : false;
};
// const result = OverlappingRanges([5, 12, 3, 8, 3]);
// console.log(result) 

//output: true

// You will be given an array with 5 numbers. The first 2 numbers represent a range, and the next two numbers represent another range.
// The final number in the array is X.
// The goal of our program is to determine if both ranges overlap by at least X numbers.

let intervals = [[1,3],[2,6],[8,10],[15,18]]

function overlapp(arr){
    let start = 0
    let end = 1

    arr = arr.sort((a, b) => a[start] - b[start])

    let prev = arr[0] // primeiro item
    let res = [prev]

    for(let curr of arr){
        // se current na 0 < previous na 1 
        
        if(curr[start] <= prev[end]){ 
            
            prev[end] = Math.max(prev[end], curr[end])
            
        }else{

            res.push(curr)
            prev = curr
        }
    }
    return res
}

console.log(overlapp(intervals))

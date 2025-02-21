function OverlappingRanges(arr) {
let counter = 0; 
for (var i = arr[0]; i < arr[1]; i++) {

if (i >= arr[2] && i <= arr[3]) {
counter ++;
    }
}
return (counter >= arr[4]) ? true : false;
    };
const result = OverlappingRanges([5, 12, 3, 8, 3]);
console.log(result) 
//output: true

// You will be given an array with 5 numbers. The first 2 numbers represent a range, and the next two numbers represent another range.
// The final number in the array is X.
// The goal of our program is to determine if both ranges overlap by at least X numbers.



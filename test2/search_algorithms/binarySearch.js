
let arr = [1, 3, 4, 6, 7]
let t = 6

function binarySearch(arr, t){
    // two pointers
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex){
        
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        
        if(t == arr[middleIndex]){
            return middleIndex
        }

        if(t < arr[middleIndex]){
            rightIndex = middleIndex - 1
        }else{
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binarySearch(arr, t)) 

// BIG'O O(logn) -> input size is reduced by half in the while loop!
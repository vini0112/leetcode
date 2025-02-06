let arr = [1,2,3,4,5]
let size = 2

var chunk = function(arr, size) {
    let subArray = []

    for(let i = 0; i < arr.length; i += size){
        console.log(i, i+size)
        subArray.push(arr.slice(i, i+size))
        
    }

    console.log(subArray)
};

chunk(arr, size)
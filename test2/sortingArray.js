
let arr = [-6, 20, 8, -2, 4]

function manualSort(arr){

    let swapped
    do{
        swapped = false
        for(let i = 0;i < arr.length;i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                
                swapped = true
            }
        }
    }while(swapped)
}

manualSort(arr)
console.log(arr)




function insertionSort(arr){

    for(let i = 0;i < arr.length;i++){ // i -> 0/1/2/3
        let numberToInsert = arr[i] //numberToInsert -> 8/20/-2/4
        let j = i - 1 // j -> -1/0/1/2
        while(j >= 0 && arr[j] > numberToInsert){ 
            arr[j+1] = arr[j] //arr[j+1] -> add o numero na frente se for menor que o anterior
            j = j-1 // 0/-1/1/0
        }

        // j = -1, 0, 1, 2, 3
        // arr[j] = undefied, 8, 20, -2, 4
        arr[j+1] = numberToInsert // arr[0] -> 8/20
        
    }

}


let arr = [8, 20, -2, 4, -6]
insertionSort(arr)
// console.log()




// function insertion(arr){

//     for(let i = 0;i < arr.length;i++){
//         let pointer = arr[i]
//         let j = i - 1
//         while(j >= 0 && arr[j] > pointer){
//             arr[j+1] = arr[j]
//             j = j-1
//         }
//         arr[j+1] = pointer
//     }
// }
// let arr = [2, 3, 0, -6, -9]
// insertion(arr)
// console.log(arr)

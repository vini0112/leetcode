
let arr = [1, 3, 5, 2, 6, 7]
let t = 7
function lienarSearch(arr, t){
    for(let i = 0;i < arr.length;i++){
        if(arr[i] == t) return i
    }
    return -1
}
// console.log(lienarSearch(arr, t))





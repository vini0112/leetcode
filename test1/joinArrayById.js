
var join = function(arr1, arr2) {
    const combined = arr1.concat(arr2)
    const result = {}

    combined.forEach(obj =>{
        const id = obj.id
        if(!result[id]){
            result[id] = {...obj}
        }else{
            result[id] = {...result[id], ...obj}
        }
    })
    return Object.values(result)

};

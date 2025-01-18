
let nums = [1, 2, 3, 4]

var reduce = function(nums, init) {
    let valor = init
    
    for(let i = 0;i < nums.length;i++){
        if(init > 0){
            valor += nums[i] * nums[i]
        }else{
            valor += nums[i]
        }
        // console.log(valor+' <- '+nums[i] +' -> '+ nums[i]+' = '+nums[i] * nums[i])
    }
    return valor
};

console.log(reduce(nums, 0))


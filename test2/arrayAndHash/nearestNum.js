
// Math.abs -> evita numeros negativos

var findClosestNumber = function(nums) {
    let nearest = nums[0]
    
    nums.forEach(num => {
        // -4/-2/1/4   -4               vira 4          vira 2/1/4              vira 4    vira 2/1
        if ((num > nearest && Math.abs(nearest) === Math.abs(num)) || (Math.abs(nearest) > Math.abs(num))) {
            console.log(num)

            // 2 -> 1
            nearest = num
        } 
    })

    return nearest
};


function secundApproach(nums){
        // the first value -> closest
        // all the values after the first one -> num
    return nums.reduce((closest, num) =>{
        
        // if num < o primeiro valor, retornamos num, atualizando o closest!
        if(Math.abs(num) < Math.abs(closest) || (Math.abs(num) === Math.abs(closest) && num > closest)){
            return num
        }

        return closest
        // console.log(closest)
    })
}


// the 1ª condition Compare absolute values (Math.abs(num) < Math.abs(closest))

// the 2ª condition Handles the case where absolute values are the same
//  both numbers are at the same distance from zero like (-3, 3)

// the 3ª condition we preferer the positives numbers (num > closest)
// if we have (-1, 1) 1 will remain


let nums = [-4,-2,1,4,8]

// console.log(findClosestNumber(nums)) 
console.log(secundApproach(nums))


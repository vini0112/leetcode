
let height = [1,8,6,2,5,4,8,3,7] // output -> 49
//          0 1 2 3 4 5 6 7 8 9  <- width

function containerWater(height){
    let left = 0
    let right = height.length - 1
    let maxima = 0

    while(left < right){
        let width = (right - left) 
        let maxArea = Math.min(height[left], height[right]) * width //pega o minumo e multiplica
        maxima = Math.max(maxima, maxArea)

        if(height[left] <= height[right]){
            left++
        }else{
            right--
        }
    }

    return maxima

}

console.log(containerWater(height))


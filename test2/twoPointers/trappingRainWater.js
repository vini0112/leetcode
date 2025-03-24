
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

let height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
function trap(height) {

    let left = 0
    let right = height.length - 1

    let leftMax = height[left] 
    let rightMax = height[right] 
    
    let water = 0
    
    while(left < right){
        //  
        if(leftMax < rightMax){ 
            left++ // andamos um

            // atualizando leftMax 
            //                current | valor da frente
            leftMax = Math.max(leftMax, height[left]) 
            //    current updated - valor da frente
            water += leftMax - height[left] 
        }else{
            right-- 
            rightMax = Math.max(rightMax, height[right])
            water += rightMax - height[right]
        }
    }

    return water
};

console.log(trap(height))

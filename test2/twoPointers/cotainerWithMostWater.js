
// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.
let height = [1,8,6,2,5,4,8,3,7] // output -> 49
//          0 1 2 3 4 5 6 7 8 9  <- width

function containerWater(height){
    let l = 0
    let r = height.length - 1
    let max = 0

    while(l < r){
        let w = r-l // width
        let minHeight = Math.min(height[l],height[r]) 
        let area = w * minHeight
        max = Math.max(max, area) // updating max with larger area

        if(height[l] < height[r]){
            l++
        }else{
            r--
        }
    }

    return max

}

console.log(containerWater(height))


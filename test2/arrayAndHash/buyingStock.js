let prices = [7,1,5,3,6,4]

function stocks(prices){
    let firtsValue = prices[0] 
    let profit = 0

    for(let i = 1;i < prices.length;i++){
        // to buy
        if(firtsValue > prices[i]){
            firtsValue = prices[i]
        }

        // to sell
        //                this profit here receives the value 
        profit = Math.max(profit, prices[i] - firtsValue)
                        
    }

    return profit
}

console.log(stocks(prices))
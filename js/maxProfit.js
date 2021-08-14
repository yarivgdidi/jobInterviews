// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
const maxProfit = function(prices) {
    let maxProfit = 0
    prices.forEach((price, i) => {
        for (let j = i+1; j < prices.length; j++ ) {
            const profit = prices[j] - price
            if (profit > maxProfit) {
                maxProfit = profit
            }
        }

    })
    return maxProfit

};

const profits = [7,1,5,3,6,4]
console.log(maxProfit(profits))
console.log(maxProfit([7,6,4,3,1]))
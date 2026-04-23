class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let entryDay = 0
        let exitDay = 1
        let maxProfit = 0

        while (exitDay < prices.length) {
            if (prices[entryDay] < prices[exitDay]) {
                const profit = prices[exitDay] - prices[entryDay]
                maxProfit = Math.max(maxProfit, profit)  
            } else {
                entryDay = exitDay
            }
            exitDay++
        }

        return maxProfit
    }
}

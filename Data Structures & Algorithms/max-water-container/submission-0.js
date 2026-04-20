class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0

        for(let i = 0; i < heights.length - 1; i++) {
            for(let j = i + 1; j < heights.length; j++) {
                const area = (j - i) * Math.min(heights[i], heights[j])
                max = Math.max(max, area)
            }
        }

        return max
    }
}


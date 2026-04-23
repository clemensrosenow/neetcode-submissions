class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (height.length < 3) return 0

        let area = 0
        let l = 0
        let r = height.length - 1

        let leftMax = 0
        let rightMax = 0

        while(l < r) {
            if (height[l] < height[r]) {
                if (height[l] < leftMax) {
                    area += leftMax - height[l]
                } else {
                    leftMax = height[l]
                }
                l++
            } else {
                if (height[r] < rightMax) {
                    area += rightMax - height[r]
                } else {
                    rightMax = height[r]
                }
                r--
            }
        }

        return area
    }
}

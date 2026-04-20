class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i = 0; i < nums.length - 1; i++) {
            const currentValue = nums[i]
            for(let j = i + 1; j < nums.length; j++) {
                const iterativeValue = nums[j]
                const sum = currentValue + iterativeValue
                if (sum === target) return [i, j].sort((a, b) => a - b)
            }
        }
    }
}

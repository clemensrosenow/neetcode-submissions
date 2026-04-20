class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length < 2) return nums.length

        nums = [...new Set(nums)].sort((a, b) => a - b)

        let longestSequence = 1
        let currentSequence = 1

        for(let i = 0; i < nums.length - 1; i++) {
            const current = nums[i]
            const next = nums[i + 1]
            if (current + 1 < next) {
                currentSequence = 1
                continue;
            }
            currentSequence++
            if(currentSequence > longestSequence) {
                longestSequence = currentSequence
            }
        }

        return longestSequence
    }
}

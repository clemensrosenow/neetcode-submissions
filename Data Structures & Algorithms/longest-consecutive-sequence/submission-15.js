class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums)
        let longestSequence = 0

        for(const num of numSet) {
            if(numSet.has(num - 1)) continue // Only count numbers that start sequences
            
            let length = 1
            while(numSet.has(num + length)) {
                length++
            }
            
            longestSequence = Math.max(longestSequence, length)
        }

        return longestSequence
    }
}

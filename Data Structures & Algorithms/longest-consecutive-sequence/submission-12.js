class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestSequence = 0

        const numSet = new Set(nums)

        for(const num of numSet) {
            if(numSet.has(num - 1)) continue
            let currentNum = num
            let currentSequence = 1

            while(numSet.has(currentNum + 1)) {
                currentSequence++
                currentNum++
            }
            
            longestSequence = Math.max(longestSequence, currentSequence)
        }


        return longestSequence
    }
}

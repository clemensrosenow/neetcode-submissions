class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = new Map()
        for (const num of nums) {
            frequency.set(num, (frequency.get(num) ?? 0) + 1)
        }
        return Array.from(frequency.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map((entry) => entry[0])
    }
}

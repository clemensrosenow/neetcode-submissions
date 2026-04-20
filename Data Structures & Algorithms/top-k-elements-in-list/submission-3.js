class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const valueFrequence = new Map()
        nums.forEach(num => {
            if (!valueFrequence.has(num)) {
                valueFrequence.set(num, 0)
            }
            valueFrequence.set(num, valueFrequence.get(num) + 1)
        })
        const frequencies = Array.from(valueFrequence.entries()).sort(([va, fa], [vb, fb]) => fb - fa).map(([v, f]) => v)

        return frequencies.slice(0, k)
    }
}

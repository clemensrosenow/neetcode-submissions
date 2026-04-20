class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => (a - b))
        let triples = []

        for(let i = 0; i < nums.length - 2; i++) {
            if (i !== 0 && nums[i] === nums[i - 1]) continue

            const target = -nums[i]
            let j = i + 1
            let k = nums.length - 1

            while (j < k) {
                const sum = nums[j] + nums[k]

                if (sum < target) {
                    j++
                } else if (sum > target)
                    k--
                else {
                    triples.push([nums[i], nums[j], nums[k]])
                    j++
                    k--

                    while (j < k && nums[j] === nums[j - 1]) {
                        j++;
                    }
                }
            }
        }
        return triples
    }
}

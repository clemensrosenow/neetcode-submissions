class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let maxLength = 0
        
        for (let i = 0; i < s.length; i++) {
            const chars = new Set()
            while (i + chars.size < s.length && !chars.has(s.at(i + chars.size))) {
                chars.add(s.at(i + chars.size))
            }
            maxLength = Math.max(maxLength, chars.size)
        }

        return maxLength
    }
}

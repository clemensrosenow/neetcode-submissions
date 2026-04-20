class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = new Map()
        strs.forEach(str => {
            const sortedLetters = str.split('').sort().join()
            if (!anagrams.has(sortedLetters)) {
                anagrams.set(sortedLetters, [])
            }
            anagrams.get(sortedLetters).push(str)
        })
        return Array.from(anagrams.values())
    }
}
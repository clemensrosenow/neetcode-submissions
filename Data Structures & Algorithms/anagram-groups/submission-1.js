class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = new Map()
        strs.forEach(str => {
            const sortedLetters = sortWord(str)
            if (!anagrams.has(sortedLetters)) {
                anagrams.set(sortedLetters, [])
            }
            anagrams.get(sortedLetters).push(str)
        })
        return Array.from(anagrams.values())
    }
}

/**
     * @param {string} string
     * @return {string}
     */
function sortWord(string) {
    return string.split('').sort().join()
}
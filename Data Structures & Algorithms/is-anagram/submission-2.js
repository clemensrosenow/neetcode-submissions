class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return sortedLetters(s) === sortedLetters(t)
    }

   
}


 /**
     * @param {string} s
     * @return {string}
     */
function sortedLetters(s) {
    return s.split('').sort().join('')
}
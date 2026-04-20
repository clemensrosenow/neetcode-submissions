class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
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
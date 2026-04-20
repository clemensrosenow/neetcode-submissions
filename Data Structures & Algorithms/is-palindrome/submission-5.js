class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replaceAll(/[^a-zA-Z0-9]+/g, 
        '').toLowerCase()
        return s === s.split('').reverse().join('')
    }
}

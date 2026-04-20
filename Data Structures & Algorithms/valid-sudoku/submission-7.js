class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i = 0; i < board.length; i++) {
            const row = board[i]
            const col = board.flatMap(row => row[i])
            
            const boxSize = 3
            const boxColOffset = (i % boxSize) * boxSize;
            const boxRowOffset = Math.floor(i / boxSize) * boxSize;
            const box = board.slice(boxRowOffset, boxRowOffset + boxSize).flatMap(column => column.slice(boxColOffset, boxColOffset + 3))

            if ([row, col, box].some(hasDuplicates)) return false
        }
        return true
    }
}

/**
 * @param {character[]} area
 * @return {boolean}
 */
function hasDuplicates(area) {
    const values = area.filter(field => field !== ".")
    return new Set(values).size !== values.length
}
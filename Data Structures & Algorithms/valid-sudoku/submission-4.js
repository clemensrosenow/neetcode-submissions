class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i = 0; i < 9; i++) {
            const row = board[i]
            const column = board.flatMap(row => row[i])
            
            const col = (i % 3) * 3;
            const rowI = Math.floor(i / 3) * 3;
            const box = board.slice(rowI, rowI + 3).flatMap(column => column.slice(col, col + 3))

            if ([row, column, box].map(hasDuplicates).includes(true)) return false
        }
        return true
    }
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function validRows(board) {
    for(let i = 0; i < 9; i++) {
        
        if (hasDuplicates(row)) return false
    }
    return true
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function validColumns(board) {
    for(let i = 0; i < 9; i++) {
        const column = board.flatMap(row => row[i])
        if (hasDuplicates(column)) return false
    }
    return true
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function validBoxes(board) {
    for (let i = 0; i < 9; i++) {
        const col = (i % 3) * 3;
        const row = Math.floor(i / 3) * 3;
        const box = board.slice(row, row + 3).flatMap(column => column.slice(col, col + 3))

        if (hasDuplicates(box)) return false
    }
    return true
}

/**
 * @param {character[]} area
 * @return {boolean}
 */
function hasDuplicates(area) {
    const values = area.filter(field => field !== ".")
    return new Set(values).size !== values.length
}
/**
 * @description 快速排序
 * @author xmw
 */

/**
 * 快速排序
 * @param arr number arr
 */

function quickSort(arr: number[]): number[] {
    const len = arr.length
    if (len <= 1) {
        return arr
    }
    const mid = Math.floor(len / 2)
    const left: number[] = [], right: number[] = [], midVal = arr[mid]
    for (let i = 0; i < len; i++) {
        if (i === mid) {
            continue
        }      
        const c = arr[i]  
        if (c <= midVal) {
            left.push(c)
        } else {
            right.push(c)
        }
    }
    return [...quickSort(left), midVal, ...quickSort(right)]
}

console.log(quickSort([2, 3, 1, 7, 6]));


/**
 * 2255  统计是给定字符串前缀的字符串数目
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
function countPrefixes(words: string[], s: string): number {
    let res = 0, sLen = s.length
    words.forEach(item => {
        const len = item.length
        if (len > sLen) return;
        if (s.slice(0, len) === item) {
            res++
        }
    })
    return res
};
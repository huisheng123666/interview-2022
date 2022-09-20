/**
 * @description 连续字符串
 * @author xmw
 */

interface TRes {
    char: string
    length: number
}

/**
 * 求连续最多的字符和次数
 */ 
function findContinuousChar(str: string): number {
    const len = str.length
    if (len <= 1) {
        return len
    }
    let left = 0, right = 1, res = 0
    while(left < right && right < len) {
        const prev = str[left]
        let dis = right - left + 1
        if (str[right] !== prev) {
            left = right
            dis--
        }
        if (dis > res) {
            res = dis
        }
        right++
    }
    return res
}
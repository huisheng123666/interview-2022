/**
 * @description 旋转数组
 * @author xmw
 */
export function rotateArr1(arr: number[], k: number): number[] {
    const len = arr.length    
    if (!k || len === 0) {
        return arr
    }
    const step = k % len
    for (let i = 0; i < step; i++) {
        arr.unshift(arr.pop()!)
    }
    return arr
}

export function rotateArr2(arr: number[], k: number): number[] {
    const len = arr.length    
    if (!k || len === 0) {
        return arr
    }
    const step = k % len 
    const left = arr.slice(-step)
    return left.concat(arr.slice(0, len - step))
}

// const arr = [1, 2, 3, 4, 5]
// console.log(rotateArr2(arr, 3));

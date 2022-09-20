/**
 * @description 移动0到末尾
 * @author xmw
 */


function moveZeros(arr: number[]): number[] {
    // 首位0的位置
    let preIndex = 0
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] !== 0) {
            const pre = arr[preIndex]
            arr[preIndex] = arr[i]
            arr[i] = pre
            preIndex++
        }
    }
    return arr
}

// console.log(moveZeros([0,1,0,3,12]));

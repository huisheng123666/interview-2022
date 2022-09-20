/**
 * @description 斐波那契数列
 * @author xmw
 */

// 递归时间复杂度太高 O(2^n)
function fibinacci(n: number): number {
    if (n <= 0) return 0
    if (n === 1) return 1
    return fibinacci(n - 2) + fibinacci(n - 1)
}

// console.log(fibinacci(10));

export function fibinacciFor(n: number): number {
    if (n <= 0) return 0
    if (n === 1) return 1

    let n1 = 0
    let n2 = 1

    let res = 0
    for (let index = 2; index <= n; index++) {
        res = n1 + n2
        n1 = n2
        n2 = res
    }

    return res
}

console.log(fibinacciFor(100));

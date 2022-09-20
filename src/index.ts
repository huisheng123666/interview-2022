/**
 * @description index
 * @author 双越老师
 */

import './01-algotithm/quick-sort'

function debounce(fn: () => void, delay: number = 200) {
    let timer: number = 0
    return function () {
        if (timer !== 0) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn()
        }, delay)
    }
}

function throttle(fn: () => void, delay: number = 200) {
    let flag = true
    return () => {
        if (flag) {
            setTimeout(() => {
                fn()
                flag = true
            }, delay)
        }
        flag = false
    }
}
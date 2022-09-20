/**
 * @description 旋转数组 test
 * @author xmw
 */

import { rotateArr1, rotateArr2 } from './array-rotate'

describe('数组旋转', () => {
   it('正常情况', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = 3
        const res = rotateArr2(arr, k)
        expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
   })

   it('数组为空', () => {
        const res = rotateArr2([], 3)
        expect(res).toEqual([])
    })
})
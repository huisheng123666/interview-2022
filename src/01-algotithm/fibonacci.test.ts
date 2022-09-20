/**
 * @description 斐波那契数列 test
 * @author xmw
 */

import { fibinacciFor } from './fibonacci'

describe('斐波那契数列', () => {
    it('0 和 1', () => {
        expect(fibinacciFor(0)).toBe(0)
        expect(fibinacciFor(1)).toBe(1   )
    })
    it('正常情况', () => {
        expect(fibinacciFor(2)).toBe(1)
        expect(fibinacciFor(3)).toBe(2)
        expect(fibinacciFor(6)).toBe(8)
    })
})
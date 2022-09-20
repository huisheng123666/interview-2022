/**
 * @description 括号匹配 test
 * @author xmw
 */

import { matchBracket } from './match-bracket'

describe('括号匹配', () => {
    it('正常括号', () => {
        expect(matchBracket('{[()]}')).toEqual(true)
    })
})
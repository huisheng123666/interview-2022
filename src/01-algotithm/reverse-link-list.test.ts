import { MyQueue } from './reverse-link-list'

describe('链表实现队列', () => {
    it('add length', () => {
        const q = new MyQueue()
        expect(q.length).toBe(0)
        q.add(1)
        q.add(2)
        q.add(3)
        expect(q.length).toBe(3)
    })
    it('delete', () => {
        const q = new MyQueue()
        expect(q.length).toBe(0)
        q.add(1)
        q.add(2)
        q.add(3)
        expect(q.delete()).toBe(1)
        expect(q.delete()).toBe(2)
        expect(q.delete()).toBe(3)
        expect(q.delete()).toBeNull()
    })
})
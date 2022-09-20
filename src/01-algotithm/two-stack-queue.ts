/**
 * @description 两个栈实现一个队列
 * @author xmw
 */


export class MyQueue {
    private stack1: number[] = []
    private stack2: number[] = []

    add(n: number) {
        this.stack1.push(n)
    }

    delete(): number | null {
        const stack1 = this.stack1
        const stack2 = this.stack2
        while(stack1.length) {
            stack2.push(stack1.pop()!)
        }
        const res = stack2.pop()

        while(stack2.length) {
            stack1.push(stack2.pop()!)
        }

        return res || null
    }

    get length(): number {
        return this.stack1.length
    }
}

// const q = new MyQueue()
// q.add(1)
// q.add(2)
// q.add(3)
// console.log(q.length);
// console.log(q.delete());
// console.log(q.length);



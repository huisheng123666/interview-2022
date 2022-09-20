/**
 * @description 反转单项链表
 * @author xmw
 */

interface ListNode {
    value: number
    next: ListNode | null
}

function createLinkList(arr: number[]): ListNode | null {
    const length = arr.length
    if (length === 0) return null
    let res: ListNode = {
        value: arr[length-1],
        next: null
    }
    for (let i = length - 2; i >= 0; i--) {
        res = {
            value: arr[i],
            next: res
        }
    }
    return res
}

// console.log(createLinkList([1, 2, 3, 4]));

const listNode = createLinkList([1, 2, 3, 4])

/**
 * 反转单项链表
 */
function reverseListNode(listNode: ListNode | null): ListNode | null {
    if (!listNode) return null
    let head: ListNode = {
        value: listNode.value,
        next: null
    }
    let current = listNode.next
    while(current) {
        head = {
            value: current.value,
            next: head
        }
        current = current.next
    }
    return head
}

// console.log(reverseListNode(listNode));

/**
 * 链表实现队列
 */

export class MyQueue {
    private head: ListNode | null = null
    private tail: ListNode | null = null

    length = 0

    add(value: number) {
        if (this.head === null) {
            this.head = {
                value,
                next: null
            }
            this.tail = this.head
        } else {
            if (this.tail) {
                this.tail.next = {
                    value,
                    next: null
                }
                this.tail = this.tail.next
            }
        }
        this.length++
    }

    delete() {
        let value = null
        if (this.head) {
            value = this.head.value
            this.head = this.head?.next
            if (this.head === null) {
                this.tail = null
            }
            this.length--
        }
        return value
    }
}

// const queue = new MyQueue()
// queue.add(1)
// queue.add(2)
// queue.add(3)
// queue.add(4)
// console.log(queue.length);
// console.log(queue.delete(), queue.length);
// console.log(queue.delete(), queue.length);
// console.log(queue.delete(), queue.length);
// console.log(queue.delete(), queue.length);
// console.log(queue.delete(), queue.length);

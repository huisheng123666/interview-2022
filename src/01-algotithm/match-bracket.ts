export function matchBracket(str: string): boolean {
    const lenth = str.length
    if (lenth <= 1) return false
    const stack: string[] = []
    const cMap: {
        [key in string]: string
    } = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let s of str) {
        if (cMap[s]) {
            stack.push(s)
            continue
        } else {
            const prev = stack[stack.length - 1]
            if (s === cMap[prev]) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}


// console.log(matchBracket('{([(])}'));

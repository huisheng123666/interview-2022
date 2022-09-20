/**
 * @description 二叉搜索树
 * @author xmw
 */

interface TreeNode {
    value: number
    left: TreeNode | null
    right: TreeNode | null
}

/**
 * 前序遍历
 */
function prevOrderTraverse(node: TreeNode | null) {
    if (!node) return
    console.log(node.value);
    prevOrderTraverse(node.left)
    prevOrderTraverse(node.right)
}

/**
 * 中序遍历
 */
function inOrderTraverse(node: TreeNode | null) {
    if (!node) return
    inOrderTraverse(node.left)
    console.log(node.value);
    inOrderTraverse(node.right)
}

/**
 * 后续遍历
 */
 function postOrderTraverse(node: TreeNode | null) {
    if (!node) return
    postOrderTraverse(node.left)
    postOrderTraverse(node.right)
    console.log(node.value);
}

/**
 * 寻找第k小的值
 */
function getKthValue(node: TreeNode | null, k: number): number {
    if (!node) return -1
    let res = -1
    function deepTree(node: TreeNode | null) {
        if (!node) return
        deepTree(node.left)
        k--
        if (k===0) {
            res = node.value
            return
        }
        deepTree(node.right)
    }
    deepTree(node)
    return res
}

const tree: TreeNode = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null
        }
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 8,
            left: null,
            right: null
        }
    }
}

console.log(getKthValue(tree, 4));

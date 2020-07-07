//Objective is to find the sum of all left leaves in a binary tree.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(3)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 7)
tree.addLeftNode(tree.root.right, 15)


//O(n) solution that uses a dfs traversal and a boolean to find only the 
//left leaves of the tree

let sum = 0

function dfs(node, isLeft) {
    if (!node) {
        return
    }

    if (isLeft && !node.left && !node.right) {
        sum += node.val
    }

    dfs(node.left, true)
    dfs(node.right, false)
}
dfs(tree.root, false)

return sum
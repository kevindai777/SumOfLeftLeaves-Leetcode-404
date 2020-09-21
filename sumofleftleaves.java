//Java Solution

class Solution {
    
    int sum;
    public int sumOfLeftLeaves(TreeNode root) {
        sum = 0;
        dfs(root, false);
        
        return sum;
    }
    
    public void dfs(TreeNode node, boolean isLeft) {
        if (node == null) {
            return;
        }
        
        if (node.left == null && node.right == null && isLeft) {
            sum += node.val;
        }
        
        dfs(node.left, true);
        dfs(node.right, false);
    }
}
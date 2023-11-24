var isBalanced = function(root) {  
    // 记录二叉树是否平衡
    let flag = true 
    const getDepth = function(root){
        if(!root){
        return 0
    }
     if (!flag){
         return 
        }
    let left = getDepth(root.left)
    let right = getDepth(root.right)
    // 如果左右最大深度大于 1，就不是平衡二叉树
    if(Math.abs(left - right)>1){
        flag = false
    }
    return Math.max(left,right)+1      
    }
    getDepth(root)
    return flag
    
};

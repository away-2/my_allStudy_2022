var maxDepth = function(root) {
    if(!root){ 
        return 0
    }else{
        const left = maxDepth(root.left)  // 遍历左节点
        const right = maxDepth(root.right)  // 遍历右节点
        return Math.max(left,right)+1       // 返回遍历左右节点数最大值+1
    }
};
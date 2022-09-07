var invertTree = function (root) {
    // если root пустой
    if (!root) return root;

    // обьявляем очередь
    const queue = [root];

    // пока очередь не опустеет
    while (queue.length > 0) {
        // забираем значения из очереди и меняем местами ветви дерева
        const currNode = queue.shift();
        [currNode.right, currNode.left] = [currNode.left, currNode.right];

        // пушим левые и правые ветви (если они существуют)
        if (currNode.left) queue.push(currNode.left);
        if (currNode.right) queue.push(currNode.right);
    }

    return root;
};

console.log(root[4, 2, 7, 1, 3, 6, 9])
вернет[4, 7, 2, 9, 6, 3, 1]
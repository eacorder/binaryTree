import Tree from "./tree.js";


const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.rightNode !== null) {
      prettyPrint(node.rightNode, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.leftNode !== null) {
      prettyPrint(node.leftNode, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};


const randomArr = (n) => {
    const arr = Array.from({length: n}, () => Math.floor(Math.random() * 100)+1);
    return arr;
}

const arr = randomArr(10)
const tree = new Tree(arr);  

console.log("Binary tree form with random numbers ",'\n')
prettyPrint ( tree.root );
console.log('\n',"the tree is balanced :" ,tree.isBalanced());

console.log('\n',"Elements of array in level order:",tree.levelOrder());
console.log('\n',"Elements of array in order:",tree.inOrder());
console.log('\n',"Elements of array in pre order:",tree.preOrder())
console.log('\n',"Elements of array in post order:",tree.postOrder())

for (let i = 0; i < 10; i++) {
    tree.insert(Math.floor(Math.random() * 20)+1);
}

console.log('\n',"Adding random numbers to unbalanced the tree ")
console.log('\n',"the tree is balanced :" ,tree.isBalanced());
console.log('\n',"Rebalancing the tree and checking if its balanced ")
tree.rebalance();

console.log('\n',"the tree is balanced :" ,tree.isBalanced());

console.log('\n',"Elements of array in level order:",tree.levelOrder());
console.log('\n',"Elements of array in order:",tree.inOrder());
console.log('\n',"Elements of array in pre order:",tree.preOrder())
console.log('\n',"Elements of array in post order:",tree.postOrder())








import Tree from "./tree.js";


const randomArr = (n) => {
    const arr = Array.from({length: n}, () => Math.floor(Math.random() * 100)+1);
    return arr;
}

const arr = randomArr(100)
const tree = new Tree(arr);  

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




//console.log(tree.find(25));
//console.log(tree.inOrder());
//console.log(tree.preOrder());
//console.log(tree.postOrder());
//console.log(tree.height(tree.root))
console.log(tree.isBalanced())
prettyPrint(tree.root); 

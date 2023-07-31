import Tree from "./tree.js";


const randomArr = (n) => {
    const arr = Array.from({length: n}, () => Math.floor(Math.random() * 100)+1);
    return arr;
}

const arr = randomArr(8)
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

tree.insert(60)
tree.insert(25)
tree.insert(19)
tree.delete(19)

tree.levelOrder();
//console.log(tree.find(25));

prettyPrint(tree.root); 

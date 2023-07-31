import Node from "./node.js"

export default class Tree {
    constructor(arr) {
        this.root = this.buildTree(arr)
    }

    buildTree(arr){
        let sortedArray = arr.sort(function(a, b){return a - b});
        let uniqueArray = [...new Set(sortedArray)];
        let endArray = uniqueArray.length - 1;
        let root = this.binaryTreeSort(uniqueArray, 0, endArray)
        return root
    }

    binaryTreeSort(arr, start, end){
        if( start > end ){
            return null;
        }
        
        const mid = parseInt((start + end) / 2, 10);
        const node = new Node(arr[mid]);        
        node.leftNode = this.binaryTreeSort(arr , start, mid - 1);
        node.rightNode = this.binaryTreeSort(arr, mid + 1 , end );
        return node;

    }
    
    insert(value ,root = this.root) {    
        if ( root == null ) {
            root =   new Node(value);
            return root;
        }

        if( value < root.value ) {
            root.leftNode = this.insert(value, root.leftNode);
        }
        else if( root.value < value ){
            root.rightNode = this.insert(value, root.rightNode);
        }

        return root;
    }

    find(value, root = this.root){
        if(root === null)
        return null;
      
        else if(value < root.value)
            return this.find(value, root.leftNode );

     
        else if(value > root.value)
            return this.find(value, root.rightNode);
     
        else
            return root;
    }

    delete(value , root = this.root){
        if (!root) {
            return null;
          }
      
        if(value == root.value) {
            if (!root.leftNode && !root.rightNode) {
                return null;
            }
        
            if (!root.leftNode) {
                return root.rightNode;
            }
        
            if (!root.rightNode) {
                return root.leftNode;
            }
        
            let temp = root.rightNode;
        
            while(!temp.leftNode) {
                temp = temp.leftNode;
            }
        
            root.value = temp.value;
        
            root.right = this.delete( temp.value, root.rightNode);  
    
        } else if (value < root.value) {
            root.leftNode = this.delete(value, root.leftNode);
            return root;
        
        } else {
            root.rightNode = this.delete(value, root.rightNode);
            return root;
        }
    }

    levelOrder(callback){
        let root = this.root
        let queue = [];
        let result = [];
        let nextNode;
        if (!root) {
            return null;
        }
        queue.push(root);
        result.push(root.value);
        if (callback) callback(root);

        while(queue.length > 0){
            
            nextNode = queue.shift();
            if(nextNode.leftNode ){
                queue.push(nextNode.leftNode);
                result.push(nextNode.leftNode.value);
                if (callback) callback(nextNode.leftNode);
            }
            if(nextNode.rightNode){
                queue.push(nextNode.rightNode);
                result.push(nextNode.rightNode.value);
                if (callback) callback(nextNode.rightNode);

            }            
        }
                
        if (!callback) return result;


    }

}


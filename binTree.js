'use strict';

// function binaryTree(str){
//   var binTree = {};
//   var len = str.length;
//   str = str.split('');
//   function makeSubNode(aStr){
//     if (aStr.length <= 1) {
//       return {
//         data: aStr[0],
//         left: null,
//         right: null
//       };
//     } else {
//       console.log(aStr.length);
//       console.log(aStr);
//       var data = aStr.shift();
//       if (aStr && aStr[0] > data){
//         return {
//           data: data,
//           left: null,
//           right: makeSubNode(aStr)
//         };
//       } else if (aStr && aStr[0] <= data){
//         return {
//           data: data,
//           right: null,
//           left: makeSubNode(aStr)
//         }
//       }
//     }
//   }
//   if (len === 0){
//     return binTree;
//   } else {
//     binTree = makeSubNode(str)
//     return binTree;
//   }
// }
// var temp = binaryTree('character')
// console.log(temp);

class Node {
  constructor(left, right, data) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
}

let root = new Node(
    new Node(null, null, 8),
    new Node(null, null, 10),
    5
);


// recursion (depth-first traversal)
let print = function(root) {
    console.log(root.data);
    if(root.left) print(root.left);
    if(root.right) print(root.right);
};

// there is another, bit more complicated - breadth-first tree traversal
// (not implemented)

print(root);

'use strict';

// function Node(data){
//   this.data = data;
//   this.parent = null;
//   this.left = {};
//   this.right = {};
// }
//
// function Tree(data){
//   var node = new Node(data);
//   this._root = node;
// }

function binaryTree(str){
  var binTree = {};
  // var ptr = 0;
  var len = str.length;
  str = str.split('');
  function makeSubNode(aStr){
    if (aStr.lenth === 1) {
      return {
        data: aStr[0],
        left: null,
        right: null
      };
    } else {
      var data = aStr.shift();
      // console.log(aStr);
      if (aStr[0] > data){
        return {
          data: data,
          left: null,
          right: makeSubNode(aStr)
        };
      } else {
        return {
          data: data,
          right: null,
          left: makeSubNode(aStr)
        }
      }
    }
  }
  if (len === 0){
    return {};
  } else {
    return makeSubNode(str);
  }
}

console.log(binaryTree('character'));

'use strict';

function binaryTree(str){
  var binTree = {};
  var len = str.length;
  str = str.split('');
  function makeSubNode(aStr){
    if (aStr.lenth <= 1) {
      return {
        data: aStr[0],
        left: null,
        right: null
      };
    } else {
      var data = aStr.shift();
      console.log(aStr);
      if (aStr && aStr[0] > data){
        return {
          data: data,
          left: null,
          right: makeSubNode(aStr)
        };
      } else if (aStr && aStr[0] <= data){
        return {
          data: data,
          right: null,
          left: makeSubNode(aStr)
        }
      }
    }
  }
  if (len === 0){
    return binTree;
  } else {
    binTree = makeSubNode(str)
    return binTree;
  }
}
var temp = binaryTree('character')
console.log(temp);

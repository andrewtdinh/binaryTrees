'use strict';

function Node(data){
  this.data = data;
  this.parent = null;
  this.left = {};
  this.right = {};
}

function Tree(data){
  var node = new Node(data);
  this._root = node;
}

function binaryTree(str){
  // var binTree = {};
  // var ptr = 0;
  // var len = str.length;
  function makeSubNode(aStr){
    if (aStr.lenth === 1) {
      return {
        data: aStr.shift(),
        left: null,
        right: null
      };
    } else {
      var data = aStr.shift();
      if (aStr[0].toLowerCase() > data.toLowerCase()){
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

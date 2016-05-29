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
  var binTree = {};
  var ptr = 0;
  var len = str.length;
  function makeSubNode(aStr){
    if (aStr.lenth === 1) {
      return {
        data: aStr.shift(),
        left: null,
        right: null
      };
    }
  }
  if (len === 0){
    return {};
  } else {
    return makeSubNode(str);
  }
}

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
  function makeSubNode(obj, aStr, data, left, right){
    if (aStr === ''){
      return;
    }
  }
}

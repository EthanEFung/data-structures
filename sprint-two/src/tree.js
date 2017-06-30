var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var checkTree = function(tree) {

    if (hasValue(tree, target)) {
      return true;
    } else if (hasChildren(tree.children)) {
      return tree.children.some(checkTree);
    } else {
      return false;
    }
    
  };
  var hasChildren = function(children) {
    return children.length > 0 ? true : false;
  };
  var hasValue = function(tree, target) {
    return tree.value === target;
  };
  return checkTree(this);
};

var myTree = Tree();

myTree.addChild('a');
myTree.contains('a');
//After declaring a Tree

/*
 * Complexity: What is the time complexity of the above functions?
 */

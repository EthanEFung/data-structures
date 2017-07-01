var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;

  _.extend(tree, searchMethods);
  return tree;
};

var searchMethods = {};

searchMethods.insert = function(value) {

  var newTree = BinarySearchTree(value);

  var defineTreeAsLeftOrRight = function(parent, child) {
    return child.value < parent.value ? 'left' : 'right';
  };

  var isTheDirectionNull = function(parent, direction) {
    return parent[direction] === null;
  };

  var assignTheChildToTheDirection = function(parent, child, direction) {
    parent[direction] = child;
  };
  
  var insertTree = function (parent, child) {
    var direction = defineTreeAsLeftOrRight(parent, child);

    if(isTheDirectionNull(parent, direction)) {
      assignTheChildToTheDirection(parent, child, direction);
    } else {
      insertTree(parent[direction], child);
    }
  };
  
  insertTree(this, newTree);
};

searchMethods.contains = function () {};

searchMethods.depthFirstLog = function () {};



/*
 * Complexity: What is the time complexity of the above functions?
 */

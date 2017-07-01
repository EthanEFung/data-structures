
var defineTreeAsLeftOrRight = function(parent, child) {
  return child.value < parent.value ? 'left' : 'right';
};

var isTheDirectionNull = function(parent, direction) {
  return parent[direction] === null;
};

var assignTheChildToTheDirection = function(parent, child, direction) {
  parent[direction] = child;
};

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


  
  var insertTree = function (parent, child) {
    var direction = defineTreeAsLeftOrRight(parent, child);

    if (isTheDirectionNull(parent, direction)) {
      assignTheChildToTheDirection(parent, child, direction);
    } else {
      insertTree(parent[direction], child);
    }
  };
  
  insertTree(this, newTree);
};

searchMethods.contains = function (val) {
  var determineTheValueLeftOrRight = function(treeValue, val) {
    return treeValue > val ? 'left' : 'right';
  };

  if (this.value === val) {
    return true;
  } else {
    var direction = determineTheValueLeftOrRight(this.value, val);
    if (isTheDirectionNull(this, direction)) {
      return false;
    } else {
      return this[direction].contains(val);
    }
  }
};

searchMethods.depthFirstLog = function (callback) {
  var runCbOnTree = function(tree, callback) {
    callback(tree.value);
  };
  
  runCbOnTree(this, callback);

  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  } 

  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }


};



/*
 * Complexity: What is the time complexity of the above functions?
 */

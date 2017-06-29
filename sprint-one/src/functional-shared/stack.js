var stackMethods = {

  push: function (value) {
    this.storage[this.size()] = value;
  },

  pop: function() {
    var popped = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return popped;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};

var extend = function(objToExtend, fromThisObj) {
  for (var key in fromThisObj) {
    objToExtend[key] = fromThisObj[key];
  }
};

var Stack = function() {
  var newStack = {
    storage: {},
  };
  _.extend(newStack, stackMethods);
  return newStack;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


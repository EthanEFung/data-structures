

var HashTable = function() {
  this._limit = 8;  
  this._storage = LimitedArray(this._limit);
  this._storage.bucket = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var duplate = [k, v];
  this._storage.bucket.push(duplate);
  this._storage.set(index, this._storage.bucket);
};
//insert should take some sort of key and value and assign this
//duplate to an index in an array

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i][0] === k) {
      bucket[i][1] = undefined;
    }
  }
};






/*
 * Complexity: What is the time complexity of the above functions?
 */



var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  if (this.storage[this.size()]) {
    this.storage[this.size() + 1] = value;
  } else {
    this.storage[this.size()] = value;  	
  }
};

Queue.prototype.dequeue = function () {
  var dequeued = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  return dequeued;
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};

/*
  List the attributes that are relevent within the queue function.
    you can use 'this'.
  set methods onto the prototype of queue
    (1)enqueue - place a specified value on the end of the queue
    (2)dequeue - take the first item of the queue off and return value
    (3)size - return the length of the queue
*/



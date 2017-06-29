var Queue = function() {
  var newQueue = {};
  newQueue.storage = {};
  newQueue.first = 0;
  newQueue.last = 0;

  extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.last] = value;
    this.last++;
  },

  dequeue: function() {
    var dequeued = this.storage[this.first];  	
    delete this.storage[this.first];
    this.first++;
    return dequeued;
  },

  size: function() {
    return Object.keys(this.storage).length;    
  }
};

var extend = function(obj, anotherObj) {
  for (var key in anotherObj) {
    obj[key] = anotherObj[key];
  }
};
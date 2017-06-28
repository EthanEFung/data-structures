var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if(size > 0) {
      var dequeued = storage[0];
      delete storage[0]
      size--;
      return dequeued;
    }
   
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

console.log(
  queue.enqueue('a');
  queue.enqueue('b');
  queue.dequeue());

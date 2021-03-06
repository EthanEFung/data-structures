var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var startIdx = 0;
  var endIdx = 0;
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[endIdx] = value;
    endIdx++;
    size++;
  };

  someInstance.dequeue = function() {
    if (startIdx !== endIdx) {
      var dequeued = storage[startIdx];
      delete storage[startIdx];
      startIdx++;
      size--;

      return dequeued;
    } 
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};


var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  //attributes here

  return newQueue;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  if (this.storage[this.size()]) {
    this.storage[this.size() + 1] = value;
  } else {
    this.storage[this.size()] = value;
  }
};

queueMethods.dequeue = function() {
  var dequeued = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  return dequeued;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

//create a queueMethods Object that will house
//(1) enqueue - place one item on the end of the queue
//(2) dequeue - take the first item of the queue off 
//(3) size - returns the size or the length of the queue

//Set the queueMethods object as the prototype of the 
//  function Queue
//declare any relevent attributes to the queue object
//return queue Object
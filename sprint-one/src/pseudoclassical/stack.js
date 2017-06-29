var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function (value) {
  this.storage[this.size()] = value;
};

Stack.prototype.pop = function () {
  var popped = this.storage[this.size() - 1 ];
  delete this.storage[this.size() - 1];
  return popped;
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};

//Psuedoclassical style: a less verbose way of creating an object,
//and its prototype with the advantages of the 'new' word.
//also to keep in mind the use of this is no longer needed,
//since 'this' will always refer to the object that is created
//possible draw backs, much harder to trace the inner workings


// In Stack, assume that the object will be created with the 'new' keyword
//attach any properties that are relevent
//do not write a return statement (this is handled by 'new');

//using Stack.prototype, declare whatever methods you like.
//(1) push - takes a given value and appends the value to 
// the end of the stack
//(2) pop - takes the last item of the stack and removes it,
//     returning its value.
//(3) size - returns the size of the stack.
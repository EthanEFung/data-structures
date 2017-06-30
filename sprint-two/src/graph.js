
// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node) {
  this.forEachNode(function(item) {
    if (item.hasOwnProperty(node)) {
      delete item[node];
    }
  });
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].hasOwnProperty(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode][toNode] = true;
  this[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this[fromNode][toNode];
  delete this[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this, cb);
  //iterate through a node, and for each property call the cb
};
// var myGraph = new Graph();

// // debugger;
// myGraph.addNode(4);
// console.log(myGraph, ' after adding 4');

// myGraph.addNode(5);
// console.log(myGraph, ' after adding 5');

// myGraph.addEdge(5, 4);
// console.log(myGraph, ' after adding edge on 4 and 5');



// myGraph.removeEdge(5,4);
// console.log(myGraph, ' before removal of edge');


// console.log(myGraph, ' after removal');
/*
 * Complexity: What is the time complexity of the above functions?
 */



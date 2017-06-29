var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(node) {

    if (list.head === null) {

      list.head = value;
      // console.log('This is the head when no head is assigned', list.head);

    } else if (list.tail === null) {
      list.tail = value;
      list.head.next = value;
    } else {
      list.tail.next = value;
      list.tail = value;
      // console.log('This is the head when head is defined', list.head, 'and tail is', list.tail);
    }
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var myNode = 10;
var yourNode = 15;
var myLinkedList = LinkedList();
myLinkedList.addToTail(10);
console.log(myLinkedList);



// greeter = function() {
//   var greeting = 'HI'
//   return greeting
// }

// console.log(greeter())

// var a = greeter()


/*
 * Complexity: What is the time complexity of the above functions?
 */

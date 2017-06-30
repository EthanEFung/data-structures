var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else if (list.tail === null) {
      list.tail = newNode;
      list.head.next = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var lastHead = list.head;
    list.head = list.head.next;
    return lastHead.value;
  };

  list.contains = function(target) {
    var isTheNodeTheTail = function(currentNode) {
      return list.tail === currentNode;
    };
    var checkTheValue = function(currentNode) {
      if(currentNode.value === target) {
        return true;
      } else if (isTheNodeTheTail(currentNode)) {
        return false;
      } else {
        var nextNode = currentNode.next;
        return checkTheValue(nextNode);
      }
    };
    return checkTheValue(list.head);
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


// var myLinkedList = LinkedList();
// myLinkedList.addToTail(10);
// console.log(myLinkedList);



/*
 * Complexity: What is the time complexity of the above functions?
 */

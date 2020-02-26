// pointer example. we can display obj2 as it is referenced by obj1
let obj1 = { a: true };
let obj2 = obj1;
obj1.a = 'booya';
delete obj1;
// console.log('2', obj2);

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const nodeToAppend = new Node(value);
    this.tail.next = nodeToAppend;
    this.tail = nodeToAppend;
    this.length++;
  }

  prepend(value){
    const nodeToPrepend =  new Node(value);
    nodeToPrepend.next = this.head;
    this.head = nodeToPrepend;
    this.length++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }

  insert(index, value){
    const nodeToInsert = new Node(value);
    if(index === 0){
      return this.prepend(value);
    }
    const prevNode = this.traverseToIndex(index - 1);
    const nextNode = prevNode.next;
    prevNode.next = nodeToInsert;
    nodeToInsert.next = nextNode;
    this.length++;
  }

  remove(index) {
    if(index ===  0){
      this.head = this.head.next;
    } else {
      const prevNode = this.traverseToIndex(index - 1);
      const removedNode = prevNode.next;
      const nextNode = removedNode.next;
      prevNode.next = nextNode;
    }
    this.length--;
  }
  
  traverseToIndex(index){
    let currentIndex = 0;
    let currentNode = this.head;
    while(currentIndex < index){
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  reverse() {
    if(!this.head.next){
      return this.head;
    }
    let first = this.head;
    let second = first.next;
    this.tail = first;
    while(second){
      let originalNext = second.next;
      second.next = first;
      first = second;
      second = originalNext;
    }
    console.log('head before setting null?',this.head.next);
    console.log('first ele?',first);
    this.head.next = null;
    this.head = first;
  }
  // insert2(index, value){
  //   if(index >= this.length) {
  //     console.log('yes')
  //     return this.append(value);
  //   }

  //   const newNode = new Node(value);
  //   const leader = this.traverseToIndex(index-1);
  //   const holdingPointer = leader.next;
  //   leader.next = newNode;
  //   newNode.next = holdingPointer;
  //   this.length++;
  // }

  // traverseToIndex(index){
  //   let counter = 0;
  //   let currentNode = this.head;
  //   while(counter !== index) {
  //     currentNode = currentNode.next;
  //     counter++;
  //   }
  //   return currentNode;
  // }
}

const myLinkedList = new LinkedList(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.prepend(1);
// myLinkedList.insert(1, 99);
// myLinkedList.remove(1);  
myLinkedList.reverse();
console.log('list?', myLinkedList.printList());

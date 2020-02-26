class Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  setPrev(node){
    this.prev = node;
  }

  setNext(node){
    this.next = node;
  }
}

class DoublyLinkedList {
  constructor(value){
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const node = new Node(value);
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value){
    const node = new Node(value);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
  }

  insert(index, value){
    if(index <= 0) return this.prepend(value);
    const prevNode = this.traverseToIndex(index - 1);
    const newNode = new Node(value);
    const nextNode = prevNode.next;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;
    this.length++;
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

  remove(index){
    if(index <= 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return;
    }
    if(index >= this.length -1){
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return;
    }
    const prevNode = this.traverseToIndex(index - 1);
    const nodeToRemove = prevNode.next;
    const nextNode = nodeToRemove.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
  }

}

const doubleLinkedList = new DoublyLinkedList(10);
doubleLinkedList.append(11);
doubleLinkedList.append(13);
doubleLinkedList.prepend(9);
doubleLinkedList.insert(3,12);
doubleLinkedList.insert(0,8);
doubleLinkedList.remove(4);
console.log(doubleLinkedList);
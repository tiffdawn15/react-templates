class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
  }

  getByIndex(index) {
    let position = 0;
    let currentNode = this.head;

    while(position < index){
        currentNode = currentNode.next;
        position++;
    }

    return currentNode;  
  }

  addByIndex(index, value) {
    const newNode = new Node(value);

    if(this.size === 0){
        this.head = newNode;
        return; 
    }
    const prevNode = this.getByIndex(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.size++;
  }

  removeByIndex(index){
    let current = this.head;
    if(this.size === 0){
        this.head = current.next;
    } else {
        const prevNode = this.getByIndex(index - 1);
        prevNode.next = prevNode.next.next;
    }
  }
}

const linkedList1 = new LinkedList();

linkedList1.add(12);
linkedList1.add(13);

console.log(linkedList1);

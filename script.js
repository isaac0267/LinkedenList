class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

// her vi skal lave den anden klass som den hedder LinkedList

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  add(payload) {
    const newNode = new Node(payload);
    if (this.tail === null) {
      // his listen er tom
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  addFirst(payload) {
    const newNode = new Node(payload);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  addLast(payload) {
    this.add(payload); // Samme som `add`, da den tilføjer til slutningen
  }
  clear(){
    this.head=null;
    this.tail=null;
  }

  get(index){
    let current=this.head;
    let counter=0;
    while(current!==null){
      if(counter==index){
        return current.data;
      }
      counter++;
      current=current.next;
    }
    return undefined;
  }
  removeLast() {
    if (!this.tail) {
        return undefined;
    }
    const removeData = this.tail.data;
    if (this.head === this.tail) {
        this.head = this.tail = null;
    } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
    return removeData;
}


  dumpList() {
    let current = this.head;
    console.log("List:");
    while (current !== null) {
      console.log(
        `node: ${current.data} prev: ${current.prev?.data} next: ${current.next?.data}`
      );
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.addFirst("A");
list.add("B");
list.addLast("C");
console.log("Efter tilføjelser:");
list.dumpList();

console.log("Element på index 1:",list.get(1));
console.log("Element på index 0:",list.get(0));
console.log("Element på index 2:",list.get(2));
console.log("Fjerner første element:", list.removeFirst());   //Forventer A
console.log("Fjerner sidste element:", list.removeLast());// forventer B

console.log("Efter fjernelser:");
list.dumpList();

// Test clear metoden 
list.clear();
console.log("Efter clear");
list.dumpList();



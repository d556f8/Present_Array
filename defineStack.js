function Node(val, next = null) {
  this.val = val ?? 0;
  this.next = next;
}

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }

  push(val) {
    const newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) return;
    this.top = this.top.next;
  }

  peek() {
    if (this.isEmpty()) return;
    return this.top.val;
  }

  display() {
    if (this.isEmpty()) return;
    let curr = this.top;
    while (curr.next) {
      console.log(curr.val);
      curr = curr.next;
    }
    console.log(curr.val);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.display();

console.log();

stack.pop();
stack.display();
/*
stack 
  |4|    
  |3|    |3|
  |2| -> |2|
  |1|    |1|
*/

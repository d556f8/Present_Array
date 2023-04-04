class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(item) {
    this.arr.push(item);
  }

  dequeue() {
    this.arr.shift();
  }

  display() {
    console.log(this.arr);
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.display();
/* OUTPUT: [1, 2, 3, 4] */

queue.dequeue();
queue.display();
/* OUTPUT: [2, 3, 4] */

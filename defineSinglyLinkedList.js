function Node(val, next = null) {
  this.val = val ?? 0;
  this.next = next;
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);

// Link like `Singly Linked List`
a.next = b;
b.next = c;

console.log(a);
/* OUTPUT: a { val: 1, next: b { val: 2, next: c { val: 3, next: null } } } */

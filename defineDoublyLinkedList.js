function Node(val, prev = null, next = null) {
  this.val = val ?? 0;
  this.prev = prev;
  this.next = next;
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);

// Link like `Doubly Linked List`
a.next = b;
b.prev = a;
b.next = c;
c.prev = b;

console.log(a);
/* OUTPUT: 
a { 
  val: 1,
  prev: null,
  next: b { 
    val: 2,
    prev: a,
    next: c {
      val: 3, 
      prev: b, 
      next: null
    } 
  } 
} 
*/

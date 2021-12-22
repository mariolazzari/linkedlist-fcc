const Node = require("./Node");

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

console.log("Head:", a);

// print values
const printList = head => {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
};

console.log("\nPrint list");
printList(a);

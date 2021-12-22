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

// print lidt recursively
const printListRec = head => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printListRec(head.next);
};

console.log("Print list recursively:");
printListRec(a);

// traverse list
const linkedListValues = head => {
  let values = [];
  let current = head;
  while (current) {
    values.push(current.val);
    current = current.next;
  }

  return values;
};

console.log("\nTraverse list");
console.log(linkedListValues(a));

// helper func
const fillValues = (node, values) => {
  if (!node) {
    return;
  }

  values.push(node.val);
  fillValues(node.next, values);
};

// traverse list recurvisvely
const linkedListValuesRec = head => {
  const values = [];
  fillValues(head, values);
  return values;
};

console.log("\nTraverse list recursie:");
console.log(linkedListValuesRec(a));

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

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

// sum list
const sumList = head => {
  let current = head;
  let sum = "";

  while (current) {
    sum += current.val;
    current = current.next;
  }
  return sum;
};

console.log("\nSum list:", sumList(a));

// sum list recursively
const sumListRec = head => {
  if (!head) {
    return "";
  }

  return head.val + sumListRec(head.next);
};

console.log("Sum list recursively:", sumListRec(a));

// find a value in a list
const findVal = (head, val) => {
  let current = head;

  while (current) {
    if (current.val === val) {
      return true;
    }
    current = current.next;
  }
  return false;
};

// find
console.log("\nFind C:", findVal(a, "C"));
console.log("Find G:", findVal(a, "G"));

// find a value in a list (recursive)
const findValRec = (head, val) => {
  if (!head) {
    return false;
  }

  if (head.val === val) {
    return true;
  }

  return findValRec(head.next, val);
};

// find recursively
console.log("\nFind C:", findVal(a, "C"));
console.log("Find G:", findVal(a, "G"));

// get index vaue
const indexValue = (head, index) => {
  let count = 0;
  let current = head;

  while (current) {
    if (count === index) {
      return current.val;
    }
    count++;
    current = current.next;
  }
  return null;
};

// index value
console.log("\nIndex 2 value:", indexValue(a, 2));
console.log("Index 9 value:", indexValue(a, 9));

// reverse list
const reverseList = head => {
  let current = head;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

console.log("\nReverse list");
printList(reverseList(a));

// reverse list recursively
const reverseListRec = (head, prev = null) => {
  if (!head) {
    return prev;
  }

  const next = head.next;
  head.next = prev;
  return reverseListRec(next, head);
};

console.log("\nReverse list rec");
printList(reverseListRec(d));

const q = new Node("Q");
const r = new Node("R");

q.next = r;
console.log("\nHead2:", q);

// zipper lists
const zipperList = (head1, head2) => {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;

  while (current1 && current2) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count++;
  }

  if (current1) {
    tail.next = current1;
  }
  if (current2) {
    tail.next = current2;
  }

  return head1;
};

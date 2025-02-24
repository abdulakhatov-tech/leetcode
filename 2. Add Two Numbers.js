class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  append(value) {
    const listNode = new ListNode(value);

    if (this.isEmpty()) {
      this.head = listNode;
    } else {
      let prev = this.head;

      while (prev.next) {
        prev = prev.next;
      }

      prev.next = listNode;
    }

    this.size++;
  }

  display() {
    let current = this.head;
    let listValues = "";

    while (current) {
      listValues += current.value + (current.next ? " -> " : "");
      current = current.next;
    }

    return listValues;
  }
}

const list1 = new LinkedList();
const list2 = new LinkedList();

list1.append(2);
list1.append(4);
list1.append(3);

list2.append(5);
list2.append(6);
list2.append(4);

// console.log("List1 size:", list1.getSize());
// console.log("List2 size:", list2.getSize());

console.log("List1:", list1.display());
console.log("List2:", list2.display());

const addTwoNumbers = (l1, l2) => {
  let List = new ListNode(0);
  let head = List;

  let sum = 0;
  let carry = 0;

  while(l1 !== null | l2 !== null || carry !== 0) {
    // sum = carry;

    if(l1 !== null) {
      sum += l1.value;
      l1 = l1.next;
    }

    if(l2 !== null) {
      sum += l2.value;
      l2 = l2.next;
    }

    if(sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;
    sum = carry;
    carry = 0;
  }

  return List.next
};

const result = addTwoNumbers(list1.head, list2.head);

const print = (head) => {
  let current = head;
  let listValues = "";

  while (current) {
    listValues += current.value + (current.next ? " -> " : "");
    current = current.next;
  }

  return listValues;
};

console.log("Result:", print(result));

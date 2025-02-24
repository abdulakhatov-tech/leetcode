class ListNode {
  constructor(value = 0, next = null) {
    this.val = value;
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
    const node = new ListNode(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }

    this.size++;
  }

  display() {
    let current = this.head;
    let listValues = "";

    while (current) {
      listValues += current.val + " ";
      current = current.next;
    }

    console.log(listValues);
  }
}

const list_1 = new LinkedList();
const list_2 = new LinkedList();

list_1.append(2);
list_1.append(4);
list_1.append(3);

list_2.append(5);
list_2.append(6);
list_2.append(4);

list_1.display();
list_2.display();

const addTwoNumbers = (l1, l2) => {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = carry;

    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  return dummyHead.next;
};

// Fix: Pass the head nodes instead of LinkedList instances
const result = addTwoNumbers(list_1.head, list_2.head);

// Function to print the result linked list
const printList = (head) => {
  let current = head;
  let values = [];
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  console.log(values.join(" -> "));
};

printList(result);

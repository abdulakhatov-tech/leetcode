/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const MinHeap = class {
        constructor() {
            this.data = [];
        }
        push(node) {
            this.data.push(node);
            this.data.sort((a, b) => a.val - b.val); // small hacky heap (for junior version)
        }
        pop() {
            return this.data.shift();
        }
        isEmpty() {
            return this.data.length === 0;
        }
    };

    const heap = new MinHeap();
    for (let node of lists) {
        if (node) heap.push(node);
    }

    let dummy = new ListNode(0);
    let tail = dummy;

    while (!heap.isEmpty()) {
        let smallest = heap.pop();
        tail.next = smallest;
        tail = tail.next;
        if (smallest.next) heap.push(smallest.next);
    }

    return dummy.next;
};
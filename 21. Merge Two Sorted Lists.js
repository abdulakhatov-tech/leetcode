/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode(-1)
    let tail = dummy

    let a = list1, b = list2
    while (a && b) {
        if (a.val <= b.val) {
            tail.next = a
            a = a.next;
        } else {
            tail.next = b
            b = b.next
        }
        tail = tail.next
    }

    tail.next = a || b

    return dummy.next;
};
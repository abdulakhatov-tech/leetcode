const addTwoNumbers = (l1, l2) => {
    const dummyHead = {
        value: 0,
        next: null
    };
    let carry = 0;

    while(l1 || l2 || carry) {
        let sum = carry;

        if(l1) {
            sum += l1.value
            l1 = l1.next
        }

        if(l2) {
            sum += l2.value
            l2 = l2.next
        }

        carry = Math.floor(sum / 10)
        current.next = new ListNode(sum % 10)
        current = current.next
    }

       return dummyHead.next 
}

console.log(addTwoNumbers([2,4,3], [5,6,4]))
console.log(addTwoNumbers([0], [0]))
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))


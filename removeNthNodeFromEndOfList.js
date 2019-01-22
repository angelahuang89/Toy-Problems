class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const removeNthFromEnd = (head, n) => {
    const start = new ListNode(0);
    let slow = start;
    let fast = start;
    slow.next = head;
    for (let i = 1; i <= n + 1; i++) {
      fast = fast.next;
    }
    while(fast) {
      fast = fast.next;
      slow = slow.next;
    }
    slow.next = slow.next.next;
    return start.next;
};

/*
specification
input: head of linked list and n, representing the nth node from the end of the list to be removed
output: linked list with nth node removed
constraints:
edge cases:

justification:
to remove a specified node from a linked list

explanation
the given number will determine where to delete from the linked list

visualization

approximation
initialize a slow pointer
initialize a fast pointer

verification

implementation

*/

const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(3);
const a4 = new ListNode(4);
const a5 = new ListNode(5);
a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;

console.log(removeNthFromEnd(a1, 2));
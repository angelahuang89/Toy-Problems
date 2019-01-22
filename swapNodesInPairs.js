class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const swapPairs = head => {
  if (!head || !head.next) return head;
  let prev = head;
  let curr = head;
  const newHead = curr.next;
  if (!head.next.next || !head.next.next.next) {
    const next = curr.next;
    const temp = next.next;
    next.next = curr;
    curr.next = temp;
    return newHead;
  }
  while (curr && curr.next) {
    const next = curr.next;
    const temp = next.next;
    next.next = curr;
    curr.next = temp;
    prev.next = next;
    prev = curr;
    curr = temp;
  }
  return newHead;
};

/*
specification
input: head of linked list
output: head of linked list after swapping each pair of nodes
constraints: constant extra space, don't modify value in the list's nodes
edge cases:

justification:
to swap pairs in a linked list

explanation
the input linked list will determine the order of the output linked list

visualization

approximation
break connections and reset them

verification

implementation

*/

const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(3);
const a4 = new ListNode(4);
a1.next = a2;
a2.next = a3;
a3.next = a4;

console.log(swapPairs(a1));
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const middleNode = head => {
  let fast = head;
  let slow = head;
  while (fast.next) {
    fast = fast.next.next;
    if (!fast) return slow.next;
    slow = slow.next;
  }
  return slow;
}

const middleNode = head => {
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return fast.next ? slow.next : slow;
}

/*

specification
input: head of linked list
output: the middle node of the linked list, if there are two middle nodes, return the second middle node
constraints:
edge cases: if there is no head, return null

justification
to find the middle node of a linked list

explanation
the structure of the linked list will determine which node is in the middle

visualization

approximation
initalize a fast and slow pointer
traverse the linked list
the fast pointer will move two nodes at a time
the slow pointer will move one node at a time
once the fast pointer doesn't have a next
return the slow pointer

verification

implementation


Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
Example 2:

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.

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

const b1 = new ListNode(1);
const b2 = new ListNode(2);
const b3 = new ListNode(3);
const b4 = new ListNode(4);
const b5 = new ListNode(5);
const b6 = new ListNode(6);
b1.next = b2;
b2.next = b3;
b3.next = b4;
b4.next = b5;
b5.next = b6;

console.log(middleNode(a1));
console.log(middleNode(b1));
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
 
const addTwoNumbers = (l1, l2) => {
  let head = l1;
  let carry = false;
  let prev;
  let curr = l1;
  let sum;
  while(curr && l2) {
    sum = curr.val + l2.val;
    if (carry) {
      sum += 1;
      carry = false;
    }
    if (sum >= 10) {
      const digit = sum - 10;
      curr.val = digit;
      carry = true;
    } else {
      curr.val = sum;
    }
    prev = curr;
    curr = curr.next
    l2 = l2.next;
  }
  if (l2) {
    curr = l2;
    prev.next = curr;
  }
  while(curr && carry) {
    sum = curr.val + 1;
    if (sum >= 10) {
      const digit = sum - 10;
      curr.val = digit;
      carry = true;
    } else {
      curr.val = sum;
      carry = false;
    }
    prev = curr;
    curr = curr.next;
  }
  if (carry) {
    const digit = sum - 10;
    prev.val = digit;
    prev.next = new ListNode(1);
  }
  return head;
}

// specification
// input: two linked lists representing two numbers
// output: single linked list representing sum of two numbers
// constraints:
// edge cases:

// justification
// to add and represent the sum of two numbers represented by two linked lists

// explanation
// the two numbers in the linked lists will determine the output linked list

// visualization

// approximation
// while both linked lists have next nodes
// start at the head of both linked lists
// add the two values
// if the value is greater than 10, carry the one over to the next digit
// otherwise create a new node with the sum of the two value4s
// return the head of the list

// verification

// implementation

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

const a1 = new ListNode(2);
const a2 = new ListNode(4);
const a3 = new ListNode(3);
a1.next = a2;
a2.next = a3;

const b1 = new ListNode(5);
const b2 = new ListNode(6);
const b3 = new ListNode(4);
b1.next = b2;
b2.next = b3;

console.log(addTwoNumbers(a1, b1));
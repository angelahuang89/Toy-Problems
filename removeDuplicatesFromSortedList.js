class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const deleteDuplicates = head => {
  if (!head) return null;
  let prev = head;
  let curr = prev.next;
  while (curr) {
    while (curr && prev.val === curr.val) {
      curr = curr.next;
    }
    prev.next = curr;
    prev = curr;
  }
  return head;
};

// specification
// input: sorted link list
// output: linked list with duplicates removed
// constraints:
// edge cases: if list is empty, return null

// justification
// to remove the duplicates from a sorted linked list

// explanation
// the number of repeated values in the linked list will determine the output of the linked list

// visualization

// approximation
// while the current linked list has a next node, iterate through the linked list
// check if the value of current node of linked list is the same as the next value in linked list
// if the values are the same, traverse until a unique value is found
// set the next value of the current node to the next unique node
// update current node to the new next node
// return head of linked list

// verification

// implementation

const a1 = new ListNode(1);
const a2 = new ListNode(1);
a1.next = a2;
const a3 = new ListNode(2);
a2.next = a3;

const b1 = new ListNode(1);
const b2 = new ListNode(1);
b1.next = b2;
const b3 = new ListNode(2);
b2.next = b3;
const b4 = new ListNode(3);
b3.next = b4;
const b5 = new ListNode(3);
b4.next = b5;

console.log(deleteDuplicates(a1));
console.log(deleteDuplicates(b1));
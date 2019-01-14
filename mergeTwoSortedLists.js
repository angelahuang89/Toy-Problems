class ListNode {
  constructor(val) {
		this.val = val;
		this.next = null;
	}
}

const mergeTwoLists = (l1, l2) => {
	if (!l1 && !l2) return null;
	if (!l1) return l2;
	if (!l2) return l1;
	let first = l1;
	let second = l2;
	let newHead;
	let curr;
	if (first.val < second.val) {
		curr = first;
		first = first.next;
	} else {
		curr = second;
		second = second.next;
	}
	newHead = curr;
	while (first && second) {
		if (first.val <= second.val) {
			curr.next = first;
			first = first.next;
		} else {
			curr.next = second;
			second = second.next;
		}
		curr = curr.next;
	}
	if (first) {
		curr.next = first;
	} else {
		curr.next = second;
	}
	return newHead;
};

// specification
// input: two sorted linked lists
// output: new sorted linked list made from combining two lists
// constraints: 
// edge cases:

// justification
// to merge two sorted linked lists

// explanation
// the order of the nodes in the two linked lists will determine the order of the nodes in the new list

// visualization

// approximation
// declare pointers for first and second lists
// determine which list starts with the smallest value
// set head to list with smallest value and move pointer to next node
// iterate while both lists have values
// determine which node to add to list
// set end of list to whichever list still has nodes
// return head of new list

// verification

// implementation

// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(4);
a1.next = a2;
a2.next = a3;

const b1 = new ListNode(1);
const b2 = new ListNode(3);
const b3 = new ListNode(4);
b1.next = b2;
b2.next = b3;

console.log(mergeTwoLists(a1, b1));
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const addTwoNumbers = function (l1, l2) {
  let carryOver = 0;
  let head = new ListNode(0);
  let node = head;

  while (l1 || l2) {
    let l1Value = l1 ? l1.val : 0;
    let l2Value = l2 ? l2.val : 0;
    let sum = l1Value + l2Value + carryOver;
    carryOver = 0;

    if (sum > 9) {
      sum = sum % 10;
      carryOver = 1;
    }

    node.next = new ListNode(sum);
    node = node.next;

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  if (carryOver) {
    node.next = new ListNode(carryOver);
  }
  return head.next;
};


module.exports = addTwoNumbers;
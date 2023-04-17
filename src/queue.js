const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  queue = null;

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (!this.queue) {
      this.queue = node;
    } else {
      let curr = this.queue;

      while (curr) {
        if (!curr.next) {
          curr.next = node;
          break;
        }
        curr = curr.next;
      }
    }
  }

  dequeue() {
    const top = this.queue;
    this.queue = top.next;
    return top.value;
  }
}

module.exports = {
  Queue
};

class Queue {
  items = [];

//   join the back of the queue
  enqueue(data) {
    this.items.push(data);
  } 

//   leave the queue (applies to those who completed their task as well)
  dequeue() {
    return this.items.shift();
  }

//   clear the queue
  clear() {
    this.items = [];
  }

//   take a look at the current person in a particular queue position
  peek() {
    return this.items[0]
  }

//   take a look at the current queue status
  getItems() {
    // use the spread operator to clone the array and then return it
    return [...this.items];
  }
}

module.exports = Queue;
const Queue = require('./Queue')



let fishSoupQueue = new Queue();
fishSoupQueue.enqueue("Paul");
fishSoupQueue.enqueue("Pam");
fishSoupQueue.enqueue("Shun");

console.log("Queue preview");
console.log(fishSoupQueue)

console.log("Uncle is processing...")
let x = fishSoupQueue.getItems();
x[0] = 'Shun';
x[2] = 'Paul'

console.log("Uncle has finished processing")

console.log("Uncle is processing...")
console.log(fishSoupQueue.dequeue())

console.log("Uncle has finished processing")

console.log("Uncle is processing...")
console.log(fishSoupQueue.dequeue())

console.log("Uncle has finished processing")

console.log("Uncle is processing...")
console.log(fishSoupQueue.dequeue())

// 2 timers function in JavaScript

// runs once only
setTimeout( ()=>{
  console.log("Time's up!")
}, 2000)

// keeps running as per specified interval
setInterval( ()=>{
  console.log("One cycle is up")
}, 3000)
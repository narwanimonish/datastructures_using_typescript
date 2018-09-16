import Stack from './stack';

let stack = new Stack();

stack.push(1);
console.log(stack.length())
stack.push(1);
stack.push(1);
stack.push(12);
console.log(stack.length())
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());


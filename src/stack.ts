class Stack {
  count: number;
  storage: Array<any>;
  
  constructor() {
    this.count = 0;
    this.storage = [];
  }

  push(value:any) {
    this.storage.push(value);
    this.count++;
  }

  pop() {
    if(this.count <= 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    this.storage.splice(-1, 1);
    return result;
  }

  peek() {
    return this.storage[this.count-1];
  }

  length() {
    return this.count;
  }
}

export default Stack;
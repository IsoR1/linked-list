class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
      }
      if (!current.nextNode) {
        current.nextNode = newNode;
      }
    }
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
    } else if (this.head != null) {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  size() {
    let counter = 0;
    if (this.head) {
      counter++;
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
        counter++;

        if (!current.nextNode) {
          console.log(`The size is ${counter} nodes`);
          return counter;
        }
      }
    } else {
      console.log(`the size is ${counter} nodes`);
      return;
    }
  }

  getHead() {
    if (this.head) {
      console.log(this.head);
      return this.head;
    } else {
      return undefined;
    }
  }

  getTail() {
    if (this.head) {
      let current = this.head;
      if (!this.head.nextNode) {
        console.log(this.head);
        return this.head;
      }

      while (current.nextNode) {
        current = current.nextNode;

        if (!current.nextNode) {
          console.log(current);
          return current;
        }
      }
    }
  }

  at(index) {
    if (!this.head) return undefined;
    let current = this.head;
    let counter = 1;
    while (current) {
      if (counter === index) {
        console.log(current);
        return current;
      }
      current = current.nextNode;
      counter++;
    }
  }

  pop() {
    if (!this.head) return undefined;
    let removedNode = this.head;
    this.head = this.head.nextNode;
    removedNode.nextNode = null;
    console.log(removedNode.value);
    return removedNode.value;
  }

  contains(value) {
    if (!this.head) return null;
    let found = false;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  findIndex(value) {
    if (!this.head) return -1;
    let counter = 0;

    let current = this.head;
    while (current) {
      if (current.value == value) {
        return counter;
      }
      counter++;
      current = current.nextNode;
    }
  }

  toString() {
    let fullString = "";

    let current = this.head;
    while (current) {
      fullString += `( ${current.value} )` + " -> ";
      current = current.nextNode;
    }
    fullString += "null";
    return fullString;
  }
}

const list = new LinkedList();

list.append("cat");
list.append("dog");
list.append("leopard");
list.append("kitty");
list.append("gerbil");
list.append("hamster");
list.toString();

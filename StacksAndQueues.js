// stack

let stack = []

// push to stack
stack.push("cat")
stack.push("dog")
stack.push('bear')

// pop  // removes first element from stack
stack.pop()

// peek
stack[stack.length - 1]

// stack with classes

class Stack {
    constructor() {
        this.storage = {}
        this.size = 0
    }

    push(element) {
        this.size++
        this.storage[this.size] = element
    }

    pop() {
            let removed = this.storage[this.size]
            delete this.storage[this.size]
            this.size--
            return removed
    }

    peek() {
        this.storage[this.size]
    }
}


const paper = new Stack()
paper.push('2')
paper.push('1')

paper.pop('2')

paper.peek()

console.log(paper)
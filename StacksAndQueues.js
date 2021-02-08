// stack               first in last out

let stack = []

// push to stack
stack.push("cat")
stack.push("dog")
stack.push('bear')

// pop  // removes first element from stack
stack.pop()

// peek
stack[stack.length - 1]


// stack  class based

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




// Queues   first in first out

const queues = []

// enqueue  add to queue
queues.push('one')
queues.push('two')
queues.push('three')

// dequeue  remove from queue
queues.shift()

// queues class based

class Queues {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0 
    }

    enqueue(element) {
        this.storage[this.tail] = element
        this.tail++
    }

    dequeue() {
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }
}

const playlist = new Queues()
playlist.enqueue('RATM --- bulls on parade')
playlist.enqueue('drake -- Gods plan')

playlist.dequeue()

console.log(playlist)
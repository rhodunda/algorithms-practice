class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

class Node {
    constructor(data) {
        this.data = data
        this.next = null 
    }

}

let node1 = new Node(2)
let node2 = new Node(8)
node1.next = node2 
let l1 = new LinkedList(node1)
console.log(l1)


let num1 = new Node(3)
let num2 = new Node(4)
num1.next = num2
let l2 = new LinkedList(num1)
console.log(l2)




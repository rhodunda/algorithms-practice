
class linkedList  {
    
    constructor(head = null) {
        this.head = head
    }
}

class node {
    constructor(data) {
        this.data = data
        this.nest = null 

    }
}

const node1 = new node(2)
const node2 = new node(4)
const node3 = new node(3)

node1.next = node2
node2.next = node3

const l1 = new linkedList(node1)

const num1 = new node(5)
const num2 = new node(6)
const num3 = new node(4)

num1.next = num2
num2.next = num3

const l2 = new linkedList(num1)


// linked list l1 and l2 are in reverse order
// reverse the list and add them together and return the result

const addTwoLinkedList = (l1, l2) => {
    
    let num1 = 0,
        num2 = 0,
        carry = 0,
        solution = new linkedList(0),
        current = solution

    while(l1 || l2) {
        num1 = l1.data
        num1 = l2.data
        
        if(num1 + num2 + carry > 10) {

            current.next = new node(num1 + num2 - 10)
            current = current.next 
            carry + 1
        }else{

            current.next = new node(num1 + num2)
            current = current.next
            carry = 0
        }
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }
        if(carry) current.next = new node(carry)
        return solution.next
}

console.log(addTwoLinkedList(l1, l2))


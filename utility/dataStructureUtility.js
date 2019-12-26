/**
 * Read the Text from a file, split it into words and arrange it as Linked List. 
 * @param {string} Take a user input to search a Word in the List.
 * @return {string} If the Word is not found then add it to the list and return the list.
 * @return {string} if it found then remove the word from the List and then return the list.
 * @return {string} In the end save the list into a file
 */
/*
exports.unOrderedList = (stringArray, searchElement) => {
    let list = new linkedList;
    for (let i = 0; i < stringArray.length; i++) {
        list.add(stringArray[i]);
    }
    if (list.search(searchElement) == -1) {
        list.add(searchElement);
        console.log("element added successfully");
    }
    else {
        list.remove(searchElement);
        console.log("element deleted successfully");
    }
    let elementWrite = list.show()
    writeFile("../../Anjali.txt", elementWrite);
}
class Node {
    constructor(searchElement) {
        this.searchElement = searchElement;
        this.next = null;
        this.size = 0;
    }
}
class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    search(searchElement) {
        let count = 0;
        let presentNode = this.head;
        while (presentNode != null) {
            if (presentNode.searchElement === searchElement) {
                return count;
            }
            count++;
            presentNode = presentNode.next;
        }
        return -1
    }
    remove(searchElement) {
        let presentNode = this.head;
        let previousNode = null;
        while (presentNode != null) {
            if (presentNode.searchElement === searchElement) {
                if (previous == null) {
                    this.head = presentNode.next;
                }
                else {
                    previousNode.next = presentNode.next;
                }
                this.size++;
                return presentNode.searchElement;
            }
            previousNode = presentNode;
            presentNode = presentNode.next;

        }
        return -1;
    }
    add(searchElement) {
        let node = new Node(searchElement);
        let presentNode;
        if (this.head == null) {
            this.head = node;
        }
        else {
            presentNode = this.head;
            while (presentNode.next) {
                presentNode = presentNode.next;
            }
            presentNode.next = node;
        }
        this.size++;
    }
    show() {
        let presentNode = this.head;
        let string = "";
        while (presentNode) {
            string = string + presentNode.searchElement + " ";
            presentNode = presentNode.next;
        }
        console.log(string);
        return string;
    }
}
function writeFile(fileName, data) {
    let fs = require('fs');
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        }
    });
}
*/
/**
 * 
 */
exports.orderedList = (arr, searchElement) => {
    let list = new linkedList;
    for (let i = 0; i < arr.length; i++) {
        list.add(arr[i]);
    }
    if (list.search(searchElement) == -1) {
        list.add(searchElement);
        console.log("element added successfully");
    }
    else {
        list.remove(searchElement);
        console.log("element deleted successfully");
    }
    let elementWrite = list.show()
    writeFile("../../program.txt", elementWrite);
}
class Node {
    constructor(searchElement) {
        this.searchElement = searchElement;
        this.next = null;
        this.size = 0;
    }
}
class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    sort(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
    search(searchElement) {
        let count = 0;
        let presentNode = this.head;
        while (presentNode != null) {
            if (presentNode.searchElement === searchElement) {
                return count;
            }
            count++;
            presentNode = presentNode.next;
        }
        return -1
    }
    remove(searchElement) {
        let presentNode = this.head;
        let previousNode = null;
        while (presentNode != null) {
            if (presentNode.searchElement === searchElement) {
                if (previous == null) {
                    this.head = presentNode.next;
                }
                else {
                    previousNode.next = presentNode.next;
                }
                this.size++;
                return presentNode.searchElement;
            }
            previousNode = presentNode;
            presentNode = presentNode.next;

        }
        return -1;
    }
    add(searchElement) {
        let node = new Node(searchElement);
        let presentNode;
        if (this.head == null) {
            this.head = node;
        }
        else {
            presentNode = this.head;
            while (presentNode.next) {
                presentNode = presentNode.next;
            }
            presentNode.next = node;
        }
        this.size++;
    }
    show() {
        let presentNode = this.head;
        let string = "";
        while (presentNode) {
            string = string + ' ' + presentNode.searchElement;
            presentNode = presentNode.next;
        }
        console.log(string);
        return string;
    }
}
function writeFile(fileName, data) {
    let fs = require('fs');
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        }
    });
}

/**
 * Program to create Banking Cash Counter where people come in to deposit Cash and withdraw Cash. 
 * @param {number} Taking input from user.
 * @return {number} return output
 */
exports.cashCounter = (choice) => {
    let balance = 5000, withdraw, deposite;
    function get_balance() {
        console.log("your current balance is:", balance);
        atm();
    }
    function make_withdraw() {
        withdraw = readline.questionInt("enter the amount you want to withdraw:");
        balance = balance - withdraw;
        console.log("your current balancee is:", balance);
    }
    function make_deposite() {
        deposite = readline.questionInt("enter the amount you want to deposite:");
        balance = balance + deposite;
        get_balance();
    }
    function exit() {
        let leave = confirm("are you sure you want to leave?:");
        if (leave) {
            window.close();
        }
        else {
            atm();
        }
    }
    function atm() {
        if (choice == 1) {
            get_balance();
        }
        else if (choice == 2) {
            make_deposite();
        }
        else if (choice == 3) {
            make_withdraw();
        }
        else (choice == 4)
        {
            exit();
        }

    }
},
/**
 * Program to push open parenthesis “(“ and pop closed parenthesis “)” in stack.
 * @param Take an Arithmetic Expression
 * @return Arithmetic Expression is balanced or not
 */
exports.balancedParentheses = (string) => {
    let ch;
    let stack = [];
    for (let i = 0; i < string.length; i++)
        ch = string.charAt(i);
    if (ch == '(') {
        stack.push(ch);
    }
    else {
        if (ch == ')') {
            stack.pop;
        }
   
    return stack;
}
},
/**
 * 
 */
exports.palindrome=(str)=>
{
         let deque = new deque();
        for (let i=str.length-1;i>=0;i--) {
            deque.addFirst(str.charAt(i));
        }
        let reverse="";
        for(let i=0;i<str.length;i++) {
            let ch=deque.removeLast();
            reverse+=ch;
        }
        if(str.equals(reverse)) {
            console.log("palindrome");
        }
        else {
            console.log("not palindrome");
        }

    }
    
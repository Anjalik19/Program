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
 * Read a List of Numbers from a file and arrange it in ascending Order.
 * @param {number} taking integers in list
 * @return {number} inset or delete operation
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
 * Program to check a string is palindrome or not.
 * @param {string} Taking input from the user.
 * @return true if it is a palindrome or return false.
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
    /**
     * find the Prime numbers in given range and print them in 2d array.
     * @param {number} taking number from 0-1000.
     * @return {number} return prime number.
     */
    exports.array2D=(n)=>
    {
       function isPrime(n) {
            if (n == 0 || n == 1) {
                return false;
              }
              for (let i = 2; i < n; i++) {
                if (n % i == 0) {
                  return false;
                }
              }
              return true;
            }
            let a=[[]];
            let k = 0;
            for (let i = 0; i < 10; i++) {
                a[i]=[10];
              for (let j = 0; j < 100; j++) {
                  a[i][j]=[10][100];
                if (isPrime(k)) {
                  process.stdout.write(""+ k);
                  k++;
                } else {
                  k++;
                }
              }
              process.stdout.write(" ");
                }
            }
            
    /**
     * takes the month and year and prints the Calendar of the month. 
     * @param {number} values for month and year
     * @return calander
     */
    exports.calander=()=>{
        const readline = require("readline-sync");
        function day(month,day,year){
        let y = year - (14 - month) / 12;
        let x = y + y/4 - y/100 + y/400;
        let m = month + 12 * ((14 - month) / 12) - 2;
        let d = (day + x + (31*m)/12) % 7;
        return d;
        }
        function isLeapYear(year){
          if(year%4==0 && year%100!=0 || year%400==0)
          return true
          else
          return false
        }
        let month=readline.question("Enter the month")
        let year=readline.question("Enter the year")
    
        let months=[" ", "january", "february", "march", "april", "may", "june", "july", "august",
                      "september", "october", "november", "december"]
        let days=[0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
        if(month==2 && isLeapYear(year))
            days[month]=29;
            
            console.log( " " + months[month] + " " + year);
            console.log("S M Tu W Th F S");
            let x=day(month,1,year);
    
            for(let i=0;i<x;i++){
              console.log(" ");
            }
              for(let i=1;i<days[month];i++){
                console.log('%d',i);
                if (((i + x) % 7 == 0) || (i == days[month]))
                console.log(" ")
                
              }
             
          }

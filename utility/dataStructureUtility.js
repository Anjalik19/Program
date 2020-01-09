/**
 * Read the Text from a file, split it into words and arrange it as Linked List. 
 * @param {string} Take a user input to search a Word in the List.
 * @param {string} Taking string array as input.
 * @param {string} Taking input element which you want to search.
 * @return {string} return the result.
 */

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


/**
 * Read a List of Numbers from a file and arrange it in ascending Order.
 * @param {number} taking integers in list
 * @param {number} Taking input form user to search element.
 * @return {number} return result.
 */
exports.orderedList = (arr, searchElement) => {
    let list = new linkedList;
    arr = list.sort(arr);
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
                if (Number(arr[j] > Number(arr[j + 1]))) {
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
                if (previousNode == null) {
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
    const readline = require("readline-sync");
    let balance = 5000, withdraw, deposite;
    atm(choice);
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

    function atm(choice) {
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

            return stack.length;
        }
    },


    /**
     * Program to check a string is palindrome or not.
     * @param {string} Taking input from the user.
     * @return true if it is a palindrome or return false.
     */
    exports.palindrome = (str) => {
        let deque = new deque();
        for (let i = str.length - 1; i >= 0; i--) {
            deque.addFirst(str.charAt(i));
        }
        let reverse = "";
        for (let i = 0; i < str.length; i++) {
            let ch = deque.removeLast();
            reverse += ch;
        }
        if (str.equals(reverse)) {
            console.log("palindrome");
        }
        else {
            console.log("not palindrome");
        }

    },


    /**
     * find the Prime numbers in given range and print them in 2d array.
     * @param {number} taking number from 0-1000.
     * @return {number} return prime number.
     */
    exports.array2D = (n) => {
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
        let a = [[]];
        let k = 0;
        for (let i = 0; i < 10; i++) {
            a[i] = [10];
            for (let j = 0; j < 100; j++) {

                if (isPrime(k)) {
                    console.log("" + k);
                    k++;
                } else {
                    k++;
                }
            }
            console.log(" ");
        }
    },

/**
 * takes the month and year and prints the Calendar of the month. 
 * @param {number} values for month and year
 * @return calander
 */
exports.calander = () => {
    const readline = require("readline-sync");
    function day(month, day, year) {
        let y = year - (14 - month) / 12;
        let x = y + y / 4 - y / 100 + y / 400;
        let m = month + 12 * ((14 - month) / 12) - 2;
        let d = (day + x + (31 * m) / 12) % 7;
        return d;
    }
    function isLeapYear(year) {
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
            return true
        else
            return false
    }
    let month = readline.question("Enter the month")
    let year = readline.question("Enter the year")

    let months = [" ", "january", "february", "march", "april", "may", "june", "july", "august",
        "september", "october", "november", "december"]
    let days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (month == 2 && isLeapYear(year))
        days[month] = 29;

    console.log(" " + months[month] + " " + year);
    console.log("S M Tu W Th F S");
    let x = day(month, 1, year);

    for (let i = 0; i < x; i++) {
        console.log(" ");
    }
    for (let i = 1; i < days[month]; i++) {
        console.log('%d', i);
        if (((i + x) % 7 == 0) || (i == days[month]))
            console.log(" ")

    }
}


/**
      * prime anagramme programme logic.
      * 
      * @param {number}n1-variable to store the n1 value.
      * @param {number}n2-variable to store the n2 value.
      * these values are store it in to the another function.
      * Further store in a 2D Array the numbers that are Anagram and 
      * @return numbers that are not Anagram.
      */
     exports.primeAnagram=()=>{
        let ar = new ArrayList();
        console.log();
        let b,count = 0;
        for (let i = 2; i <= 1000; i++) {
            for (let j = 2; j < i / 2; j++) {
                if (i % j == 0) {
                    b = false;
                    break;
                }
            }
            if (b)
                ar.add(i);
        }
        for (let i = 0; i < ar.size(); i++) {
            for (let j = i + 1; j < ar.size(); j++) {
                if (anagram(ar.get(i), ar.get(j))) {
                    count++;
                }
            }
        }
        let array = new int[count][2];
        let k = 0;
        for (let i = 0; i < ar.size(); i++) {
            for (let j = i + 1; j < ar.size(); j++) {
                if (anagram(ar.get(i), ar.get(j))) {
                    let val1 = ar.get(i);
                    let val2 = ar.get(j);
                    console.log(array[k][0] = val1);
                    console.log(" ");
                    console.log(array[k][1] = val2);
                    console.log();
                    k++;
                }
            }
        }
    }
   function anagram(n1, n2) {
        let n1count = count(n1);
        let n2count = count(n2);
        for (let i = 0; i < n2count.length; i++) {
            if (n1count[i] != n2count[i]) {
                return false;
            }
        }
        return true;
    }
   function count(n){
        let count = new int[10];
        let temp = n;
        while (temp != 0) {
            let r = temp % 10;
            count[r]++;
            temp = temp / 10;
        }
        return count;
    }
    primeAnagrams();

    
    /**
      * prime anagrammestack programme logic.
      * @param {number}n1-variable to store the n1 value.
      * @param {number}n2-variable to store the n2 value.
      * Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in
      *  a Stack using the Linked List.
      *@return Print the Anagrams in the Reverse Order. Note no Collection Library can be used.
      */
    exports.primeAnagrameStack=()=>{
      let  obj = new StackUsingLinkedlist();
        let b, count=0;
        for (let i = 2; i <= 1000; i++) {
            b = true;
            for (let j = 2; j < i / 2; j++) {
                if (i % j == 0) {
                    b = false;
                    break;
                }
            }
            if (b)
                count++;
        }
        let a=new int[count];
        let k=0;
        for (let i = 2; i <= 1000; i++) {
            b = true;
            for (let j = 2; j < i / 2; j++) {
                if (i % j == 0) {
                    b = false;
                    break;
                }
            }
            if (b)
            {
                if(k<count)
                {
                    a[k]=i;
                    k++;
                }
            }
                
        }
        for(let l=0;l<a.length;l++)
        {
            for(let m=l+1;m<a.length;m++)
            {
                if(anagram(a[l],a[m]))
                {
                    obj.push(a[l]);
                    obj.push(a[m]);
                }
            }
        }
        obj.display();
        }
     function anagram(n1, n2) {
        let n1count = count(n1);
        let n2count = count(n2);
        for (let i = 0; i < n2count.length; i++) {
            if (n1count[i] != n2count[i]) {
                return false;
            }
        }
        return true;
    }
     function count(n) {
        let count = new int[10];
        let temp = n;
        while (temp != 0) {
            let r = temp % 10;
            count[r]++;
            temp = temp / 10;
        }
        return count;
    }
    /**
      * prime anagrammeQueue programme logic.
      * @param {number}n1-variable to store the n1 value.
      * @param {number}n2-variable to store the n2 value.
      *  @return Print the Anagrams in the Reverse Order.
      */
    exports.primeAnagramQueue =()=>{
       
            let obj = new QueueUsingLinkedList();
            let b,count = 0;
            for (let i = 2; i <= 1000; i++) {
                b = true;
                for (let j = 2; j < i / 2; j++) {
                    if (i % j == 0) {
                        b = false;
                        break;
                    }
                }
                if (b)
                    count++;
            }
            let a = new int[count];
            let k = 0;
            for (let i = 2; i <= 1000; i++) {
                b = true;
                for (let  j = 2; j < i / 2; j++) {
                    if (i % j == 0) {
                        b = false;
                        break;
                    }
                }
                if (b) {
                    if (k < count) {
                        a[k] = i;
                        k++;
                    }
                }
    
            }
            for (let l = 0; l < a.length; l++) {
                for (let m = l + 1; m < a.length; m++) {
                    if (anagram(a[l], a[m])) {
                        obj.enqueue(a[l]);
                        obj.enqueue(a[m]);
                    }
                }
            }
            for (let r = 0; r < obj.currentsize(); r++) {
                consolele.log("%d->", obj.dequeue());
                console.log(obj.dequeue());
                console.log();
            }
        }
        function anagram(n1, n2) {
            let n1count = count(n1);
            let n2count = count(n2);
            for (let i = 0; i < n2count.length; i++) {
                if (n1count[i] != n2count[i]) {
                    return false;
                }
            }
            return true;
        }
        function count(n) {
            let count = new int[10];
            let temp = n;
            while (temp != 0) {
                let r = temp % 10;
                count[r]++;
                temp = temp / 10;
            }
            return count;
        }

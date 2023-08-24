# JavaScript and ReactJS
```
Banuprakash C

Full Stack Architect,

Co-founder & CTO Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: banu@lucidatechnologies.com

banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/REACT
```

Softwares Required:

```
Visual Studio Code. [ https://code.visualstudio.com/ ]
Chrome Web Browser
NodeJS Latest LTS Version: 18.17.0 [ https://nodejs.org/en/download ]
```

JavaScript, NodeJS & Webpack --> 2 days
React --> 4 days

JavaScript: Scripting language, loosely typed, dynamically typed, event driven programming language

file.js ==> JavaScript engine 

JavaScript engines
1) V8 --> Google --> Chrome and NodeJS
2) SpiderMonkey --> FireFox
3) Chakra / Continnum --> Microsoft --> IE and Edge
4) JavaScriptVM --> opera
5) Nashorn --> Oracle 

Data types in JS: string [ " or '], number, boolean, object, array, undefined, null, function

JavaScript "var" is a keyword to declare a variable

var name = "Roger"; // string

var age = 24; // number
age++; // valid
age = "Twenty Five"; // string
age.toUpperCase();

var ref = function() {
    console.log("Do Task!!!");
}

var elem; // undefined

-----------------

Execution Context in JS:

file.js

```
var g = 100;

function doTask() {
    var a = 25;
    if(g > a) {
        var b = 30;
        c = 40;
    }
    console.log(g, a, b, c);
}

doTask();
console.log(g, a, b, c);
```

"use strict"; in javascript file prevents 
1) passing "this" to function
2) using variable without declaration [ Global hoisting is prevented]

=========

JS Stack, WebApi, Callback Queue and Event loop

```
<button id="btn"> Ok </button>

console.log("Hello");

function doTask() {
    console.log("Task");
}

setInterval(function timed() {
    console.log("timed");
}, 100);

document.getElementById("btn")
    .addEventListener("click", function clicked() {
    console.log('clicked");
});

console.log("Bye");
```
How functions behave in JS:

1) 
function add(x, y) {
    return x + y;
}

var res = add(4, 5); // value of res? ==> 9

2) 
function add(x, y) {
    console.log(x + y);
}

var res = add(4, 5); // value of res? ==> undefined

3) 
function add(x, y) {
    return
        x + y; // un-reachable code
}

var res = add(4, 5); // value of res? ==> undefined

Issue --> AST in JS [ ; is optional in JS] --> return is a valid token by itself ==> [return;]

var x = 10;
var y = 15;
var res = x + y;

=================

OOP in JS

Object contains state and behaviour

Different ways to create Object in JS.
1) 
var obj = new Object();
obj.x = 10;
obj.y = 15;

2) Function Constructor

```
function Product(name, price) {
    this.name = name; // instance variable ==> state
    this.price = price; // instance variable ==> state
}

// adding behaviour / actions / methods
// instance methods
Product.prototype.setName = function(name) {
    this.name = name;
}
Product.prototype.getName = function() {
    return this.name;
}
Product.prototype.setPrice = function(p) {
    this.price = p;
}
Product.prototype.getPrice = function() {
    return this.price;
}
var p1 = new Product("iPhone", 89000.00);
var p2 = new Product("Samsung Flip", 170000.00);
p1.getPrice();
p2.setName("Samsung Fold");

// static method --> class method
Product.equals = function(p1, p2) {
    return (p1.name === p2.name ) && (p1.price === p2.price)
}

if(Product.equals(p1,p2)) {

}
```

Product("Onida", 5113.10); // calling like function ==> window's name and price is set :-(

==========

3) JSON ==> JavaScript Object notation ==> Singleton Object ==> Prefer this as carrier of data [ data object]

var product = {"name": "LG AC", "price": 45000.00};

product.name;
product.price;

---
// create product object with state and behaviour
var product = {
    "name": "LG AC", 
    "price": 45000.00,
    "getName": function () {
        return this.name
    },
    "setName": function(n) {
        this.name = n;
    }
}

console.log(product.name);
product.setName("LG Inverter AC");
console.log(product.getName());

var ref = product.getName; //reference to function --> context is not copied to "ref"

as good as:
```
var ref = function () {
        return this.name
}
```
ref(); // invoke the function getName() ==> ??? ==> "name" of window

Solution:

var ref2 = product.getName.bind(product); // function def should have "product" context
ref2(); // "name" of product

====================

var data = [5,2,1];
data.push(44); // right way to add

data[3] = 44; // avoid, bad

data[100] = 44; // works, but it creates 96 empty elements in data

------------

* Functional Programming using JS

High Order Functions (HOF): 
1) function accepting function as argument
2) function return a function

Treat function as first-class member like primitive/object

HOF: function accepting function as argument.
Advantage --> OCP --> Open Close Principle --> Closed for change, open for extension
commonly used HOF:
1) filter
2) map
3) forEach
4) flatMap
5) reduce


"map" --> transform the data
Check hof1.html

"forEach" --> iteration

"filter" --> to get subset of elements

function filter(elems, predicateFn) {
    // code..
}


function isMobile(e) {
    return e.category === 'mobile'
}

var data = [4,2,8,10];

function isEven(e) {
    return e % 2 === 0;
}

------------

note: map, filter, forEach --> are built-in and available in "arrays"


var data = [4,2,8,10];

var elems = data.filter(function(e) { return e % 2 === 0});


2) HOF: function return a function

Closure: a mechanism where the returned inner function can access all the members of outer function.

function adder(base) {
    return function(no) {
        return base + no;
    }
}

var fiveAdder = adder(5);

fiveAdder(4);


var tenAdder = adder(10);
memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls to pure functions and returning the cached result when the same inputs occur again.


// pure Function
function add(x,y) {
    return x + y;
}

// not a pure function --> each time when called gives different result
function doTask() {
    return new Date();
}




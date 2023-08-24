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


EventLoop

while(true) {
    if(stack is empty) {
        Method m = callbackqueue.pop();
        push "m" to stack
        wait..
    }
}











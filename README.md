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

``````

ECMA version for JS.

ECMAScript 2015 --> JS 6 version features
Most of the engines support ES 5 / JS 5.
https://caniuse.com/

"ECMAScript 2015 / JS 6" --> Transpiler / TransCompiler / Pre-processor --> ES 5 code

Transpiler: Babel / Tracuer

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines.

JS 6 / ECMAScript 2015 features:
1) Arrow function

Old Code:
var data = [4, 3, 2, 5, 8,10, 15];
var elems = data.filter(function(e) { return e % 2 === 0});

With JS 6:
var data = [4, 3, 2, 5, 8,10, 15];
var elems = data.filter(e => e % 2 === 0);

2) Block level scope using "let" and "const"

```
var g = 100;
const PI = 3.14159; // constant
function doTask() {
    var a = 25;
    if(g > a) {
        let b = 30; // block scope --> not hoisted
        c = 40;
    }
    console.log(g, a, b, c); // can't use "b"
}

doTask();
console.log(g, a, b, c);
```

3) Template String literal

Old way:
"<div class='card><div class="cardHeader">" + e.name + "</div>"

With new String literal:
```
`
                <div class="card">
                <div class="cardHeader">
                    ${e.name}
                </div>
                <div class="cardBody">
                    ${e.price}, ${e.category}
                 </div>
                </div>
            `
```

4) Destructuring
4.1) object

var product = { "id": 1, "name": "Sony Bravia", "price": 218000.00, "category": "tv" };

Old way:
get name and price as local variable
var name = product.name;
var price = product.price; 

ES 6 way:
let {name, price } = product;
console.log(name, price);

4.2) arrays

var colors = ["red", "green", "blue", "orange", "pink"];

var [ r,g, ...others] = colors

console.log(r); // red
console.log(g); // green
console.log(others);  [ "blue", "orange", "pink"]

5) Clone

var data = [5,12,9];

var ref = data; // pointer

ref[0] = 99;

console.log(data[0]); // 99

To Clone array:

var copy = [...data]; 
copy[1] = 44;
console.log(copy); // [99, 44, 9]
console.log(data); // [99, 12, 9]

To clone object:

var product = { "id": 1, "name": "Sony Bravia", "price": 218000.00, "category": "tv" };

var cpy = {...product};

cpy.price = 100;

console.log(product.price); // 218000.00
console.log(cpt.price); // 100

var product = { "id": 1, "name": "Sony Bravia", "price": 218000.00, "category": "tv", supplier: {
    "name" : "ABC",
    "phone": "3343455"
} };

========

6) Promise API for side-effects --> async operations
Non-blocking operations

http://localhost:8080/api/flights

https://fakestoreapi.com/products

7) Async and Await --> ESNext / JS 7

Promise callback-hell

getConnection().then(con => {
    getProjects(con).then(projects => {
        getEmployees(projects).then(emps => {
            getPhone(emps).then(phones => {
                ... send SMS
            })
        })
    })
})

"fetch" is a Promise API

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => console.log(products))


8) class
9) ES 6 modules

=====================

DOM --> Document Object model --> Language independent [ Java / JS / VB ]
XML / HTML in the form of tree of objects --> DOM

Using DOM we can:
1) create elements
2) delete elements
3) access elements

HTML ==> DHTML

Access DOM elements:
1) getElementById()
2) getElementsByTagName()
3) querySelector() --> by id, class , by tag
4) querySelectorAll()

Get by class name
document.querySelector(".tmpl-headerNavItem_home")
document.querySelector(".tmpl-headerNavItem_home").innerHTML

document.querySelector(".tmpl-headerNavItem_home").innerHTML = "Banu"

document.getElementsByTagName("a")

document.getElementById("tmpl-header")
<header id=​"tmpl-header" class=​"tmpl-header" style=​"visibility:​ visible;​">​</header>​
document.getElementById("tmpl-header").innerHTML = ""

=====

DOM Event Handling

```
new Event(type, options)

type
A string with the name of the event.

options Optional
An object with the following properties:

bubbles Optional
A boolean value indicating whether the event bubbles. The default is false.

cancelable Optional
A boolean value indicating whether the event can be cancelled. The default is false.

composed Optional
A boolean value indicating whether the event will trigger listeners outside of a shadow root (see Event.composed for more details). The default is false.

```

Day 2

* JavaScript engine
* Stack, Heap, WebApi [ setTimeout, Promise, eventHandler] provides Threads for execution for async operations, Callback Queue [ place where callback functions are pushed by the WebApi].
Event Loop is a thread --> if stack is empty, take function from callback queue and push it to stack for execution.

* Global Creation Context, Execution Context, Function Creation Context, execution Context

* HOISTING [ function and Global hoisting]

if "use strict" is used Global hoisting is not done.

OOP, Functional style of Programming [ HOF], Closure

ES 2015 / JS 6 version features

* DOM 

-----------------------

NodeJS
* Platform with V8 JavaScript engine and Libuv library [ similar to work done by WebApi ]

libuv is a multi-platform C library that provides support for asynchronous I/O based on event loops.

Why use nodejs?
* Build APIs [ like RESTful WS done using Spring Boot], GraphQL, ..
* Build Traditional Web applications [ like Servlet --> SSR / PHP / ASP.NET]
* Realtime applications [ like ChatBot]
* Streaming platform [ Netflix]
* Building client side web applications like [React / Angular / Backbone]
* Building Native applications [ ReactNative / Ionic / ...]

Why NodeJS for Building client side web applications?
1) need a platform to transcompile / transpile
    we might write code in ES2015+ / TypeScript / Dart [used for flutter] / CoffeeScript / LiveScript
    But JS engine runs on JS 5 version.

    ES2015+ --> babel --> JS5 version
    TypesCript -> tsc file.ts --> JS5 version [file.js]
    file.coffee --> csc file.coffee --> file.js

2) Minify and Uglify the code
    Minify --> remove un-wanted whitespaces in code

    function doTask() {
            var a = 10;
            var b = 15;
    }
    --
    function doTask(){var a=10;var b=15;}

 Uglify --> reduce length of variables and functions
    function getProducts() {
        let productsJson = ..
    }

    function _p() { let _o = }

3) Bundling
    Without bundling
    index.html
    <script src="common.js"></script>
    <script src="productModule.js"></script>
    <script src="customerModule.js"></script>
    <script src="orderModule.js"></script>
    <script src="paymentModule.js"></script>

    6 Network calls [ 1 for index.html and each call to download scripts]

    With bundling
    index.html
    <script src="bundle.js"></script>

4) Testing --> Unit Testing and E2E testing
5) Static code analysis


$ node --version

======================
https://addyosmani.com/learning-jsdp/

Module system 
1) IIFE --> Immediate Invoke Function Expression

    var shopModule = (function () {
        var data = []; // private to shopModule
        function addToCart(p) {
            data.push(p);
        }
        function computeTotal() {

        }
        function getCart() {

        }
        return {
            addToCart,
            getCart
        }
    })();

shopModule.addToCart(..);
shopModule.getCart();
shopModule.data; // error --> private
shopModule.computeTotal(); // error --> private

var productModule =(function () {
        var data = []; // private to productModule
        function getProducts() {}
        return {
           getProducts
        }
})();

2) CommonJS Module System --> default used by NodeJS

lib.js
```
var data = []; // private to lib.js
function map(elems, transformFn) {
    var result = [];
    for (var i = 0; i < elems.length; i++) {
        result.push(transformFn(elems[i]));
    }
    return result;
}

// HOF
function forEach(elems, action) {
    for (var i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}
module.exports = {
    map,
    forEach
}
```
other.js
let {map, forEach} = require('./lib');

3) ESM --> ES2015+ module system --> ES6 Module system

```
lib.js
export function map(elems, transformFn) {
    var result = [];
    for (var i = 0; i < elems.length; i++) {
        result.push(transformFn(elems[i]));
    }
    return result;
}

// HOF
export function forEach(elems, action) {
    for (var i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}
```
other.js
import {map, forEach} from './lib';

===

4) AMD
5) System
6) UMD

=======

Node Package Managers:
* manage dependencies [ 3rd party libraries like react/ react-dom]
* publish library
* run scripts [ build, test, start]

NPM, YARN, PNPM --> some of the node package managers

npm i yarn -g

cache = "/Users/banuprakash/.npm" 

NPM --> default package manager installed along with NodeJS


npm config list -l
registry = "https://registry.npmjs.org/" 

https://www.npmjs.com/

To install a library/module into the project:
npm i react

Central repository "https://registry.npmjs.org/" from where node modules are downloaded

to change

npm config set registry="http://proxy.adobe.com"

Executable Node modules can be installed globally

Java --> Maven

NodeJS project
Step 1) Initialize a Node Project
nodeexample> npm init --y

creates package.json --> one per node project
file where scripts are configured, dependencies and development dependencies are configured

Java --> pom.xml

npm i lodash

"node_modules" folder is one per project where dependencies are downloaded and linked to project

package.json
"dependencies": {
    "lodash": "^4.17.21",
    "react": "^18.0.1",
    "react-dom": "^18.1.0"
  }

Project --> Git --> code minus "node_modules" 

Team members will download the project and execute:
nodeexample> npm i

sees package.json and installs dependencies and devDependencies

"lodash": "4.17.21", --> Exact version is require
"lodash": "~4.17.21", --> Major version has to be "4", minor and patch can be latest
"lodash": "^4.17.21", --> any latest version from repo, min version "4.17.21"

Development dependecies are onces which are required only development stage and not in production: like transpiler [ tsc/ babel /csc], testing, Static Code analysis
--> not part of final bundle --> production

 "scripts": {
    "start": "node ./src/index.js",
 }
npm start

npm also takes care of transitive dependency

"mylib": "2.4.1"
 mylib might in turn depend on "a: "1.31.1" --> "b": " 9.4.1" ...
==================

JS build tools
1) Grunt
2) Gulp
3) Webpack

build tools  are JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting [static code analysis]. 

webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, ..

Webpack --> default bundler which is used by many libraries/ frameworks like "Angular", "React", ...

---------

Using Webpack
1) intialize node project
webpack_example> npm init --y

2) download depenencies

webpack_example>  npm i webpack webpack-cli webpack-dev-server html-webpack-plugin -D

3)
"scripts": {
   "dev": "webpack --mode development",
   "prod": "webpack --mode production"
  }
any other script name other than "start" and "test" we should use
npm run <<scriptname>>
npm run dev
or
npm run prod


custom configure webpack

4) Adding babel for transpiler

npm i @babel/core babel-loader @babel/preset-env -D

* babel-loader ==> loads "js" files which are imported into memory
example:
import {map} from './lib'
loaded 'lib.js' is sent to @babel/core --> transpiler to convert to lower version of JS

* @babel/preset-env

@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).

A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively ...

JS engine --> JS 5 engine

I write code in ES2015+
Promise API is a ES2015+ feature not available in JS 5 engine.

Polyfill will use alternate code which can simulate the Promise behaviour
https://www.npmjs.com/package/core-js

npm run prod
npm start

5) html-webpack-plugin and webpack-dev-server
The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. 
<script src="dist/bundle.js"></script>
5.1) This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.
bundle.a14e1218.js
bundle.e7f7267d.js

When we are running application in "development mode" if we have a file name which is constant
"bundle.js" --> cache by browser any changes done . browser won't reflect changes

hashing forces the new file to be loaded
<script src="dist/bundle.a14e1218.js"></script>


5.2) when many bundle files are there

<script src="dist/common.js"></script>
<script src="dist/vendor.js"></script> <!-- React and Redux library -->
<script src="dist/bundle.js"></script>

======

webpack-dev-server --> Development Server --> simple Http-server to serve resources

In Production we use : Apache, Nginx, Tomcat, jetty, IIS

=========

css-loader and style-loader
npm i css-loader style-loader -D

* css-loader 
allows us to import "css" files in "js"

* style-loader will place the loaded css into index.html
<style>

</style>

```

==========

Rendering: data to presentation

Server Side Rendering [ tightly coupled client-server architecture]
Client Side Rendering [decouple client-server ; we can have mobile / web /standalone client]

CSR became popular with SPA ==> Single Page Application
single "index.html" to display different views

1) DOM: APis for create/ access and delete, ...
2) jQuery: simplfied DOM
$("<div>") ==> document.createElement("div")
$("div") ==> document.getElementsByTagName("div")

3) Templates [ static + dynamic content] using interpolation
 Mustache, HandleBar, UnderScore, jqueryTemplate, Knockout, EJS, JADE, PUG,..

 Mustache example: interpolation {{}}
 JSON data from Server:
 ```
 {
  "header": "Colors",
  "items": [
      {"name": "red", "first": true, "url": "#Red"},
      {"name": "green", "link": true, "url": "#Green"},
      {"name": "blue", "link": true, "url": "#Blue"}
  ],
  "empty": false
}
 ```
 Templates:
 ```
 <h1>{{header}}</h1>
{{#items}}
  {{#first}}
    <li><strong>{{name}}</strong></li>
  {{/first}}
  {{#link}}
    <li><a href="{{url}}">{{name}}</a></li>
  {{/link}}
{{/items}}

{{#empty}}
  <p>The list is empty.</p>
{{/empty}}

 ```

4) Frameworks and Libraries

MVC Architecture --> 1970's
Model View Architecture

4.1) Backbone library ==> gave support to Model and controller; for view we need to choose any of above mentioned templates

4.2) AngularJS ==> Google ==> Framework ==> total solution
    issues: digest and apply
4.3) Facebook ==> 
    XHP, Bolt, React
    OpenSource ==> Khan Academy ==> 
    Netflix 

    React ==> View Library    
    Model --> Redux / Mobx / Observable ...
    https://www.youtube.com/watch?v=8pDqJVdNa44&t=3769s

4.4) Angular Framework

-----

React View Library

```
resolve: {
            extensions: [".js", ".jsx"]
        }
import filter from './lib';
look for lib.js; if not found look for lib.jsx

```

React.createElement("h1") wrapper for 
document.createElement("h1")

React node are not real DOM, but a representation of a potential DOM node.

representation of a potential DOM node can be considered as Virtual DOM

React node can be a ReactElement, ReactFragment, Array of ReactElement, nullm String, boolean


Renderers: 
https://github.com/chentsulin/awesome-react-renderer
web: react-dom
Desktop: proton-native
mobile: react-native
tv: react-tv

Functional component or class component to simplify creating react elements:


===

Upto React 17:
import ReactDOM from 'react-dom';
ReactDOM.render(<Product name="iPhone 14" price="89000.00" />, document.getElementById("root"));
Sequential Rendering

React 18+:
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<Product name="iPhone 14" price="89000.00" />);
Concurrency in rendering

Stack vs Fiber Architecture
https://claudiopro.github.io/react-fiber-vs-stack-demo/

Warning: Each child in a list should have a unique "key" prop.

-----

Day 2 Recap:

webpack: build tool
* css-loader and style-loader 
we can import css files in js [ css-loader]
loaded css is placed inside <style></stlye> by style-loader

* babel-loader
using ESM modules [import and export] of "js"
babel-core -> transcompiler [ babel.preset-env and babel.preset-react]
babel.config.json
* Html-webpack-plugin
place the bundles in template [ index.html]
* webpack-dev-server

---
React is a View library; is component based
components are created using:
* React.createElement
* functional component
* class component

React.createElement() ===> JS object representation of react.element
functional component returns JSX; returned JSX is react.element

props:
* attributes passed to a component
* children 

Example:
<h1 color="red" size="12pt">
    Welcome to React
</h1>

color, size are props
"Welcome to React" is props.children

-----

Render
Convert "js" object returned from createElement(), functional component or class component into Virtual DOM [ DOM without UI]
In memory:
<div>
    Name: iPhone
    Price: 89000.00
</div>

commit() converts VDOM into DOM [ Visual UI]

react-dom, react-native, react-tv, proton-native, ....

Upto React 17:
import ReactDOM from 'react-dom'
ReactDOM.render();

React 18+:

import {createRoot} from 'react-dom/client'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ProductList products={products}/>);

React 18 provides concurrency support.

=================

{} <-- interpolation

====

Reconcillation:
The reconciliation process makes React work faster. Reconciliation is the process through which React updates the Browser DOM

diffs alogorithm between VDOM and VDOM copy

const diffs = [
    {
        newnode: { /* new version of item */},
        oldnode: { /* original version of item * /},
        index : /* index of element in parent's list of child nodes */
    },
    {
        newnode: { /* new list item */},
        index: /* position in parent's list of nodes */
    }
]

----

Day 3:

Create React App: Set up a modern web app by running one command.
npx create-react-app customerapp

https://react.dev/learn/thinking-in-react

Class Component:
* can have state and behaviour
* can have life-cycle methods
* render() --> compulsory

Component Life Cycle methods:
1) Mounting Phase: first time when Component is created and rendered / Commit()

constructor() ==> render() ==> componentDidMount()

componentDidMount() ==> place where API calls are done
componentDidMount() {
    fetch("....")
}

Why not make API calls in constructor()?
Issue: Until API call is completed, component will not be rendered, leads to FCP core-web-vitals issue

Do the default initialization in constructor, render UI with default values,
make api call in componentDidMount(), once results are fetched from API call
re-render.

2. Updating Phase:
Whenever state  or props change --> component re-renders --> render() --> componentDidUpdate()

In componentDidMount() make API calls, set state, state changes --> render() ->componentDidUpdate()

Scenario 2:
parent passes new data to child as props, new props render() and make API call based on new props

componentWillUnmount() ==> any changes done in component, before destroying --> flush the state to backed

Display an Modal dialog-box [ Thank you, Do you want to really close?, ..]

In class Component update the state using setState() --> will trigger reconcillation
```
// Asynchronous methods to update state and trigger reconcillation
this.setState({
            customers: custs
})
```

Don't use:
this.state.customers = custs; // AVOID this
this.forceUpdate();

```
export class Sample extends Component {
    state = {
        x: 12,
        y: 44
    }

    method() {
        this.setState( {
            x: 62
        })
    }
}
```

===============

Testing
* Unit Testing
* E2E Testing [ End to End]

Unit Testing
CustomerCard.jsx < ---- Testing
Filter.jsx < --- testing
lib.js <-- Testing

E2E [UI Component --> Services --> Spring Boot --> RestController --> Database -->..]

*Unit Testing Frameworks:
1) Jasmine [ Angular uses this]
2) Mocha
3) JEST [React using create-react-app by default is configured to use Jest]

RTL --> react testing library is built on top of Jest for testing components

npm test
 "test": "react-scripts test",

 ==========
findByPlaceholderText
findByText
findByAltText
findByRole
findByTestId


screen.getByPlaceHolderText("search by name");

npm test -- --coverage --watchAll

=======

App.test.js ==> Integration Testing and not Unit testing

=========================================

E2E Testing  before UAT
UI --> Backend
Application should be running

E2E testing libraries:
cypress  
nightwatch
playwright
protractor
puppeteer
webdriverio

npm i cypress -D

package.json
"e2e": "cypress open"

$ npm start
$ npm run e2e

======================

Component Life-cycle method:
shouldComponentUpdate();

PureComponent contains default method for shouldComponentUpdate()
export default class NameChild extends PureComponent {
}

=========

99% will be functional components

Task:
https://react.dev/learn/thinking-in-react 


======================

Recap:
* state and props
* Whenever state changes components re-renders [Reconcillation]
* VDOM, VDOM Copy [ changes are done to this], Run Diffs algorithm --> commit() --> Physical DOM, delete VDOM, make VDOM copy as original VDOM
* class component: state and behaviour, component life cycle methods
Mounting Phase: constructor() --> render() --> componentDidMount()
Any API calls should be done in componentDidMount()

Updating Phase: happens when state changes or new props are injected into component
shouldComponentUpdate() --> true --> render() --> componentDidUpdate()
Any API calls based on new state or new props do it in --> componentDidUpdate()

Unmounting: when component is destroyed
* componentWillUnmount()
write any flushing of state to Backend
Display any Dialog box on close of component

onChange(), onClick()

-----
Unit Testing: --> RTL built on top of JEST unit testing framework
screen, render, fireEvent
Assertion: expect(this).toBe(that)

E2E Testing: Cypress
cy --> global object [ visit, get, click(), type(), ...]

=========

Day 4

React Context: Context provides a way to pass data through the component tree without having to pass props down manually at every level.

React Hooks:
Hooks are a new addition in React 16.8. 
They let you use state and other React features without writing a class.
Get class component capabilities to functional component.

* class components are heavy because it inherts from Component
* class components can have state and life-cycle methods

React Hooks helps to have state, behaviour and lifecycle methods in functional component
Go forward --> 99% will be functional component

React Hooks:
1) useState
2) useReducer
3) useEffect
4) useContext
5) useCallback -> won't cover this

Hooks start with "use"

npx create-react-app hooksdemo

* useState is a hook to introduce state variables in React functional component

```

export default function StateDemo() {
    let [name, setName] = useState("Raj");
    let [age, setAge] = useState(18);

    return <div>
        Name: {name} <br />
        Age : {age} <br />
        <button type="button" onClick={() => setAge(age + 1)}>Change Age</button>
        <button type="button" onClick={() => setName(name + "..")}>Change Name</button>
    </div>
}

Same as:

export default class StateDemo extends Component {
    state = {
        name : "Raj",
        age : 18
    }

    setName(arg) {
        this.setState({
            name: arg
        })
    }

    setAge(arg) {
        this.setState({
            age: arg
        })
    }

    render() {
        return <div>
            Name : { this.state.name} <br />
            Age : {this.state.age} <br />
            <button type="button" onClick={() => this.setAge(this.state.age + 1)}>
                Change Age
            <button>
        </div>
    }
}
```
Whenever new props comes to functional component, it re-render.

shouldComponentUpdate() in Class component can be used to avoid re-render

Solution for Functional Component:
Memoization pattern

React has memo() method built-in for memoization
2) useReducer







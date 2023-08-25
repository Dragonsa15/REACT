// const { map, forEach } = require('./lib');
import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // React 18+
import Product from './components/Product';
import map, { forEach, filter } from './lib'; // babel-loader
import Person from './Person'; // babel-loader

import './styles.css' // css-loader
import ProductList from './components/ProductList';

console.log("Welcome to Webpack!!!");

var products = [
    { "id": 1, "name": "Sony Bravia", "price": 218000.00, "category": "tv" },
    { "id": 2, "name": "iPhone 14", "price": 97000.00, "category": "mobile" },
    { "id": 3, "name": "Wacom", "price": 5000.00, "category": "computer" },
    { "id": 4, "name": "OnePlus nord", "price": 89000.00, "category": "mobile" },
    { "id": 5, "name": "Macbook pro", "price": 260000.00, "category": "computer" }
]

// REACT code

let Welcome = React.createElement("h1", { style: { 'color': 'red' } }, "Welcome to React!!!");
console.log(Welcome);

// console.log(Product("iPhone", 89000.00));
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ProductList products={products}/>);

//root.render(<Product name="iPhone 14" price="89000.00" />);
//ReactDOM.render(<Product name="iPhone 14" price="89000.00" />, document.getElementById("root"));

// REACT code END
let p1 = new Person("Gavin", 42);
console.log(p1.getName(), p1.getAge());


filter(products, () => { });

function toCard(e) {
    return `
        <div class="card">
        <div class="cardHeader">
            ${e.name}
        </div>
        <div class="cardBody">
            ${e.price}, ${e.category}
         </div>
        </div>
    `
}

var cards = map(products, toCard);
forEach(cards, console.log);

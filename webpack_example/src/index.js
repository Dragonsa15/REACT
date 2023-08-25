// const { map, forEach } = require('./lib');
import map, { forEach, filter } from './lib'; // babel-loader
import Person from './Person'; // babel-loader

import './styles.css' // css-loader


console.log("Welcome to Webpack!!!");

let p1 = new Person("Gavin", 42);
console.log(p1.getName(), p1.getAge());

var products = [
    { "id": 1, "name": "Sony Bravia", "price": 218000.00, "category": "tv" },
    { "id": 2, "name": "iPhone 14", "price": 97000.00, "category": "mobile" },
    { "id": 3, "name": "Wacom", "price": 5000.00, "category": "computer" },
    { "id": 4, "name": "OnePlus nord", "price": 89000.00, "category": "mobile" },
    { "id": 5, "name": "Macbook pro", "price": 260000.00, "category": "computer" }
]

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

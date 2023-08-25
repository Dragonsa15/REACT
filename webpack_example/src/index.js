const { map, forEach } = require('./lib');
console.log("Welcome to Webpack!!!");

var products = [
    { "id": 1, "name": "Sony Bravia", "price": 218000.00, "category": "tv" },
    { "id": 2, "name": "iPhone 14", "price": 97000.00, "category": "mobile" },
    { "id": 3, "name": "Wacom", "price": 5000.00, "category": "computer" },
    { "id": 4, "name": "OnePlus nord", "price": 89000.00, "category": "mobile" },
    { "id": 5, "name": "Macbook pro", "price": 260000.00, "category": "computer" }
]


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

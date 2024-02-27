let orderItems = [
    {
        item: "Pizza Magharita",
        price: 8.99,
    },
    {
        item: "Pizza Hot",
        price: 13.99,
    },
    {
        item: "Pizza Brötchen",
        price: 5.99,
    },
    {
        item: "Pizza Gyros",
        price: 12.99,
    },
    {
        item: "Pizza Meatlover",
        price: 15.99,
    },
    {
        item: "Pizza Hollondaise",
        price: 11.99,
    },
    {
        item: "Pizza des Monats",
        price: 9.99,
    },
    {
        item: "Chefsalat",
        price: 5.99,
    },
    {
        item: "Pizzabox",
        price: 11.99,
    },
    {
        item: "Wasser",
        price: 2.49,
    },
    {
        item: "Softdrinks",
        price: 2.99,
    },
    {
        item: "Wein",
        price: 7.99,
    },
];

let cart = [];
let amount = amount.map();
let subtotal = 0;
let deliveryCost = 2.50;

start();

function start(){
    generateCartChoice();
}



function addToCart(i) {
    document.getElementById("orderStatus").classList.remove("d-none");

    const itemChoice = orderItems[i];
        if (amount.has(itemChoice.item)) {
            amount.set(itemChoice.item ++);
        }
            else {
                amount.set(itemChoice, 1);    
        }
        generateCartChoice();
}

function generateCartChoice() {
    const cartItem = document.getElementById("orderStatus");
    cartItem = "";

    let i = 0;
    for (const item of cartItem) {
        document.getElementById();
        document.getElementById();


    }
}

function generateCartChoiceHTML() {
    return`
    <div id="cartList" class="cartList" >
                                    <div id="cartSummarySub" class="cartSummarySub">
                                        <span>Zwischensumme</span><span>Betrag in Euro</span>
                                    </div>
                                    <div id="cartSummaryTotal" class="cartSummaryTotal">
                                        <span>Gesamt</span><span>SUmme Betrag in Euro</span>
                                    </div>
                                    <div id="checkout" class="checkout">
                                        <button>BESTELLEN</button>
                                    </div>
                                </div>
                                `
}

//function calculate()

//function addItem()

//function removeItem()

//function removeItemCart()

//function loadStorrage()

//function saveStorrage()

//function order()

window.onscrollY = function() {
    let sticky = document.getElementById('sticky');
    if(window.scrollY > 0) {
        sticky.style = 'top: 0';
    }
        else {
            sticky.style = 'top: 100px';
        }
};
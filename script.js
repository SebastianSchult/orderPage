let items = [
    {
        food: "Pizza Magharita",
        incredidents: "mit Tomatensauce und herzhaften Gouda",
        price: 8.99,
        image: 'img/pizzaMagarita.jpg',
        size: "26 cm",
    },
    {
        food: "Pizza Hot",
        incredidents: "mit Tomatensauce und herzhaften Gouda",
        price: 13.99,
        image: 'img/pizzaMagarita.jpg',
        size: "26 cm",
    },
    {
        food: "Pizza Brötchen",
        incredidents: "mit Tomatensauce und herzhaften Gouda",
        price: 5.99,
        image: 'img/pizzaMagarita.jpg',
        size: "26 cm",
    },
    {
        food: "Pizza Gyros",
        incredidents: "mit Tomatensauce und herzhaften Gouda",
        price: 12.99,
        image: 'img/pizzaMagarita.jpg',
        size: "26 cm",
    },
    {
        food: "Pizza Meatlover",
        incredidents: "mit Tomatensauce und herzhaften Gouda",
        price: 15.99,
        image: 'img/pizzaMagarita.jpg',
        size: "26 cm",
    },
    {
        food: "Pizza Hollondaise",
        incredidents: "mit Tomatensauce und herzhaften Gouda",
        price: 11.99,
        image: 'img/pizzaMagarita.jpg',
        size: "26 cm",
    },
    {
        food: "Pizza des Monats",
        incredidents: "mit Tomatensauce und herzhaften Gouda",
        price: 9.99,
        image: 'img/pizzaMagarita.jpg',
        size: "26 cm",
    },
    {
        food: "Chefsalat",
        incredidents: "mit Tomatensauce und herzhaften Gouda",
        price: 5.99,
        image: 'img/pizzaMagarita.jpg',
        size: "26 cm",
    },
    {
        food: "Pizzabox",
        incredidents: "mit Tomatensauce und herzhaften Gouda",
        price: 11.99,
        image: 'img/pizzaMagarita.jpg',
        size: "26 cm",
    },
    {
        food: "Wasser",
        incredidents: "mit Tomatensauce und herzhaften Gouda",
        price: 2.49,
        image: 'img/pizzaMagarita.jpg',
        size: "26 cm",
    },
    {
        food: "Softdrinks",
        incredidents: "mit Tomatensauce und herzhaften Gouda",
        price: 2.99,
        image: 'img/pizzaMagarita.jpg',
        size: "26 cm",
    },
    {
        food: "Wein",
        incredidents: "mit Tomatensauce und herzhaften Gouda",
        price: 7.99,
        image: 'img/pizzaMagarita.jpg',
        size: "26 cm",
    },
];

let cartFood = [];
let cartPrice = [];
let cartAmount = [];
let deliveryCost = 2.50;

function start() {
    render();
}

function render() {
    let storeContent = document.getElementById('storeContent');
    storeContent.innerHTML = "";

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        storeContent.innerHTML += generateStoreContentHTML(item, i);

    }
}

function generateStoreContentHTML(item, i) {
    return `
    <section id="menuList" class="menuList">
                            <section id="popularItems" class="popularItems">
                                <div id="popularItemsHeader" class="popularItemsHeader"></div>
                                <div id="popularItemsList" class="popularItemsList">
                                    <div id="popularItemsListDetail" class="popularItemsListDetail">
                                        <ul class="popularMenuList" id="popularMenuList">
                                            <li>
                                                <div class="menuItem">
                                                    <div id="pizzaMagharita" class="popularItem"><b>${item["food"]}</b>
                                                        <div class="popularItemDescription">${item["incredidents"]}</div>
                                                        <div class="popularItemSize">${item["size"]}</div>
                                                        <div class="popularItemPrice">${item["price"]}€</div>
                                                    </div>
                                                    <div class="popularItemIMGAndPLUS">
                                                        <div class="popularItemIMG"><img src="./img/pizzaMagarita.jpg"
                                                                alt=""></div>
                                                        <div class="popularItemPlus">
                                                                <a href="#"onclick="addToCart(${i})">+</a></div>
                                                                </div>    
                                                        <div class="popularItemPlus">
                                                                <a href="#"onclick="addToCart(${i})">-</a></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </section>
    `;
}

function addToCart(i) {
    document.getElementById('orderStatus').classList.remove("d-none");
    document.getElementById('emptyCart').classList.add("d-none");


    let addCartFood = items[i]['food'];
    let addCartPrice = items[i]['price'];
    let addCartAmount = getAmountIndex(addCartFood);

    if (addCartAmount === -1) {
        cartFood.push(addCartFood);
        cartPrice.push(addCartPrice.toFixed(2));
        cartAmount.push(1);
        renderCart();
    }
    else {
        cartAmount[addCartAmount] += 1;

    }


    renderCart();
    calculate();
}

function getAmountIndex(cartAmount) {
    return cartFood.indexOf(cartAmount);
}

function renderCart() {
    const cartItem = document.getElementById('orderStatus');
    cartItem.innerHTML = "";

    for (let i = 0; i < cartFood.length; i++) {
        cartItem.innerHTML += renderCartHTML(i);
    }

}


function renderCartHTML(i) {
    return `
    <div id="cartList" class="cartList" >
                                    <div id="cartFoodAmount" class="cartFoodAmount">${cartAmount[i]}</div>
                                    <div id="cartFood" class="cartFood">${cartFood[i]}</div>
                                    <div id="cartPrice" class="cartPrice">${cartPrice[i] * cartAmount} €</div>
                            
                                    <div id="cartSum" class="cartSum">
                                        
                                    </div>
                                </div>
                                
    `;
}

function calculate() {
    let sum = 0;

    for (let i = 0; i < cartPrice; i++) {
        sum += cartPrice[i] * cartAmount[i];
    }
        let total = sum + deliveryCost;
        cartSum.innerHTML = renderCartSum(sum, total);
    
}

function renderCartSum(sum, total) {
    return `
            <div id="cartSummarySub" class="cartSummarySub">
            <p>Zwischensumme</p><p>${sum.toFixed(2)} €</p>
            </div>
            <div id="deliveryCost" class="deliveryCost">
                <p>zzgl. Lieferkosten: </p><p>${deliveryCost.toFixed(2)} €</p>
                </div>
            <div id="cartSummaryTotal" class="cartSummaryTotal">
                <span>Gesamt: ${total.toFixed(2)} €</span>
                 </div>
            <div id="checkout" class="checkout">
                <button>BESTELLEN</button>
                </div>
    `;
}



 
  
  
  
  
/*
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
}*/



//function addItem()

//function removeItem()

//function removeItemCart()

//function loadStorrage()

//function saveStorrage()

//function order()

/*window.onscrollY = function() {
    let sticky = document.getElementById('sticky');
    if(window.scrollY > 0) {
        sticky.style = 'top: 0';
    }
        else {
            sticky.style = 'top: 100px';
        }
};*/
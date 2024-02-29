/*let items = [
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
];*/

let shop = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let { id, food, incredidents, price, image, size } = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
        <div id=product-id-${id} class="item">
            <img src="${image}" alt="">
            <div class="details">
                <h3>${food}</h3>
                <p>${incredidents}</p>
                <p>${size}</p>
                <div class="priceQuantity">
                    <h2>${price} €</h2>
                <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantitiy">${search.item === undefined ? 0 : search.item}</div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
        `;
    })
        .join(""));
    ;
};

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }

    else {
        search.item += 1;
    }
    
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) return;
    else if (search.item === 0) return;

    else {
        search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");

/*let generateCartItems = () => {
    if (basket.length !== 0) {
        return (ShoppingCart.innerHTML = basket.map((x) => {
            let { id, item } = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
            return `
            <div class="cart-item">
            <img src=${search.image} alt="" />
            <div class="details">
              <div class="title-price-x">
                  <h4 class="title-price">
                    <p>${search.food}</p>
                    <p class="cart-item-price">${search.price} €</p>
                  </h4>
                  <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
              </div>
    
              <div class="buttons">
                  <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                  <div id=${id} class="quantity">${item}</div>
                  <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
    
              <h3>${item * search.price} €</h3>
            </div>
          </div>
            `;

        })
            .join(""));
    }
    else {
        ShoppingCart.innerHTML = ``;
        label.innerHTML = `
        <h2>Fülle Deinen Warenkorb und suche Dir etwas von
        unseren leckeren Gerichten aus</h2>`;
    }
};

generateCartItems();*/





/*function addToCart(i) {
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

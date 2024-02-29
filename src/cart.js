const openShopping = document.querySelector(".shopping");
const closeShopping =document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantitiy = document.querySelector(".quantitiy");

openShopping.addEventListener("click", () => {
    body.classList.add("active")
})

closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})
let products = [{
    id: "a",
    name: "Pizza Magharita",
    incredidents: "mit Tomatensauce und herzhaften Gouda",
    price: 8.99,
    image: 'img/pizzaMagarita.jpg',
    size: "26 cm",
},
{
    id: "b",
    name: "Pizza Hot",
    incredidents: "mit scharfer Tomatensauce, Peperonisalami und herzhaften Gouda",
    price: 13.99,
    image: 'img/PizzaSalami.jpg',
    size: "26 cm",
},
{
    id: "c",
    name: "Pizza Brötchen",
    incredidents: "mit Tomatensauce und herzhaften Gouda und Knoblauchdressing",
    price: 5.99,
    image: 'img/pizzaMagarita.jpg',
    size: "26 cm",
},
{
    id: "d",
    name: "Pizza Gyros",
    incredidents: "mit Tomatensauce, Tzatziki, Gyros und herzhaften Gouda",
    price: 12.99,
    image: 'img/pizzaMagarita.jpg',
    size: "26 cm",
},
{
    id: "e",
    name: "Pizza Meatlover",
    incredidents: "mit Tomatensauce, viel Fleisch und herzhaften Gouda",
    price: 15.99,
    image: 'img/pizzaMagarita.jpg',
    size: "26 cm",
},
{
    id: "f",
    name: "Pizza Hollondaise",
    incredidents: "mit Tomatensauce und herzhaften Gouda",
    price: 11.99,
    image: 'img/pizzaMagarita.jpg',
    size: "26 cm",
},
{
    id: "g",
    name: "Pizza des Monats",
    incredidents: "mit Tomatensauce und herzhaften Gouda",
    price: 9.99,
    image: 'img/pizzaMagarita.jpg',
    size: "26 cm",
},
{
    id: "h",
    name: "Chefsalat",
    incredidents: "mit Tomatensauce und herzhaften Gouda",
    price: 5.99,
    image: 'img/pizzaMagarita.jpg',
    size: "26 cm",
},
{
    id: "i",
    name: "Pizzabox",
    incredidents: "mit Tomatensauce und herzhaften Gouda",
    price: 11.99,
    image: 'img/pizzaMagarita.jpg',
    size: "26 cm",
},
{
    id: "j",
    name: "Wasser",
    incredidents: "mit Tomatensauce und herzhaften Gouda",
    price: 2.49,
    image: 'img/pizzaMagarita.jpg',
    size: "26 cm",
},
{
    id: "k",
    name: "Softdrinks",
    incredidents: "mit Tomatensauce und herzhaften Gouda",
    price: 2.99,
    image: 'img/pizzaMagarita.jpg',
    size: "26 cm",
},
{
    id: "l",
    name: "Wein",
    incredidents: "mit Tomatensauce und herzhaften Gouda",
    price: 7.99,
    image: 'img/pizzaMagarita.jpg',
    size: "26 cm",
},
];

const listCards = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <img src="${value.image}" alt="">
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()} €</div>
        <button	onclick="addToCart(${key})">Add to cart</button>
        `
        list.appendChild(newDiv);
    })
}

initApp();

const addToCart = (key) => {
    if (listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard()
}

const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if (value !== null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
            <div><img src="img/${value.image}"></div>
            <div class = "cardTitle">${value.name}</div>
            <div class = "cardPrice">${value.price.toLocaleString()} €</div>

            <div>
                <button style="backgrounf-color="purple" class="cardButton" onclick="changeQuantity(${key})" value="$value.quantity -1"<-</button>

                <button style="backgrounf-color="purple" class="cardButton" onclick="changeQuantity(${key})" value="$value.quantity +1"<+</button>
            </div>
            `
        }
        total.innerText = totalPrice.toLocaleString();
        quantitiy.innerText = count;
    })}
  

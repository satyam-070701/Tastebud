let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Cauliflower',
        image: 'cauli.jpg',
        price: 120
    },
    {
        id: 2,
        name: 'Lady Finger',
        image: '8.PNG',
        price: 100
    },
    {
        id: 3,
        name: 'Onion',
        image: 'onion.jpg',
        price: 130
    },
    {
        id: 4,
        name: 'Potato',
        image: 'potato.jpg',
        price: 200
    },
    {
        id: 5,
        name: 'Brinjal',
        image: 'Brinjal.jpg',
        price: 80
    },
    
    {
        id: 6,
        name: 'Tomato',
        image: 'Tomato_je.jpg',
        price: 140
    },
    {
        id: 7,
        name: 'Peas',
        image: 'Peas_in_pods_-_Studio.jpg',
        price: 40
    },
    {
        id: 8,
        name: 'Pumpkin',
        image: '1200px-Various_Pumpkins.jpg',
        price: 100
    },
    {
        id: 9,
        name: 'Corn',
        image: 'mazorcas-maiz-choclo.jpg',
        price: 50
    },
    {
        id: 10,
        name: 'Cucumber',
        image: '71xkI-PIE5L._AC_UF1000,1000_QL80_.jpg',
        price: 70
    },
    {
        id: 11,
        name: 'Cabbage',
        image: 'download.jpg',
        price: 60
    },
    {
        id: 12,
        name: 'Broccoli',
        image: 'h1218g16207258089583.jpg',
        price: 45
    }
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
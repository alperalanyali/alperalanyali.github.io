let categories = [
    {
     
        name:'Television'
    },
    {
   
        name:'Computer'
    },
    {
        name:'Tablet'
    }
]

let products =[
    {
        name:`Philips 50PUS8506 50'' 126 Ekran Uydu Alıcılı 4K Ultra HD Android Smart LED TV`,
        image:'https://productimages.hepsiburada.net/s/278/550/110000264198015.jpg/format:webp',
        price:14000,
        inStock:100,
        category:'Television'
    },
    {
        name:`LG OLED55C24LA 55" 140 Ekran Uydu Alıcılı 4K Ultra HD Smart OLED TV`,
        image:'https://productimages.hepsiburada.net/s/217/550/110000196451815.jpg/format:webp',
        price:9000,
        inStock:10,
        category:'Television'
    },
    {
        name:`Hp 15S-FQ5003NT Intel Core i7-1255U 16GB 512GB SSD 15.6"`,
        image:'https://productimages.hepsiburada.net/s/300/1100/110000290631182.jpg/format:webp',
        price:18000,
        inStock:10,
        category:'Computer'
    },
    {
        name:`Vestel 50UA9600 50'' 126 Ekran Uydu Alıcılı 4K Ultra HD Android Smart LED TV`,
        image:'https://productimages.hepsiburada.net/s/166/550/110000128540181.jpg/format:webp',
        price:28500,
        inStock:10,
        category:'Television'
    },
    {
        name:`Samsung Galaxy Tab S7 FE 64GB 12.4" Wifi Tablet Mystic Silver`,
        image:'https://productimages.hepsiburada.net/s/127/550/110000077439199.jpg/format:webp',
        price:8200,
        inStock:200,
        category:'Tablet'
    },
    {
        name:`MSI GF63 Thin 11UC-616XTR Intel Core i7 11800H 8GB 512GB SSD RTX3050 Freedos 15.6" FHD`,
        image:'https://productimages.hepsiburada.net/s/179/550/110000143302073.jpg/format:webp',
        price:22500,
        inStock:10,
        category:'Computer'
    },
    {
        name:`
        Dell Vostro 3400 Intel Core i3 1115G4 4GB 1TB HDD Ubuntu 14'' `,
        image:'https://productimages.hepsiburada.net/s/308/550/110000300984654.jpg/format:webp',
        price:7500,
        inStock:5,
        category:'Computer'
    },
    {
        name:`Apple iPad 9. Nesil 64GB 10.2" WiFi Tablet - MK2K3TU/A"  `,
        image:'https://productimages.hepsiburada.net/s/120/1100/110000069569291.jpg/format:webp',
        price:7800,
        inStock:200,
        category:'Tablet'
    },
    {
        name:`Honor Pad 8 4GB 128GB Wifi 12"  `,
        image:'https://productimages.hepsiburada.net/s/318/550/110000312545996.jpg/format:webp',
        price:5500,
        inStock:5,
        category:'Tablet'
    },
];

let baskets = [];
let orders = [];

loadPage();

function loadPage(){

    displayBasketCount();
    displayProducts();
    displayCategories();   
    checkBasketCount() 
}



function displayBasketCount(){    
    let basketCount = document.querySelector('#basketCount');
    basketCount.innerHTML = baskets.length;
}

function displayProducts(){
    let productsElement = document.querySelector('#products');
    let product = ` <div class="row mt-4 mx-4">`;
    for (let i = 0; i <products.length; i++){
        product += `
    
        <div class="col-4 mt-4">
            <div class="card">
                <img src="${products[i].image}" style="width:100%; height:220px; object-fit: cover;object-position: 5px 20% class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${products[i].name}</h5>
                  <p class="card-text">Price: <b>${products[i].price} TL </b></p>
                  <p class="card-text">InStock: <b>${products[i].inStock} pcs</b> </p>
                  <p class="card-text">${products[i].category}</p>
                  <button onclick="addToBasket(${i})" href="#" class="btn btn-outline-primary">
                     <i class="fa-solid fa-basket-shopping"></i>
                    Add to Basket
                  </button>
                </div>
              </div>
        </div>    
        `;
    }
    product += `    </div>`;
    productsElement.innerHTML = product;
    
}

function displayCategories(){
    let categoriesElement = document.querySelector('.categories');
    let categoryElement = "";
    for (let i = 0; i < categories.length;i++){
        categoryElement += ` <li class="category"><a href="#">${categories[i].name}</a></li>`
    }    
    categoriesElement.innerHTML = categoryElement;   
}

function checkBasketCount(){
    let confirmBtn = document.querySelector('#confirmBtn');
    if(baskets.length ==0){
        try{
            confirmBtn.setAttribute('disabled', 'disabled');
        }catch(er){

        }
    }else {
        try{
            confirmBtn.removeAttribute('disabled');
        }catch(err){

        }
    }
    
}

function addToBasket(index){    
    baskets.push(products[index]);
    var toastDomSuccess = document.getElementById("liveToast");
    var toast = new bootstrap.Toast(toastDomSuccess);
    toast.show();
    displayBasketCount();
}

function displayBasketTable(){
    let basketTBodyElement = document.querySelector('#basketTBody');
    let element = "";
    for(let i = 0; i < baskets.length;i++){
        element += `
            <tr>
                <td>${i+1}</td>
                <td>${baskets[i].name}</td>
                <td><img src="${baskets[i].image}" width="150px"></td>
                <td>1</td>
                <td>${baskets[i].price}</td>
                <td>${baskets[i].price * 1}</td>
            </tr>
        `;
    }    
    basketTBodyElement.innerHTML = element;
}

function confirmOrder(){
    let paymentBtn = document.getElementById('paymentBtn');;
    let totalAmount = 0;
    baskets.forEach(element => {
        totalAmount += element.price;
    });    
    let order = {
        "baskets":baskets,
        "total":totalAmount
    }
    paymentBtn.click();
    
}


function login(){

   
}
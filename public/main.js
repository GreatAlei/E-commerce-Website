//FIREBASE
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCMefAlAQSNdzMS8r9H8Hqzdo0_84T2pcE",
  authDomain: "uniqhistores.firebaseapp.com",
  databaseURL: "https://uniqhistores-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "uniqhistores",
  storageBucket: "uniqhistores.appspot.com",
  messagingSenderId: "323623926274",
  appId: "1:323623926274:web:cb920f903127763a67c51b"
};

firebase.initializeApp(firebaseConfig);


//GLOBAL  
var products=[];
var cartItems=[];
var cart_n = document.getElementById('cart_n');
//DIVS
var ShopDiv=document.getElementById("ShopDiv");
var TeensDiv=document.getElementById("TeensDiv");
var MenDiv=document.getElementById("MenDiv");
var WomenDiv=document.getElementById("MenDiv");
//information
var SHOP=[
  {name:'Clover Monstera Short Set' ,price:250},
  {name:'Allmeingled Princess Nightgowns' ,price:300},
  {name:'Hanna Andersson Pajamas' ,price:400},
  {name:'Carters Two Pack Infant Sleeper Gowns' ,price:400},
  {name:'Allmeingled Princess Nightgowns' ,price:300},
  {name:'Hanna Andersson Pajamas' ,price:300},
];
var TEENS=[
  {name:'Anything Goes Slip Set' ,price:250},
  {name:'Cotton-blend Pajamas' ,price:300},
  {name:'Sleeper Feather-trimmed Pajamas' ,price:400},
  {name:'Soft Stretch Long-Sleeve Pajama' ,price:400},
  {name:'Sweat Pants and a shirt' ,price:300},
];
var MEN=[
  {name:'Fleece Pajama Suit' ,price:250},
  {name:'Laundry Cotton Pajama Set' ,price:300},
  {name:'Medusa Silk Pajama Set' ,price:400},
  {name:'Short-sleeved Cotton Pajama Set' ,price:400},
  {name:'Silk Summer Pajama Set' ,price:300},
  {name:'Silk Summer Pajama Set' ,price:300},
];
var WOMEN=[
  {name:'Babydolls' ,price:250},
  {name:'Chemises' ,price:300},
  {name:'Pyjama' ,price:400},
  {name:'Short Cotton Nighties' ,price:400},
  {name:'Sleep Tops' ,price:300},
  {name:'Maternity Nightwear' ,price:300},
];
//HTML
function HTMLshopProduct(con) {
  let URL = `img/products/sample${con}.png`;
  let btn = `btnShop${con}`;
  return `
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img class="card-img-top" style="height:16rem;" src="${URL}"
        alt="Card image cap">
        <div class="card-body">
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <p class="card-text">${SHOP[con-1].name}</p>
          <p class="card-text">Price: PHP ${SHOP[con-1].price}.00</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" onclick="cart2('${SHOP[con-1].name}','${SHOP[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary"><a href="cart.html" style="color:inherit;">Buy</a></button>
              <button id="${btn}" type="button" onclick="cart('${SHOP[con-1].name}','${SHOP[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
            </div>
            <small class="text-muted"> Free shipping </small>
          </div>
        </div>
      </div>
    </div> 
  `
}
function HTMLTeensProduct(con) {
  let URL = `img/products1/sample${con}.png`;
  let btn = `btnTeens${con}`;
  return `
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img class="card-img-top" style="height:16rem;" src="${URL}"
        alt="Card image cap">
        <div class="card-body">
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <p class="card-text">${TEENS[con-1].name}</p>
          <p class="card-text">Price: PHP${TEENS[con-1].price}.00</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" onclick="cart2('${TEENS[con-1].name}','${TEENS[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary"><a href="cart.html" style="color:inherit;">Buy</a></button>
              <button id="${btn}" type="button" onclick="cart('${TEENS[con-1].name}','${TEENS[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
            </div>
            <small class="text-muted"> Free shipping </small>
          </div>
        </div>
      </div>
    </div> 
  `
}
function HTMLMenProduct(con) {
  let URL = `img/products2/sample${con}.png`;
  let btn = `btnMen${con}`;
  return `
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img class="card-img-top" style="height:16rem;" src="${URL}"
        alt="Card image cap">
        <div class="card-body">
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <p class="card-text">${MEN[con-1].name}</p>
          <p class="card-text">Price: PHP${MEN[con-1].price}.00</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" onclick="cart2('${MEN[con-1].name}','${MEN[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary"><a href="cart.html" style="color:inherit;">Buy</a></button>
              <button id="${btn}" type="button" onclick="cart('${MEN[con-1].name}','${MEN[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
            </div>
            <small class="text-muted"> Free shipping </small>
          </div>
        </div>
      </div>
    </div> 
  `
}
function HTMLWomenProduct(con) {
  let URL = `img/products3/sample${con}.png`;
  let btn = `btnWomen${con}`;
  return `
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img class="card-img-top" style="height:16rem;" src="${URL}"
        alt="Card image cap">
        <div class="card-body">
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <p class="card-text">${WOMEN[con-1].name}</p>
          <p class="card-text">Price: PHP${WOMEN[con-1].price}.00</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" onclick="cart2('${WOMEN[con-1].name}','${WOMEN[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary"><a href="cart.html" style="color:inherit;">Buy</a></button>
              <button id="${btn}" type="button" onclick="cart('${WOMEN[con-1].name}','${WOMEN[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
            </div>
            <small class="text-muted"> Free shipping </small>
          </div>
        </div>
      </div>
    </div> 
  `
}
//Animation
function animation(){
  const toast=swal.mixin({
    toast:true,
    position:'top-end',
    showConfirmButton:false,
    timer:1000
  });
  new toast({
    type:'success',
    title: 'Added to Shopping Cart'
  });
}
//CART FUNCTIONS
function cart(name,price,url,con,btncart){
  var item={
    name:name,
    price:price,
    url:url
  }
  cartItems.push(item);
  let storage= JSON.parse(localStorage.getItem("cart"));
  if (storage==null) {
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products));
  } else {
    products= JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products));
  }
  products= JSON.parse(localStorage.getItem("cart"));
  cart_n.innerHTML=`[${products.length}]`;
  document.getElementById(btncart).style.display="none";
  animation();
}
function cart2(name,price,url,con,btncart){
  var item={
    name:name,
    price:price,
    url:url
  }
  cartItems.push(item);
  let storage= JSON.parse(localStorage.getItem("cart"));
  if (storage==null) {
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products));
  } else {
    products= JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products));
  }
  products= JSON.parse(localStorage.getItem("cart"));
  cart_n.innerHTML=`[${products.length}]`;
  document.getElementById(btncart).style.display="none"; 

}
//RENDER
function render(){
  for (let index = 1; index <= 6; index++) {
    ShopDiv.innerHTML+=`${HTMLshopProduct(index)}`;
    
  }
  for (let index = 1; index < 6; index++) {
    TeensDiv.innerHTML+=`${HTMLTeensProduct(index)}`;
    
  }
  for (let index = 1; index <= 6; index++) {
    MenDiv.innerHTML+=`${HTMLMenProduct(index)}`;
    
  }
  for (let index = 1; index <= 6; index++) {
    WomenDiv.innerHTML+=`${HTMLWomenProduct(index)}`;
    
  }
  if (localStorage.getItem("cart")==null) {
    
  } else {
    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
  }
}
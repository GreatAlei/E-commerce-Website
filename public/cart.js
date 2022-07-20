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
var products=JSON.parse(localStorage.getItem('cart'));
var cartItems=[];
var cart_n = document.getElementById('cart_n');
var table=document.getElementById("table");
var total=0;
//HTML
function tableHTML(i){
    return`
                <tr>
                <th scope="row">${i+1}</th>
                <td><img styles="width:90px;" src="${products[i].url}"></td>
                <td>${products[i].name}</td>
                <td>1</td>
                <td>${products[i].price}</td>
                </tr>

    `;
}
//buy
function buy(){
    var d = new Date();
    var t = d.getTime();
    var counter=t;
    counter+=1;
    let db=firebase.database().ref("order/"+counter);
    let itemdb={
        name:counter,
        order:counter-895,
        total:total
    }
    db.set(itemdb);
    new swal({
        position:'center',
        type:'success',
        title:'Purchase made successfully!',
        Text:`Your purchase order is: ${itemdb.name}`,
        showConfirmButton:true,
        timer:50000
    });
    clean();
}
//clean
function clean(){
        localStorage.clear();
        for (let index = 0; index < products.length; index++) {
            table.innerHTML+=tableHTML(index);
            total=total+parseInt(products[index].price);
            
        }
        total=0;
        table.innerHTML=`
        <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        </tr>
        `;
        cart_n.innerHTML='';
        document.getElementById("btnBuy").style.display="none";
        document.getElementById("btnClean").style.display="none";
}


//RENDER
function render(){
for (let index = 0; index < products.length; index++) {
    table.innerHTML+=tableHTML(index);
    total=total+parseInt(products[index].price);
}
table.innerHTML+=`
<tr>
<th scope="col"></th>
<th scope="col"></th>
<th scope="col"></th>
<th scope="col"></th>
<th scope="col">Total: PHP ${total}.00</th>
</tr>
<tr>
<th scope="col"></th>
<th scope="col"></th>
<th scope="col"></th>
<th scope="col">
    <button id="btnClean" onclick="clean()" class="btn text-white btn-warning">Clean Shopping Cart</button>
</th>
<th scope="col"><button id="btnBuy" onclick="buy()" class="btn btn-success">Buy</button></th>
</tr>
`;
products=JSON.parse(localStorage.getItem("cart"));
cart_n.innerHTML=`[${products.length}]`;
}

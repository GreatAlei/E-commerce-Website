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
var d = new Date();
var t = d.getTime();
var counter = t;
//FORM
document.getElementById("form").addEventListener("submit", (e)=>{
    var order = document.getElementById("order").value;
    var total = document.getElementById("total").value;
    e.preventDefault();
    createOrder(order,total);
    form.reset();
});
//create new order
function createOrder(order,total){
    console.log(counter);
    counter+=1;
    console.log(counter);
    var newOrder ={
        id:counter,
        order:order,
        total:total
    }
    let db= firebase.database().ref("order/"+counter);
    db.set(newOrder);
    document.getElementById("cardSection").innerHTML='';
    readOrder();
}
function readOrder(){
    var order = firebase.database().ref("order/");
    order.on("child_added", function(data){
        var orderValue= data.val();
        document.getElementById("cardSection").innerHTML+=`
            <div class="card mb-3">
                <div class="card-body>
                    <h5 class="card-title">Order: ${orderValue.order}</h5>
                    <p class ="card-text">Total: ${orderValue.total} </p> 
                <button type="submit" style="color:white" class="btn btn-warning" onclick="updateOrder(${orderValue.id},'${orderValue.order}','${orderValue.total}')"><i class="fas fa-edit"></i>Edit Order</button>
                <button type="submit" class="btn btn-danger" onclick="deleteOrder(${orderValue.id})"><i class="fas fa-crash-alt"></i>Delete Order</button> 
                </div>
            </div>
        `
    });
}
function reset(){
    document.getElementById("firstSection").innerHTML=`
    <form class="border p-4 mb-4" id="form">
    <div class="form-group">
        <label>Order</label>
        <input type="text" class="form-control" id="order" placeholder="Order">
    </div>
    <div class="form-group">
        <label>Total</label>
        <input type="text" class="form-control" id="total" placeholder="Total">
    </div>
    <button type="submit" id="button1" class="btn-primary"><i class="fas fa-plus"></i>Add Order</button>
    <button style="display:none" id="button2" class="btn btn-success">Update Order</button>
    <button style="display:none" id="button3" class="btn btn-danger">Cancel</button>
    </form>
    `;
    document.getElementById("form").addEventListener("submit", (e)=>{
        var order = document.getElementById("order").value;
        var total = document.getElementById("total").value;
        e.preventDefault();
        createOrder(order,total);
        form.reset();
    });
}
function updateOrder(id,order,total){
    document.getElementById("firstSection").innerHTML=`
    <form class="border p-4 mb-4" id="form2">
    <div class="form-group">
        <label>Order</label>
        <input type="text" class="form-control" id="order" placeholder="Order">
    </div>
    <div class="form-group">
        <label>Total</label>
        <input type="text" class="form-control" id="total" placeholder="Total">
    </div>
    <button style="display:none" type="submit" id="button1" class="btn-primary"><i class="fas fa-plus"></i>Add Order</button>
    <button id="button2" class="btn btn-success">Update Order</button>
    <button id="button3" class="btn btn-danger">Cancel</button>
    </form>
    `;
    document.getElementById("form2").addEventListener("submit", (e)=>{
        e.preventDefault();
    });
    document.getElementById("button3").addEventListener("click",(e)=>{
        reset();
    });
    document.getElementById("button2").addEventListener("click",(e)=>{
        updateOrder(id,document.getElementById("order").value, document.getElementById("total").value);
    });
    document.getElementById("order").value=order;
    document.getElementById("total").value=total;
}
function updateOrder2(id,order,total){
    var orderUpdated={
        id:id,
        order:order,
        total:total
    }
    let db=firebase.database().ref("order/"+id);
    db.set(orderUpdated);
    document.getElementById("cardSection").innerHTML="";
    readOrder();
    reset();
}
function deleteOrder(id){
    console.log(id);
    var order=firebase.database().ref("order/"+id);
    order.remove();
    reset();
    document.getElementById("cardSection").innerHTML="";
    readOrder();
}

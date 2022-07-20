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
function renderTable(){
    var order= firebase.database().ref("order/");
    order.on("child_added", function(data){
        var orderValue = data.val();
        document.getElementById("table").innerHTML+=`
            <tr>
                <td>${orderValue.id}</td>
                <td>${orderValue.order}</td>
                <td>${orderValue.total}</td>
            </tr>
        `;
    });
};
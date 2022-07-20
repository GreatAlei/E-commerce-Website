var x = document.getElementById("email");
var p = document.getElementById("password");

document.getElementById("form").addEventListener("submit", (ee)=> {
    ee.preventDefault();
    console.log(x.value);
    console.log(p.value);
    if (x.value == "uniqhi@gmail.com" && p.value == "uniqhi123") {
            new swal({
                title:'Welcome',
                html:'Access granted',
                type:'success'
            });
            setTimeout(() => {
                loadPage();
            }, 3000);
    } else {
        new swal({
            title:'ERROR',
            html:'Access denied',
            type:'error'
        });
    }
    function loadPage(){
        window.location.href="./admin.html";
    }
})
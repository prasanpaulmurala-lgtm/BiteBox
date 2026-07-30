function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");
    if(email === "admin@1234" && password === "1234"){
        localStorage.setItem("isloggedin","true")
        localStorage.setItem("user",email);
        window.location.href="index.html";
    }else{
        error.innerText = "Invalid email or passsword";
    }
}


function togglepassword() {
    let passInput = document.getElementById("password");

    if (passInput.type === "password") {
        passInput.type = "text";

    } else {
        passInput.type = "password";
    }
}

function next(){
    window.location.href="menu.html";
}

function page(){
    window.location.href="cart.html";
}


function increment(btn) {
    let row = btn.closest("tr");

    let qty = row.querySelector("span");
    let count = Number(qty.innerText);

    count++;
    qty.innerText = count;

    let price = Number(row.cells[1].innerText.replace("₹", ""));
    row.cells[3].innerText = "₹" + (price * count);

    updateGrandTotal();
}

function decrement(btn) {
    let row = btn.closest("tr");

    let qty = row.querySelector("span");
    let count = Number(qty.innerText);

    count--;

    if (count <= 0) {
        row.remove();
    } else {
        qty.innerText = count;

        let price = Number(row.cells[1].innerText.replace("₹", ""));
        row.cells[3].innerText = "₹" + (price * count);
    }

    updateGrandTotal();
}

function removeRow(btn) {
    btn.closest("tr").remove();
    updateGrandTotal();
}

function updateGrandTotal() {

    let total = 0;

    let rows = document.querySelectorAll("tbody tr");

    rows.forEach(function(row) {

        // Skip the Grand Total row
        if (row.querySelector("#grandTotal")) return;

        total += Number(row.cells[3].innerText.replace("₹", ""));
    });

    document.getElementById("grandTotal").innerText = "₹" + total;
}
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
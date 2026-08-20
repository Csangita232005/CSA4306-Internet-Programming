function buy(product) {
    alert(product + " selected successfully!");
}

function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user != "" && pass != "") {
        document.getElementById("message").innerHTML =
            "Login successful!";
    } else {
        document.getElementById("message").innerHTML =
            "Please enter login details.";
    }
}
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user != "" && pass != "") {
        document.getElementById("loginMsg").innerHTML =
            "Login successful!";
    } else {
        document.getElementById("loginMsg").innerHTML =
            "Enter username and password.";
    }
}

function buy(product) {
    document.getElementById("message").innerHTML =
        product + " ordered successfully!";
}

function searchProduct() {
    let product = document.getElementById("search").value;

    document.getElementById("message").innerHTML =
        "Searching for: " + product;
}

function checkOrder() {
    document.getElementById("orderMsg").innerHTML =
        "Shipping Status: Order is on the way.";
}
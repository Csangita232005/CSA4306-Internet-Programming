function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user != "" && pass != "") {
        document.getElementById("loginMsg").innerHTML =
            "Login successful!";
    } else {
        document.getElementById("loginMsg").innerHTML =
            "Enter username and password.";
    }
}

function addMoney() {
    let amount = document.getElementById("amount").value;

    document.getElementById("walletMsg").innerHTML =
        "₹" + amount + " added to eWallet.";
}

function buyTicket() {
    document.getElementById("result").innerHTML =
        "Toll eTicket purchased successfully!";
}

function applyPass() {
    document.getElementById("result").innerHTML =
        "Toll pass application submitted!";
}

function generateQR() {
    document.getElementById("result").innerHTML =
        "QR Code generated successfully!";
}
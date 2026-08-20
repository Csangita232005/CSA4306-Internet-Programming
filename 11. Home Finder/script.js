function searchProperty() {

    let location = document.getElementById("location").value;
    let type = document.getElementById("type").value;
    let price = document.getElementById("price").value;

    if (location == "" || type == "" || price == "") {
        document.getElementById("searchResult").innerHTML =
            "Please enter all search details.";
    }
    else {
        document.getElementById("searchResult").innerHTML =
            "Properties searched in " + location +
            " under ₹" + price;
    }
}


function showDetails(property) {

    alert("Property Details: " + property +
          "\nContact the agent for more information.");
}


function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username != "" && password != "") {
        document.getElementById("loginResult").innerHTML =
            "Login Successful!";
    }
    else {
        document.getElementById("loginResult").innerHTML =
            "Please enter username and password.";
    }
}


function searchAgent() {

    let agent = document.getElementById("agent").value;

    if (agent == "") {
        document.getElementById("agentResult").innerHTML =
            "Please enter agent or company name.";
    }
    else {
        document.getElementById("agentResult").innerHTML =
            "Searching for " + agent;
    }
}
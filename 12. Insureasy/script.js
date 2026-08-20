function selectPolicy(policy) {
    document.getElementById("policyName").value = policy;
}

function savePolicy() {

    let customer = document.getElementById("customer").value;
    let policy = document.getElementById("policyName").value;

    if (customer == "" || policy == "") {
        document.getElementById("policyResult").innerHTML =
            "Please enter all details.";
    }
    else {
        document.getElementById("policyResult").innerHTML =
            "Policy saved successfully!";
    }
}

function registerAgent() {

    let name = document.getElementById("agentName").value;
    let email = document.getElementById("email").value;

    if (name == "" || email == "") {
        document.getElementById("agentResult").innerHTML =
            "Please enter all details.";
    }
    else {
        document.getElementById("agentResult").innerHTML =
            "Agent registered successfully!";
    }
}

function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username != "" && password != "") {
        document.getElementById("loginResult").innerHTML =
            "Login successful!";
    }
    else {
        document.getElementById("loginResult").innerHTML =
            "Please enter username and password.";
    }
}
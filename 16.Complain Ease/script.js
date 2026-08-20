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

function submitComplaint() {
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;

    if (name != "" && category != "") {
        document.getElementById("complaintMsg").innerHTML =
            "Complaint submitted successfully!";
    } else {
        document.getElementById("complaintMsg").innerHTML =
            "Please fill all details.";
    }
}

function checkStatus() {
    let id = document.getElementById("complaintId").value;

    if (id != "") {
        document.getElementById("statusMsg").innerHTML =
            "Complaint " + id + " is under process.";
    }
}

function sendFeedback() {
    document.getElementById("feedbackMsg").innerHTML =
        "Feedback submitted successfully!";
}
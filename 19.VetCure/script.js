function registerFarmer() {
    document.getElementById("registerMsg").innerHTML =
        "Farmer registered successfully!";
}

function farmerLogin() {
    let name = document.getElementById("loginName").value;
    let password = document.getElementById("loginPassword").value;

    if (name != "" && password != "") {
        document.getElementById("loginMsg").innerHTML =
            "Farmer login successful!";
    } else {
        document.getElementById("loginMsg").innerHTML =
            "Please enter login details.";
    }
}

function postComplaint() {
    let animal = document.getElementById("animal").value;
    let symptoms = document.getElementById("symptoms").value;

    if (animal != "" && symptoms != "") {
        document.getElementById("complaintMsg").innerHTML =
            "Animal complaint submitted successfully!";
    } else {
        document.getElementById("complaintMsg").innerHTML =
            "Please enter animal and symptoms.";
    }
}

function showStatus() {
    document.getElementById("serviceMsg").innerHTML =
        "Complaint Status: Waiting for Doctor Response.";
}

function showDoctor() {
    document.getElementById("serviceMsg").innerHTML =
        "Doctor: Dr. Kumar - Veterinary Specialist";
}

function showReport() {
    document.getElementById("serviceMsg").innerHTML =
        "Report: Animal disease analysis available.";
}

function showNews() {
    document.getElementById("serviceMsg").innerHTML =
        "News: New information about animal health.";
}

function postFeedback() {
    document.getElementById("feedbackMsg").innerHTML =
        "Feedback submitted successfully!";
}

function makePayment() {
    let amount = document.getElementById("amount").value;
    let method = document.getElementById("paymentMethod").value;

    if (amount != "") {
        document.getElementById("paymentMsg").innerHTML =
            "Payment of ₹" + amount +
            " through " + method + " submitted.";
    } else {
        document.getElementById("paymentMsg").innerHTML =
            "Enter payment amount.";
    }
}

function registerDoctor() {
    document.getElementById("doctorRegisterMsg").innerHTML =
        "Doctor registered successfully!";
}

function doctorLogin() {
    document.getElementById("doctorLoginMsg").innerHTML =
        "Doctor login successful!";
}

function viewComplaint() {
    document.getElementById("doctorMsg").innerHTML =
        "Farmer complaint: Animal has fever and weakness.";
}

function postSolution() {
    document.getElementById("doctorMsg").innerHTML =
        "Solution posted successfully.";
}

function manageCure() {
    document.getElementById("doctorMsg").innerHTML =
        "Animal disease and prescription updated.";
}

function manageNews() {
    document.getElementById("doctorMsg").innerHTML =
        "Veterinary news updated successfully.";
}

function viewUser() {
    document.getElementById("doctorMsg").innerHTML =
        "Farmer details displayed.";
}

function viewPayment() {
    document.getElementById("doctorMsg").innerHTML =
        "Payment details displayed.";
}

function viewFeedback() {
    document.getElementById("doctorMsg").innerHTML =
        "Farmer feedback displayed.";
}
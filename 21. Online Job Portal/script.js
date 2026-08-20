function registerUser() {
    let name = document.getElementById("userName").value;
    let email = document.getElementById("userEmail").value;

    if (name != "" && email != "") {
        document.getElementById("userRegisterMsg").innerHTML =
            "User registered successfully!";
    }
}

function userLogin() {
    let user = document.getElementById("userLogin").value;
    let pass = document.getElementById("userLoginPass").value;

    if (user != "" && pass != "") {
        document.getElementById("userLoginMsg").innerHTML =
            "User login successful!";
    } else {
        document.getElementById("userLoginMsg").innerHTML =
            "Enter username and password.";
    }
}

function searchJobs() {
    let job = document.getElementById("searchJob").value;
    let location = document.getElementById("location").value;
    let category = document.getElementById("category").value;

    document.getElementById("searchMsg").innerHTML =
        "Searching: " + job +
        " | Location: " + location +
        " | Category: " + category;
}

function applyJob(job) {
    document.getElementById("applyMsg").innerHTML =
        "Applied successfully for " + job + "!";
}

function registerDirector() {
    document.getElementById("directorRegisterMsg").innerHTML =
        "Director registration submitted.";
}

function directorLogin() {
    document.getElementById("directorLoginMsg").innerHTML =
        "Director login successful!";
}

function postVacancy() {
    let title = document.getElementById("jobTitle").value;

    if (title != "") {
        document.getElementById("vacancyMsg").innerHTML =
            title + " vacancy posted successfully!";
    } else {
        document.getElementById("vacancyMsg").innerHTML =
            "Enter vacancy details.";
    }
}

function viewApplicants() {
    document.getElementById("applicantMsg").innerHTML =
        "Applied users: Ravi, Priya, Arun";
}

function adminLogin() {
    let user = document.getElementById("adminUser").value;
    let pass = document.getElementById("adminPass").value;

    if (user != "" && pass != "") {
        document.getElementById("adminLoginMsg").innerHTML =
            "Admin login successful!";
    }
}

function approveDirector() {
    document.getElementById("adminMsg").innerHTML =
        "Director approved successfully!";
}

function viewUsers() {
    document.getElementById("adminMsg").innerHTML =
        "User details displayed.";
}

function viewReport() {
    document.getElementById("adminMsg").innerHTML =
        "Job application report displayed.";
}
function registerUser() {
    let name = document.getElementById("userName").value;
    let email = document.getElementById("userEmail").value;

    if (name != "" && email != "") {
        document.getElementById("userMsg").innerHTML =
            "User registered successfully!";
    }
}

function userLogin() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    if (user != "" && pass != "") {
        document.getElementById("loginMsg").innerHTML =
            "User login successful!";
    } else {
        document.getElementById("loginMsg").innerHTML =
            "Enter username and password.";
    }
}

function searchVehicle() {
    let type = document.getElementById("vehicleType").value;
    let location = document.getElementById("location").value;
    let days = document.getElementById("days").value;

    document.getElementById("searchMsg").innerHTML =
        "Searching " + type + " vehicles in " +
        location + " for " + days + " days.";
}

function selectVehicle(vehicle) {
    document.getElementById("selectedVehicle").value = vehicle;
}

function makeBooking() {
    let name = document.getElementById("customer").value;
    let vehicle = document.getElementById("selectedVehicle").value;

    if (name != "" && vehicle != "") {
        document.getElementById("bookingMsg").innerHTML =
            "Booking submitted successfully!";
    } else {
        document.getElementById("bookingMsg").innerHTML =
            "Enter customer and vehicle details.";
    }
}

function bookingStatus() {
    document.getElementById("statusMsg").innerHTML =
        "Booking Status: Pending Approval";
}

function adminLogin() {
    let user = document.getElementById("adminUser").value;
    let pass = document.getElementById("adminPass").value;

    if (user != "" && pass != "") {
        document.getElementById("adminMsg").innerHTML =
            "Admin login successful!";
    }
}

function addVehicle() {
    let vehicle = document.getElementById("newVehicle").value;

    document.getElementById("vehicleMsg").innerHTML =
        vehicle + " added successfully!";
}

function approveBooking() {
    document.getElementById("manageMsg").innerHTML =
        "User booking approved successfully!";
}

function manageVehicle() {
    document.getElementById("manageMsg").innerHTML =
        "Vehicle details updated successfully!";
}
function login() {
    let voter = document.getElementById("voter").value;
    let otp = document.getElementById("otp").value;

    if (voter != "" && otp != "") {
        document.getElementById("loginMsg").innerHTML =
            "Login successful!";
    } else {
        document.getElementById("loginMsg").innerHTML =
            "Enter Voter ID and OTP.";
    }
}

function vote() {
    let candidate = document.querySelector(
        'input[name="candidate"]:checked'
    );

    if (candidate) {
        document.getElementById("voteMsg").innerHTML =
            "Vote submitted for " + candidate.value;
    } else {
        document.getElementById("voteMsg").innerHTML =
            "Please select a candidate.";
    }
}

function showResult() {
    document.getElementById("resultMsg").innerHTML =
        "Election results displayed successfully!";
}
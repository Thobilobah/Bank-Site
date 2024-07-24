function validateForm() {
    var userId = document.getElementById("userId").value;
    var accountNumber = document.getElementById("accountNumber").value;
    var userIdError = document.getElementById("userIdError");
    var accountNumberError = document.getElementById("accountNumberError");
    var isValid = true;

    // Check if userId is empty
    if (userId.trim() === "") {
        userIdError.style.display = "block";
        isValid = false;
    } else {
        userIdError.style.display = "none";
    }

    // Check if accountNumber is empty or not a valid 10 digit number
    if (accountNumber.trim() === "" || accountNumber.length !== 10 || isNaN(accountNumber)) {
        accountNumberError.style.display = "block";
        isValid = false;
    } else {
        accountNumberError.style.display = "none";
    }

    // If form is valid, redirect to the new HTML page with URL parameters
    if (isValid) {
        window.location.href = "/banks.html?userId=" + encodeURIComponent(userId) + "&accountNumber=" + encodeURIComponent(accountNumber);
    }
}
function getQueryParam(param) {
    let params = new URLSearchParams(window.location.search);
    return params.get(param);
}

document.addEventListener('DOMContentLoaded', function() {
    let userId = getQueryParam('userId');
    let accountNumber = getQueryParam('accountNumber');

    if (userId) {
        document.getElementById('userId').textContent = userId;
    }

    if (accountNumber) {
        document.getElementById('accountNumber').textContent = accountNumber;
    }
});
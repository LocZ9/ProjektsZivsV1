document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registration-form");
    
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(registrationForm);
        const username = formData.get("username");
        const password = formData.get("password");
        

        registerUser(username, password);
    });
});

function registerUser(username, password) {

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {

            window.location.href = "/login.html";
        } else {

            console.error("Registration failed");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
}



// JavaScript for register page

// Function to validate the registration form
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation
    if (username.trim() === "" || password.trim() === "") {
        alert("Username and password are required.");
        return false;
    }

    return true;
}

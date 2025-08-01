const configureFormValidation = function() {
    // Block form submission - need to stay on same page. Note use of action="#", too, in the HTML
    document.getElementsByTagName("form").item(0).onsubmit = function(event) {
        event.preventDefault();
    }
    const submitButton = document.getElementById("reg-submit-button")
    submitButton.addEventListener("click", function() {
        // Find the form by id and save the form object to a variable
        const form = document.getElementById("reg-form");

        // Get the div with the id reg-result-message and save it to a variable
        const resultMessage = document.getElementById("reg-result-message");

        // Call the checkPassword() function to make sure input in the password fields is valid & that they  match.
        const passwordValid = checkPassword();

        /* Use the form's checkValidity() function to validate the form's input. Display an appropriate message
           in the div for the result message. Don't use an alert or popup for the message.
         */
        if (form.checkValidity() && passwordValid) {
            resultMessage.textContent = "Registration successful!";
            resultMessage.style.color = "green";
        } else {
            resultMessage.textContent = "Please fix the errors in the form.";
            resultMessage.style.color = "red";
        }
    })
}

const checkPassword = function() {
    const passwordField = document.getElementById("reg-password-input")
    const verifyPasswordField = document.getElementById("reg-password-verify-input")
    /* Clear custom validity property for password fields before checking the validity of the form */
    passwordField.setCustomValidity("")
    verifyPasswordField.setCustomValidity("")
    // Check if passwords meet length requirement
    if (passwordField.value.length < 8) {
        passwordField.setCustomValidity("Password must be at least 8 characters long.");
        return false;
    }
    // Check if passwords match
    if (passwordField.value !== verifyPasswordField.value) {
        verifyPasswordField.setCustomValidity("Passwords do not match.");
        return false;
    }
    
    return true;
}
    
// Event handler called when page has loaded
window.onload = () => {
    // Add code here to call function to configure validation when page has loaded
    configureFormValidation();
}
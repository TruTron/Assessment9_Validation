const configureFormValidation = function() {
    // Block form submission - need to stay on same page. Note use of action="#", too, in the HTML
    document.getElementsByTagName("form").item(0).onsubmit = function(event) {
        event.preventDefault();
    }
    const submitButton = document.getElementById("reg-submit-button")
    submitButton.addEventListener("click", function() {
        // Find the form by id and save the form object to a variable

        // Get the div with the id reg-result-message and save it to a variable

        // Call the checkPassword() function to make sure input in the password fields is valid & that they  match.

        /* Use the form's checkValidity() function to validate the form's input. Display an appropriate message
           in the div for the result message. Don't use an alert or popup for the message.
         */


    })
}

const checkPassword = function() {
    const passwordField = document.getElementById("reg-password-input")
    const verifyPasswordField = document.getElementById("reg-password-verify-input")
    /* Clear custom validity property for password fields before checking the validity of the form */
    passwordField.setCustomValidity("")
    verifyPasswordField.setCustomValidity("")
    // Complete code compare password & verify password.
    // Use JavaScript's checkValidity() to confirm that the requirements in the HTML have been met.
    // When comparing the values in the password and password verification fields, use ===
    // Use setCustomValidity() to assign an error string when there is a problem.
    // Setting the custom validity to an empty string means the input is valid


}

// Event handler called when page has loaded
window.onload = () => {
    // Add code here to call function to configure validation when page has loaded
}
window.onload = function() {
    // Get the modal and the login button
    var modal = document.getElementById('login-modal');
    var btn = document.getElementById('login-button');

    // When the user clicks the login button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
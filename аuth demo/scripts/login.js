(function () {
    /**
     * Get the login button
     */
    var login = document.getElementById('login');

    /**
     * Listen for click event on the login button
     */
    login.addEventListener('click', sendForm);
})();

/**
 * Handle the click event by sending an asynchronous request to the server
 * @param {*} event
 */
function sendForm(event) {
    /**
     * Prevent the default behavior of the clicking the form submit button
     */
     event.preventDefault();

    /**
     * Get the values of the input fields
     */
    var userName = document.getElementById('user-name').value;
    var password = document.getElementById('password').value;
    var rememberMe = document.getElementById('remember-me').checked;

    /**
     * Create an object with the user's data
     */
    var user = {
        username: userName,
        password,
        remember: rememberMe
    };

    /**
     * Send POST request with user's data to api.php/login
     */
    const options = {
        method: 'POST',
        data: `data=${JSON.stringify(user)}`
    };

    sendRequest('./src/login.php', options, load, handleError);
}

/**
 * Handle the received response from the server
 * If there were no errors found on validation, the index.html is loaded.
 * Else the errors are displayed to the user.
 * @param {*} response
 */
function load(response) {
    const error = document.getElementById('errors');
    error.innerHTML = '';
    error.style.display = 'none';
    
    window.location = './index.html';
  }

  function handleError(errors) {
    const errorsLabel = document.getElementById('errors');
    errorsLabel.innerHTML = '';
    
    errors.forEach(function (error) {
      errorsLabel.innerHTML += error + '<br/>';
    });

    errorsLabel.style.color = 'red';
    errorsLabel.style.display = 'block';
  }
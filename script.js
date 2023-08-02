// indexedDB.html ka JavaScript Code:
function addUser() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var number = document.getElementById('number').value;

    if (!username || !email || !password || !number) {
        alert('Please fill all fields.');
        return;
    }

    var user = {
        username: username,
        email: email,
        password: password,
        number: number,
        signUpDate: new Date().toLocaleString() // Add the current date and time
    };

    var userList = JSON.parse(localStorage.getItem('userList')) || [];
    userList.push(user);

    localStorage.setItem('userList', JSON.stringify(userList));
    document.getElementById('signupForm').reset();
}

// Add an event listener to the form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    addUser();
});




function login(event)
{
event.preventDefault();
const username = document.getElementById('email').value;
const password = document.getElementById('password').value;

// Retrieve Data from localStorage
const user = JSON.parse(localStorage.getItem('user'));
if (user && user.email === username && user.password === password) { // use email for login
    // localStorage.setItem('loggedInUser', JSON.stringify({ email: user.email, username }));
    alert('YOU Login Successfully!');
    window.location.href = '../final_project/Hometest.html'; // Changed backslash to forward slash
}
else {
    alert('Invalid username or password.');
}

//   document.getElementsByClassName('btn').addEventListener('click', function (e) {

}
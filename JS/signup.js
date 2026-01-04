
function signup(event) {
  event.preventDefault();

  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password");
  let passwordconfirm = document.querySelector("#confirm-password");
  let message = document.getElementsByClassName('error-msg'); // Access the first element
  var goodColor = "#66cc66";
  var badColor = "#ff6666";
  if(password.value.length < 7)
  {
      // password.style.backgroundColor = badColor;
      console.log("The password length should beat least seven digit!");
      message[0].style.color = badColor;
      message[0].textContent = "The password length should beat least seven digit!";
      setTimeout(() => {
        message[0].textContent = "";
       }, 2000);
      return;
  }
  if (password.value !== passwordconfirm.value) {
      
      message[1].style.color = badColor;
      message[1].textContent = "These passwords don't match"; // Correct way to set text
      setTimeout(() => {
        message[1].textContent = "";
       }, 2000);
      return;
  } else {
      passwordconfirm.style.backgroundColor = goodColor;
      message.textContent = ""; // Clear the error message if passwords match
  }

  // Save data in local storage
  localStorage.setItem('user', JSON.stringify({ email,password:password.value })); 
  alert('You Signed up successfully! Please login.');
  window.location.href = '../final_project/login.html'; 
}
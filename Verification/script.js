document.getElementById("currentYear").textContent = new Date().getFullYear();



function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}


// Retrieve user data from local storage
var user_data = JSON.parse(localStorage.getItem("user")) || [];

// Extract email addresses
var emailAddresses = user_data.map(function(user) {
  return user.email;
});

// Get the p tag element
var emailDisplay = document.querySelector(".show-mail");

// Display email addresses in the p tag
emailDisplay.textContent = emailAddresses.join(", ");


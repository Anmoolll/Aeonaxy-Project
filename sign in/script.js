const password = document.querySelector("#password");
const username = document.querySelector("#username");
const error = document.querySelector(".Error");
const checkbox = document.querySelector("#terms");

function validateForm() {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const checkboxChecked = checkbox.checked;

  if (usernameValue === "") {
    error.innerHTML = "* Username cannot be blank";
    username.style.backgroundColor = "rgb(255,210,210)";
    username.addEventListener("input", function () {
      username.style.backgroundColor = "rgb(240, 240, 240)";
    });
    return false;
  } else {
    username.style.backgroundColor = "rgb(240, 240, 240)";
  }

  if (passwordValue === "") {
    error.innerHTML = "* Password is required";
    password.style.backgroundColor = "rgb(255,210,210)";
    password.addEventListener("input", function () {
      password.style.backgroundColor = "rgb(240, 240, 240)";
    });
    return false;
  } else if (passwordValue.length < 6) {
    error.innerHTML = "* Password must be at least 6 characters long";
    password.style.backgroundColor = "rgb(255,210,210)";
    password.addEventListener("input", function () {
      password.style.backgroundColor = "rgb(240, 240, 240)";
    });
    return false;
  } else {
    password.style.backgroundColor = "rgb(240, 240, 240)";
  }

  if (!checkboxChecked) {
    error.innerHTML = "* Please check the box";
    return false;
  }
  return true;

  let user_data = JSON.parse(localStorage.getItem("user")) || [];

  const user = user_data.find((v) => v.username === usernameValue && v.password === passwordValue);

  if (user) {
    alert("Login successful");
    return true; // Allow the form to be submitted
  } else {
    alert("Login failed");
    return false; // Prevent the form from being submitted
  }
}
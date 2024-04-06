const error = document.querySelector(".Error");
const password = document.querySelector("#password");
const name1 = document.querySelector("#name");
const username = document.querySelector("#username");
const form = document.querySelector("#form");
const email = document.querySelector("#email");
const checkbox = document.querySelector('#terms').checked;


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateForm() {
    const nameValue = name1.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const emailValue = email.value.trim();

    if(nameValue === '') {
        // alert("Name cannot be blank");
        error.innerHTML = "* Name cannot be blank"
        name1.style.backgroundColor = "rgb(255,210,210)";
        name1.addEventListener('input', function() {
            name1.style.backgroundColor = "rgb(240, 240, 240)";
        });
        return false;
    }else {
        name1.style.backgroundColor = "rgb(240, 240, 240)";
    }

    if(usernameValue === '') {
        // alert("Username cannot be blank");
        error.innerHTML = "* Username cannot be blank"
        username.style.backgroundColor = "rgb(255,210,210)";
        username.addEventListener('input', function() {
            username.style.backgroundColor = "rgb(240, 240, 240)";
        });
        return false;
    }else {
        name1.style.backgroundColor = "rgb(240, 240, 240)";
    }

    if(emailValue === '') {
        // alert("Email cannot be blank");
        error.innerHTML = "* Email cannot be blank"
        email.style.backgroundColor = "rgb(255,210,210)";
        email.addEventListener('input', function() {
            email.style.backgroundColor = "rgb(240, 240, 240)"; // Remove the highlight
        });
        return false;
    } else if (!isValidEmail(emailValue)) {
        // alert('Please provide a valid email address');
        error.innerHTML = "* Please provide a valid email address"
        email.style.backgroundColor = "rgb(255,210,210)";
        email.addEventListener('input', function() {
            email.style.backgroundColor = "rgb(240, 240, 240)"; // Remove the highlight
        });
        return false;
    }else {
        name1.style.backgroundColor = "rgb(240, 240, 240)";
    }

    if(passwordValue === '') {
        // alert('Password is required');
        error.innerHTML = "* Password is required"
        password.style.backgroundColor = "rgb(255,210,210)";
        password.addEventListener('input', function() {
            password.style.backgroundColor = "rgb(240, 240, 240)"; // Remove the highlight
        });
        return false;
    } else if (passwordValue.length < 6 ) {
        // alert('Password must be at least 6 characters long.');
        error.innerHTML = "* Password must be at least 6 characters long"
        password.style.backgroundColor = "rgb(255,210,210)";
        password.addEventListener('input', function() {
            password.style.backgroundColor = "rgb(240, 240, 240)"; // Remove the highlight
        });
        return false;
    }else {
        name1.style.backgroundColor = "rgb(240, 240, 240)";
    }

    

    

    


    return true; // If all conditions are met, return true
}

const error = document.querySelector(".Error");
const password = document.querySelector("#password").value;
function validateForm(){
    const name = document.querySelector("#name").value;
    if(name == "" || name == null){
        error.innerHTML = "*Enter the name";
        return false
    }if(password == "" || password == null){
        error.innerHTML = "* Password cannot be empty";
        // alert("NAHIIII")
        return false
    }if(password.length < 6){
        error.innerHTML = "* Password should be more than 6 char";
        return false
    }
}
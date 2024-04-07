const profilePic = document.querySelector("#Profile-pic");
const inputFile = document.querySelector("#input-file");
const inputLocation = document.querySelector("#location");
const button = document.querySelector("#submit");

inputFile.onchange = () => {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}

inputLocation.addEventListener("input", function(){
    if (inputLocation.value.trim() !== '') {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', 'disabled');
    }
})

inputLocation.addEventListener("keyup", function(e){
    if (e.key === 'Enter') {
        button.click();
    }
})
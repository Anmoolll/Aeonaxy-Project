const profilePic = document.querySelector("#Profile-pic");
const inputFile = document.querySelector("#input-file");
const inputLocation = document.querySelector("#location");
const button = document.querySelector("#submit");
const chooseDefault = document.querySelector(".default");
const popup = document.querySelector("#popup");

chooseDefault.addEventListener("click", function(){
    popup.style.display = 'block';
});

function closePopup() {
    popup.style.display = 'none';
}

popup.addEventListener('click', function(event){
    if(event.target.tagName === 'IMG'){
        //handle image
        console.log("Selected image: " + event.target.src);
    }
})

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
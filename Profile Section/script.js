const profilePic = document.querySelector("#Profile-pic");
const inputFile = document.querySelector("#input-file");

inputFile.onchange = () => {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}
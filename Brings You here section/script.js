const radioWork = document.querySelector("#work");
const radioHire = document.querySelector("#hire");
const radioInspo = document.querySelector("#inspo");
const divWork = document.querySelector(".work");
const divHire = document.querySelector(".hire");
const divInspo = document.querySelector(".inspo");
const radio = document.querySelector('input[type="radio"]');
const message = document.querySelector(".hidden");
const card = document.querySelector(".card");
const button = document.querySelector(".Finish")
function changeBorderColorWork(divWork){
    divWork.style.border = "3px solid #ea4b8b"
    radioWork.checked=true;
    message.style.display = 'block'
    button.removeAttribute('disabled');
}

function changeBorderColorHire(divHire){
    divHire.style.border = "3px solid #ea4b8b"
    radioHire.checked=true;
    message.style.display = 'block'
    button.removeAttribute('disabled');
}

function changeBorderColorInspo(divInspo){
    divInspo.style.border = "3px solid #ea4b8b"
    radioInspo.checked=true;
    message.style.display = 'block'
    button.removeAttribute('disabled');
}
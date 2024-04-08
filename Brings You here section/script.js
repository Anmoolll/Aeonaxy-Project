const radioWork = document.querySelector("#work");
const radioHire = document.querySelector("#hire");
const radioInspo = document.querySelector("#inspo");
const divWork = document.querySelector(".work");
const divHire = document.querySelector(".hire");
const divInspo = document.querySelector(".inspo");
const radio = document.querySelector('input[type="radio"]');
const messageWork = document.querySelector("#msgWork");
const messageHire= document.querySelector("#msgHire");
const messageInspo = document.querySelector("#msgInspo");
const message = document.querySelector("#message");
const card = document.querySelector(".card");
const button = document.querySelector(".Finish")


function changeBorderColorWork(divWork){
    divWork.style.border = "3px solid #ea4b8b"
    radioWork.checked=true;
    message.style.display = 'block';
    messageWork.style.display = 'block'
    button.removeAttribute('disabled');
    divWork.querySelector("img").style.marginTop = '-20%';
}

function changeBorderColorHire(divHire){
    divHire.style.border = "3px solid #ea4b8b"
    radioHire.checked=true;
    messageHire.style.display = 'block'
    button.removeAttribute('disabled');
    divHire.querySelector("img").style.marginTop = '-20%';
}

function changeBorderColorInspo(divInspo){
    divInspo.style.border = "3px solid #ea4b8b"
    radioInspo.checked=true;
    messageInspo.style.display = 'block'
    button.removeAttribute('disabled');
    divInspo.querySelector("img").style.marginTop = '-20%';
    // divWork.querySelector('img').style.transition = 'margin-top 1.3s ease';
}
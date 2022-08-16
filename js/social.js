//itens
var linkedin = document.querySelector("#linkedin");
var github = document.querySelector("#github");

//validar
function validarSocial() {
    if ((linkedin.value.length <= 0 || validarLink(linkedin.value)) &&
        validarLink(github.value)) {
        return true;
    } else {
        return false;
    }
}
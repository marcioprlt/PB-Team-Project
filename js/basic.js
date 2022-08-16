//itens
var nome = document.querySelector("#full-name");
var apelido = document.querySelector("#nick-name");
var email = document.querySelector("#e-mail");
var telefone = document.querySelector("#phone");
var checkbox = document.querySelector("#accept");

//validar
function validarBasic() {
    if (validarNome(nome.value) &&
        validarEmail(email.value) &&
        validarTelefone(telefone.value) &&
        validarData() &&
        checkbox.checked)
        {
            return true;
        } else {
            return false;
        }
}
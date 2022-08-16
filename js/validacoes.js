//validações individuais

function validarNome(nome) {
    var v = /^[a-zA-ZÀ-ÿ\s.,-]+$/.test(nome);
    //console.log("Formato de nome válido: " + v);
    return v;
}

function validarEmail(email) {
    var emailValido = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var v = emailValido.test(email);
    //console.log("Formato do email válido: " + v);
    return v;
}

function validarLink(link) {
    var linkValido = /\S\.\S/g;
    var v = linkValido.test(link);
    //console.log("Formato do link válido: " + v);
    return v;
}

function validarTelefone(telefone) {
    if (telefone.length <= 0) return true;

    var telefoneValido = /^(\d{2}|\(\d{2}\))(\d{5})-?(\d{4})$/;
    var v = telefoneValido.test(telefone);
    return v;
}

function validarData(){
    if (dia.value == "Day" || mes.value == "Month" || ano.value == "Year")
        return false;
    else
        return true;
}
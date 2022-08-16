//elementos
var navBasic = document.querySelector("#nav-basic");
var navSocial = document.querySelector("#nav-social");
var navCertificates = document.querySelector("#nav-certificates");

var formularios = document.querySelector("#forms");
var basic = document.querySelector("#form-basic");
var social = document.querySelector("#form-social");
var certificates = document.querySelector("#form-certificates");

var nextBasic = document.querySelector("#next-basic");
var nextSocial = document.querySelector("#next-social");
var finish = document.querySelector("#finish");


//inicio
navBasic.classList.add("nav-selected");

navSocial.disabled = true;
navSocial.classList.add("nav-disabled");

navCertificates.disabled = true;
navCertificates.classList.add("nav-disabled");

nextBasic.disabled = true;
nextSocial.disabled = true;
finish.disabled = true;

social.classList.add("hidden");
certificates.classList.add("hidden");


//navbar
navBasic.addEventListener("click", irParaBasic);
navSocial.addEventListener("click", irParaSocial);
navCertificates.addEventListener("click", irParaCert);

//validar nav
formularios.addEventListener("input", function() {

    vBasic = validarBasic();
    vSocial = validarSocial();


    if (vBasic) {
        navSocial.disabled = false;
        navSocial.classList.remove("nav-disabled");
    } else {
        navSocial.disabled = true;
        navSocial.classList.add("nav-disabled");
    }

    if (vBasic && vSocial) {
        navCertificates.disabled = false;
        navCertificates.classList.remove("nav-disabled");
    } else {
        navCertificates.disabled = true;
        navCertificates.classList.add("nav-disabled");
    }
});


//botões next
nextBasic.addEventListener("click", irParaSocial);
nextSocial.addEventListener("click", irParaCert);
finish.addEventListener("click", finalizar);


//validar botões
basic.addEventListener("input", function() {
    nextBasic.disabled = !validarBasic();
});

social.addEventListener("input", function() {
    nextSocial.disabled = !validarSocial();
});

certificates.addEventListener("input", function() {
    finish.disabled = !validarCert();
});


//funções ir
function irParaBasic(e) {

    e.preventDefault();

    basic.classList.remove("hidden");
    social.classList.add("hidden");
    certificates.classList.add("hidden");

    navBasic.classList.add("nav-selected");
    navSocial.classList.remove("nav-selected");
    navCertificates.classList.remove("nav-selected");
}

function irParaSocial(e) {

    e.preventDefault();

    basic.classList.add("hidden");
    social.classList.remove("hidden");
    certificates.classList.add("hidden");

    navBasic.classList.remove("nav-selected");
    navSocial.classList.add("nav-selected");
    navCertificates.classList.remove("nav-selected");
}

function irParaCert(e) {

    e.preventDefault();

    basic.classList.add("hidden");
    social.classList.add("hidden");
    certificates.classList.remove("hidden");

    navBasic.classList.remove("nav-selected");
    navSocial.classList.remove("nav-selected");
    navCertificates.classList.add("nav-selected");
}


//finalizar
function finalizar(e) {

    e.preventDefault();

    localStorage.setItem("name", nome.value);
    localStorage.setItem("nickname", apelido.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("phone", telefone.value);

    localStorage.setItem("birthday", dia.value + "/" + mes.value + "/" + ano.value);
    localStorage.setItem("age", idade.textContent);


    localStorage.setItem("linkedin", linkedin.value);
    localStorage.setItem("github", github.value);


    localStorage.setItem("teamname", teamName.value);
    localStorage.setItem("institution", institution.value);
    localStorage.setItem("graduation", graduation.value);


    lis = list.querySelectorAll("li"); //buscar os li's dentro da lista de certificados
    certList = [];

    for (var i = 0; i < lis.length; i++) {
        item = lis[i].querySelector("span").textContent;
        checkbox = lis[i].querySelector("input");

        //se está favoritada colocar no começo da lista
        if (checkbox.checked) {
            certList.unshift(item);
        } else {
            certList.push(item);
        }
    }

    localStorage.setItem("certs", certList);

    //ir para página final
    window.location.href = "final.html";
}
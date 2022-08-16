var tdNome = document.querySelector("#tdNome");
var tdNickname = document.querySelector("#tdNickname");
var tdEmail = document.querySelector("#tdEmail");
var tdPhone = document.querySelector("#tdPhone");
var tdBirthday = document.querySelector("#tdBirthday");
var tdAge = document.querySelector("#tdAge");

var tdLinkedIn = document.querySelector("#tdLinkedIn");
var tdGithub = document.querySelector("#tdGithub");

var certificatesList = document.querySelector("#certificates-list");
var tdTeamName = document.querySelector("#tdTeamName");
var tdInstitution = document.querySelector("#tdInstitution");
var tdGraduation = document.querySelector("#tdGraduation");

//
tdNome.textContent = localStorage.getItem("nome");
tdNickname.textContent = localStorage.getItem("nickname");
tdEmail.textContent = localStorage.getItem("email");
tdPhone.textContent = localStorage.getItem("phone");
tdBirthday.textContent = localStorage.getItem("birthday");
tdAge.textContent = localStorage.getItem("age");

tdLinkedIn.textContent = localStorage.getItem("linkedin");
tdGithub.textContent = localStorage.getItem("github");


var certList = localStorage.getItem("certs");
if (certList != "") { //dont create list if certs is empty
    
    certs = certList.split(",");

    for(var i = 0; i < certs.length; i++) {
        var item = document.createElement("li");
        item.textContent = certs[i];
    
        certificatesList.appendChild(item);
    }
}

tdTeamName.textContent = localStorage.getItem("teamname");
tdInstitution.textContent = localStorage.getItem("institution");
tdGraduation.textContent = localStorage.getItem("graduation");


buttonNew = document.querySelector("#buttonNew");
buttonNew.addEventListener("click", function() {
    
    window.location.href = "index.html";
});
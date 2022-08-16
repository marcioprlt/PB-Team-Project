//itens
var certificatesInput = document.querySelector("#certificates");
var mainFav = document.querySelector("#main-fav");
var more = document.querySelector("#more");
var list = document.querySelector("#list");

var teamName = document.querySelector("#team-name");
var institution = document.querySelector("#institution");
var graduation = document.querySelector("#graduation");


//inicio
more.disabled = true;
console.log(certificatesInput);


//-------adicionar botão de favorito dinámicamente-------
var mainFav = document.createElement("input");
mainFav.setAttribute("type", "checkbox");
mainFav.id = "main-fav";
mainFav.classList.add("hidden"); //botar hidden no checkbox e mostrar apenas a label
certificatesInput.parentNode.insertBefore(mainFav, certificatesInput.nextSibling);

var label = document.createElement("label");
label.setAttribute("for", "main-fav");
label.classList.add("heart");
mainFav.parentNode.insertBefore(label, mainFav.nextSibling);



//validar botão more
certificatesInput.addEventListener("input", function() {
    var inputIsBlank = certificatesInput.value.length <= 0;
    var listIsFull = list.querySelectorAll("li").length >= 5;
    more.disabled = (inputIsBlank || listIsFull);
});

//adicionar certificados
more.addEventListener("click", function(e) {

        e.preventDefault();

        var n = list.querySelectorAll("li").length; //length da lista de certificados

        if (n >= 5) return; //se n > 5 não adicionar mais elementos

        //criar elemento com fav
        var item = document.createElement("li");
        var texto = document.createElement("span");
        var checkbox = document.createElement("input");
        var label = document.createElement("label");
        var del = document.createElement("button");

        item.classList.add("certificate-item");

        texto.textContent = certificatesInput.value;

        checkbox.setAttribute("type", "checkbox");
        checkbox.id = "fav" + n;
        checkbox.classList.add("hidden");
        if (mainFav.checked) checkbox.checked = true;

        label.setAttribute("for", "fav" + n);
        label.classList.add("heart");

        del.textContent = "X";
        del.classList.add("button-delete");
        del.addEventListener("click", function(e) {
            e.target.parentNode.remove();
            calcularIds();
        });

        item.appendChild(texto);
        item.appendChild(checkbox);
        item.append(label);
        item.append(del);

        list.appendChild(item);

        calcularIds();

        certificatesInput.value = "";
        more.disabled = true;
        mainFav.checked = false;
});

//calcular id's de items
function calcularIds() {

    var lis = list.querySelectorAll("li");
        for(var i = 0; i < lis.length; i++)
        {
            var li = lis[i];
            li.querySelector("input").id = "fav" + i;
            li.querySelector("label").setAttribute("for", "fav"+ i);
        }
}

//validar
function validarCert() {
    if (teamName.value.length > 0 &&
        institution.value.length > 0 &&
        graduation.value.length > 0)
        {
            return true;
        } else {
            return false;
        }
}
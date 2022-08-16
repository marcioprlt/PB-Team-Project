var dia = document.querySelector("#day");
var mes = document.querySelector("#month");
var ano = document.querySelector("#year");
var idade = document.querySelector("#age");
idade.disabled = true;

dia.addEventListener("input", calcularIdade);
mes.addEventListener("input", calcularIdade);
ano.addEventListener("input", calcularIdade);

function calcularIdade() {

    if (dia.value.length == 0 || mes.value.length == 0 || ano.value.length == 0)
        return;

    var hoje = new Date();
    //var data = new Date(ano.value + "-" + mes.value + "-" + dia.value);

    var i = hoje.getFullYear() - ano.value;

    if ((mes.selectedIndex) > (hoje.getMonth() + 1)) {
        i--;
    }

    if ((mes.selectedIndex) == (hoje.getMonth() + 1) && dia.value > hoje.getDate())
    {
        i--;
    }

    idade.textContent = i;
    idade.value = i;
}
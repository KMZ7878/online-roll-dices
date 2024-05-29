var qmoeda = document.getElementById('moeda');
var option = selectElement.querySelector('option[value="1"]');













let dadoAtual = null;
function rolarDado(dado) {
    const resultado = Math.floor(Math.random() * dado) + 1;
    document.getElementById("D6").innerHTML = resultado;
}

document.getElementById("selector").addEventListener("click", function(event) {
    const target = event.target;
    if (target.tagName === "BUTTON") {
        dadoAtual = parseInt(target.getAttribute("data-dado")); // Atualiza o dado atual
        rolarDado(dadoAtual);
    }
});

document.getElementById("rolar").addEventListener("click", function() {
    if (dadoAtual !== null) {
        rolarDado(dadoAtual); // Rola o dado salvo na variável global
    } else {
        alert("Selecione um dado primeiro!");
    }
});
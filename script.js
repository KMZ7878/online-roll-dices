
function rolarDado(dado) {
    const resultado = Math.floor(Math.random() * dado) + 1;
    document.getElementById("dadinho").innerHTML = resultado;
}

document.getElementById("selector").addEventListener("click", function(event) {
    const target = event.target;
    if (target.tagName === "BUTTON") {
        const dado = parseInt(target.getAttribute("data-dado"));
        rolarDado(dado);
    }
});
const valorMoeda = document.getElementById("valorMoeda")
const valorASerConvertido = document.getElementById("valorASerConvertido")
var valorConvertido = document.getElementById("valorConvertido")
const FORM = document.getElementById("forms")

FORM.onsubmit = function(e) {
    e.preventDefault();
    FORM.reset();
};

function converteValor() {
    let convertido = valorASerConvertido.value/valorMoeda.value   
    
    if(!valorASerConvertido.value || !valorMoeda.value) {
        const erro = "Digite números válidos!"
        return valorConvertido.innerHTML = erro
    }
    
    return valorConvertido.innerHTML = convertido
}
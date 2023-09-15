const entradas = [5, 50, 10, 98, 23]
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor; 
}
 
function print(conteudo) {
    console.log(conteudo)
}

module.exports = {gets, print}
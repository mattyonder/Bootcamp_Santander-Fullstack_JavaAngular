/*
function teste(name) {
    console.log('Seu nome é: ' + name);
    // Funções que não devolvem nada são procedimentos
}

function quadrado(valor) {
    return valor * valor;
}
const quadradoDeDez = quadrado(10);

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo
}
*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return ("Abaixo do peso");

    } else if (imc >= 18.5 && imc < 25) {
        return ("Peso normal");
        
    } else if (imc >= 25 && imc < 30) {
        return ("Acima do peso");

    } else if (imc >= 30 && imc < 40) {
        return ("Obesidade");

    } else {
        return ("Obesidade grave");

    }
}

// Aqui eu criei uma função que vai ser feita e logo após vai ser
// chamada, mas só vai ser usada uma unica vez.

// Se eu não colocasse nome nela, ela seria uma função anonima
(function main() {
    const peso = 75;
    const altura = 1.80;
    const imc = calcularImc(peso, altura);

    console.log(classificarImc(imc))
})();

/* main = function () {
    console.log(1);
}

main();

No java Script, as funções são como objetos, podendo ser manipuladas
por meio de referenciação
*/